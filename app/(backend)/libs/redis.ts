import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: 3,
  lazyConnect: true,
});

redis.on('connect', () => {
  console.log('Redis connected successfully');
});

redis.on('error', (error) => {
  console.error('Redis connection error:', error);
});

redis.on('close', () => {
  console.log('Redis connection closed');
});

export const CACHE_TTL = 300; // 5 minutes in seconds

export const startTime = () => Date.now();
export const getResponseTime = (start: number) => Date.now() - start;

export const generateCacheKey = (prefix: string, ...params: string[]): string => {
  return `${prefix}:${params.join(':')}`;
};

export const getFromCache = async (key: string): Promise<any | null> => {
  try {
    const cachedData = await redis.get(key);
    return cachedData ? JSON.parse(cachedData) : null;
  } catch (error) {
    console.warn('Cache read failed:', error);
    return null;
  }
};

export const setCache = async (key: string, data: any, ttl: number = CACHE_TTL): Promise<void> => {
  try {
    await redis.setex(key, ttl, JSON.stringify(data));
    console.log(`Cached data for key: ${key} (TTL: ${ttl}s)`);
  } catch (error) {
    console.warn('Cache write failed:', error);
  }
};

export const invalidateCacheByPattern = async (pattern: string): Promise<void> => {
  try {
    const keys = await redis.keys(pattern);
    if (keys.length > 0) {
      await redis.del(...keys);
      console.log(`Invalidated ${keys.length} cache keys matching pattern: ${pattern}`);
    }
  } catch (error) {
    console.error('Failed to invalidate cache:', error);
  }
};

export const clearAllCache = async (): Promise<void> => {
  try {
    await redis.flushall();
    console.log('All cache cleared');
  } catch (error) {
    console.error('Failed to clear all cache:', error);
  }
};

export const checkRedisHealth = async (): Promise<boolean> => {
  try {
    await redis.ping();
    return true;
  } catch (error) {
    console.error('Redis health check failed:', error);
    return false;
  }
};

export const logCachePerformance = (cacheHit: boolean, responseTime: number, key?: string): void => {
  const status = cacheHit ? 'CACHE HIT' : 'DATABASE';
  const cacheInfo = key ? ` (${key})` : '';
  console.log(`${status} - Response time: ${responseTime}ms${cacheInfo}`);
};

export const getCacheHeaders = (cacheHit: boolean, responseTime: number, ttl: number = CACHE_TTL) => {
  return {
    'Cache-Control': `public, max-age=${ttl}`,
    'X-Cache': cacheHit ? 'HIT' : 'MISS',
    'X-Response-Time': `${responseTime}ms`,
  };
};

export const withCaching = async <T>(
  cacheKey: string,
  fetchData: () => Promise<T>,
  ttl: number = CACHE_TTL
): Promise<{ data: T; cached: boolean; responseTime: number }> => {
  const timer = startTime();
  
  // try to get from cache first
  const cachedData = await getFromCache(cacheKey);
  if (cachedData) {
    const responseTime = getResponseTime(timer);
    logCachePerformance(true, responseTime, cacheKey);
    return { data: cachedData, cached: true, responseTime };
  }
  
  const freshData = await fetchData();
  const responseTime = getResponseTime(timer);
  
  await setCache(cacheKey, freshData, ttl);
  
  logCachePerformance(false, responseTime, cacheKey);
  return { data: freshData, cached: false, responseTime };
};

export default redis; 