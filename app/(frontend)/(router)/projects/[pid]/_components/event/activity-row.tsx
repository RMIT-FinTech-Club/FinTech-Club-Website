import { type ReactNode } from "react";

type ActivityRowProps = {
  bg?: string;
  strong?: boolean;
  children?: ReactNode;
};

export default function ActivityRow({
  bg = "#ECEAF9",
  strong = false,
  children,
}: ActivityRowProps) {
  return (
    <section
      className={`w-full rounded-xl px-2 md:px-3 py-2 md:py-3 ring-1 ring-black/10 ${
        strong
          ? "shadow-[0_6px_0_0_rgba(0,0,0,0.35)]"
          : "shadow-[0_3px_0_0_rgba(0,0,0,0.25)]"
      }`}
      style={{ backgroundColor: bg }}
      aria-label="Activity item"
    >
      <div className="flex items-center">{children}</div>
    </section>
  );
}
