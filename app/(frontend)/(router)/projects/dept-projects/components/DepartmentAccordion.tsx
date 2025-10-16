"use client";
import * as React from "react";
import { Accordion } from "@/components/ui/accordion";
import DeptAccordionItem from "./DeptAccordionItem";
import type { DeptInputItem, DeptItem } from "./types";

const YELLOW = "bg-[#DBB968]";
const BLUE = "bg-[#2C305F]";
const DEFAULT_TAB_WIDTH_PX = 80;
const ANIMATION_DURATION_MS = 300;

type Props = {
  items: DeptInputItem[];
  defaultOpen?: string;
};

export default function DepartmentAccordion({ items, defaultOpen }: Props) {
  const [openItem, setOpenItem] = React.useState<string | undefined>(
    defaultOpen ?? items[0]?.value
  );

  const normalizedItems: DeptItem[] = React.useMemo(() => {
    return items.map((item, idx) => ({
      ...item,
      color: item.color || (idx % 2 === 0 ? YELLOW : BLUE),
      // Default renderContent can be defined here if needed, or passed in directly
    }));
  }, [items]);

  const cssVars = {
    "--acc-dur": `${ANIMATION_DURATION_MS}ms`,
    "--acc-tab-w": `${DEFAULT_TAB_WIDTH_PX}px`,
    // The open panel's width is the full width minus the width of all other (closed) tabs
    "--acc-open-w": `calc(100% - ${
      (items.length - 1) * DEFAULT_TAB_WIDTH_PX
    }px)`,
  } as React.CSSProperties;

  return (
    <Accordion
      type="single"
      collapsible
      value={openItem}
      onValueChange={(v) => setOpenItem(v || undefined)}
      // [+] Simplified classes for a full-screen layout on desktop
      className="flex w-full min-w-0 flex-col lg:flex-row lg:h-screen"
      style={cssVars}
    >
      {normalizedItems.map(({ value, label, color, content, renderContent }) => (
        <DeptAccordionItem
          key={value}
          value={value}
          label={label}
          color={color}
          isOpen={openItem === value}
          renderContent={renderContent}
          content={content}
        />
      ))}
    </Accordion>
  );
}