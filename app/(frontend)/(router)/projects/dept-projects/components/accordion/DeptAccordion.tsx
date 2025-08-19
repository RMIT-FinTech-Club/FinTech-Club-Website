"use client";
import * as React from "react";
import { Accordion } from "@/components/ui/accordion";
import type { DepartmentAccordionProps } from "../types";
import { useSharedPanelHeight } from "../../hooks/useSharedPanelHeights";
import DeptTabPanel from "./DeptTabPanel";

export default function DepartmentAccordion({
  items,
  defaultValue = items[0]?.value,
  minTabWidth = 72,
  durationMs = 350, 
  className,
}: DepartmentAccordionProps) {
  const [open, setOpen] = React.useState<string | undefined>(defaultValue);

  const { sharedH, mapRef } = useSharedPanelHeight({ deps: [open, items.length], clampVh: 100 });

  const tabRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  const [tabW, setTabW] = React.useState(minTabWidth);

  const labelsKey = React.useMemo(() => items.map((i) => i.label).join("|"), [items]);

  React.useLayoutEffect(() => {
    const nodes = Object.values(tabRefs.current).filter((n): n is HTMLDivElement => !!n);
    if (!nodes.length) return;

    const measureAll = () => {
      const max = nodes.reduce(
        (m, n) => Math.max(m, Math.ceil(n.getBoundingClientRect().width)),
        0
      );
      if (max) setTabW((prev) => (prev !== Math.max(minTabWidth, max) ? Math.max(minTabWidth, max) : prev));
    };

    measureAll();
    const onR = () => measureAll();
    window.addEventListener("resize", onR);

    const ros = nodes.map((el) => {
      const ro = new ResizeObserver(measureAll);
      ro.observe(el);
      return ro;
    });

    return () => {
      window.removeEventListener("resize", onR);
      ros.forEach((ro) => ro.disconnect());
    };
  }, [labelsKey, minTabWidth]);

  const cssVars: React.CSSProperties & Record<`--${string}`, string> = {
    "--acc-h": "700px",
    "--acc-dur": `${durationMs}ms`,
    "--acc-tab-w": `${tabW}px`,
  };

  return (
    <Accordion
      type="single"
      collapsible
      value={open}
      onValueChange={(v: string | undefined) => setOpen(v)}
      className={`flex w-full min-w-0 
                  flex-col lg:flex-row lg:gap-0 lg:overflow-hidden 
                  overflow-x-auto lg:h-[var(--acc-h)] lg:items-stretch 
                  my-20
                  ${className ?? ""}`}
      style={cssVars}
    >
      {items.map(({ value, label, color, content, renderContent }) => (
        <DeptTabPanel
          key={value}
          value={value}
          label={label}
          color={color}
          isOpen={open === value}
          durationMs={durationMs}
          renderContent={renderContent}
          content={content}
          mapRef={mapRef}
        />
      ))}

      <div
        aria-hidden
        className="invisible fixed -z-50 top-0 left-0 pointer-events-none"
      >
        {items.map(({ value, label }) => (
          <div
            key={value}
            ref={(el) => { tabRefs.current[value] = el; }}
            className="px-4"
          >
            {/* label */}
          </div>
        ))}
      </div>
    </Accordion>
  );
}
