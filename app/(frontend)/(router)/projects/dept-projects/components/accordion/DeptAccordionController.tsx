"use client";
import * as React from "react";
import DeptAccordion from "./DeptAccordion";
import type { DeptItem, DeptInputItem, DeptItemBase } from "../types";

type Props = {
  items: DeptInputItem[];
  defaultOpen?: string;
  alternateColors?: boolean;
};

const YELLOW = "bg-[#DBB968]";
const BLUE = "bg-[#2C305F]";

export default function DepartmentAccordionClient({
  items,
  defaultOpen,
  alternateColors = false,
}: Props) {
  const normalized: DeptItem[] = React.useMemo(() => {
    const withColors = items.map((it, idx) => ({
      ...it,
      color: alternateColors ? (idx % 2 === 0 ? YELLOW : BLUE) : it.color,
    }));

    return withColors.map((it) => ({
      ...it,
      renderContent:
        it.renderContent ??
        ((item: DeptItemBase) => (
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              Visit {item.label} department
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <article className="rounded-xl border p-4 bg-white/5">
                <h3 className="font-semibold">Design System</h3>
                <p className="text-sm opacity-80">ShadCN + Tailwind tokens</p>
                <a href="#" className="underline text-sm">
                  Docs
                </a>
              </article>
              <article className="rounded-xl border p-4 bg-white/5">
                <h3 className="font-semibold">Data Lake</h3>
                <p className="text-sm opacity-80">S3 + Glue + Athena</p>
                <a href="#" className="underline text-sm">
                  Run a query
                </a>
              </article>
              <article className="rounded-xl border p-4 bg-white/5">
                <h3 className="font-semibold">CI/CD</h3>
                <p className="text-sm opacity-80">Monorepo pipelines</p>
                <a href="#" className="underline text-sm">
                  View pipeline
                </a>
              </article>
            </div>
          </section>
        )),
    }));
  }, [items, alternateColors]);

  return (
    <DeptAccordion
      items={normalized}
      defaultValue={defaultOpen ?? normalized[0]?.value}
      minTabWidth={72}
      durationMs={250}
    />
  );
}
