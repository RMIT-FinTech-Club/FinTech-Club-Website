"use client";
import * as React from "react";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import StackedLabel from "./StackedLabel";
import type { DeptItemBase } from "../types";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BORDER_CLASS_MAP: Record<string, string> = {
  "bg-[#DBB968]": "border-[#DBB968]",
  "bg-[#2C305F]": "border-[#2C305F]",
};

type Props = {
  value: string;
  label: string;
  color: string;
  isOpen: boolean;
  durationMs: number;
  mapRef: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  renderContent?: (item: DeptItemBase) => React.ReactNode;
  content?: React.ReactNode;
};

export default function DeptAccordionItem({
  value,
  label,
  color,
  isOpen,
  durationMs,
  mapRef,
  renderContent,
  content,
}: Props) {
  const borderClass = BORDER_CLASS_MAP[color] ?? "border-current";

  return (
    <AccordionItem
      key={value}
      value={value}
      className={`
        group border-none
        + w-full lg:w-auto
        lg:flex lg:items-stretch lg:min-w-0
        ${isOpen ? "lg:flex-[1_1_1] lg:[flex-basis:var(--acc-open-w)]" : "lg:basis-[var(--acc-tab-w)] lg:flex-none"}
        transition-[flex-basis]
        ease-[cubic-bezier(0.4,0,0.2,1)]
      `}
      style={{ transitionDuration: `${durationMs}ms` }}
    >
      <AccordionTrigger
        className={`
          ${color ?? "bg-[#2C305F]"}
          text-white font-bold select-none
          flex items-center justify-center text-center [&>svg]:hidden
          h-14 px-4
          lg:w-[var(--acc-tab-w)] lg:shrink-0
          lg:h-full
          !rounded-none
          group-data-[state=open]:hidden
          shadow-inner
          md:[box-shadow:inset_-8px_0_6px_-4px_rgba(0,0,0,0.25)]
          [box-shadow:inset_0_8px_6px_-4px_rgba(0,0,0,0.25)]
        `}
      >
        <span className={`lg:hidden tracking-wide text-sm font-semibold uppercase ${poppins.className}`}>
          {label}
        </span>
        <StackedLabel label={label} />
      </AccordionTrigger>

      {/* Content width controller */}
      <div
        className={`
          w-full
          lg:min-w-0 lg:relative lg:z-[1]
          lg:transition-[flex-basis,opacity] lg:ease-[...]
          md:ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isOpen ? "lg:flex-none lg:[flex-basis:var(--acc-open-w)]" : "lg:flex-[0_0_0]"}
          // Remove any height/overflow restrictions for mobile!
        `}
        style={{ transitionDuration: `${durationMs}ms` }}
      >
        <AccordionContent
          className={`
            w-full p-4 md:p-8 text-left
            lg:h-[var(--acc-h)] lg:overflow-hidden
            transition-[opacity]
            ease-[cubic-bezier(0.4,0,0.2,1)]
            border-4 ${borderClass}
          `}
          style={{ transitionDuration: `${durationMs}ms` }}
        >
          <div
            ref={(el) => {
              (mapRef as React.MutableRefObject<Record<string, HTMLDivElement | null>>).current[value] = el;
            }}
            className="w-full break-words"
          >
            {renderContent ? renderContent({ value, label, color } as DeptItemBase) : content}
          </div>
        </AccordionContent>
      </div>
    </AccordionItem>
  );
}
