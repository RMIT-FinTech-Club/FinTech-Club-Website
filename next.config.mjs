const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
        domains: ['fintech-club-website.s3.ap-southeast-2.amazonaws.com'],
      },
}

export default nextConfig;
