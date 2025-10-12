"use client";
import * as React from "react";

export function useSharedPanelHeight({
  deps = [],
  clampVh = 100,
  activeKey,
}: { deps?: React.DependencyList; clampVh?: number; activeKey?: string }) {
  const mapRef = React.useRef<Record<string, HTMLDivElement | null>>({});
  const [sharedH, setSharedH] = React.useState(0);
  const depsKey = React.useMemo(() => JSON.stringify(deps), deps);

  const measure = React.useCallback(() => {
    const win = typeof window !== "undefined" ? window : null;
    const vh = win ? win.innerHeight : 0;
    const vw = win ? win.innerWidth : 0;

    const nodes = Object.values(mapRef.current).filter(
      (n): n is HTMLDivElement => !!n
    );

    const active = activeKey ? mapRef.current[activeKey] : null;
    let natural = active?.scrollHeight ?? 0;

    if (!natural) {
      natural = nodes.reduce((m, n) => Math.max(m, n.scrollHeight || 0), 0);
    }

    const floor = 320;
    if (!natural) {
      setSharedH((prev) => prev || floor);
      return;
    }

    const bpClamp = vw >= 1024 ? 70 : vw >= 768 ? 80 : 95;
    const cap = vh ? Math.floor((vh * Math.min(clampVh, bpClamp)) / 100) : natural;
    const next = Math.max(Math.min(natural, cap), floor);

    setSharedH((prev) => (prev !== next ? next : prev));
  }, [activeKey, clampVh]);

  React.useLayoutEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure, depsKey]);

  React.useEffect(() => {
    const entries = Object.values(mapRef.current).filter(
      (n): n is HTMLDivElement => !!n
    );
    const ros = entries.map((el) => {
      const ro = new ResizeObserver(() => measure());
      ro.observe(el);
      return ro;
    });
    return () => ros.forEach((ro) => ro.disconnect());
  }, [measure, depsKey]);

  return { sharedH, mapRef };
}
