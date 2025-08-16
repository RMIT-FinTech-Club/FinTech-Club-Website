type DateChipProps = {
  month?: string;
  day?: string | number;
  year?: string | number;
  strong?: boolean;
};

export default function DateChip({
  month = "January",
  day = "22",
  year = "2025",
  strong = false,
}: DateChipProps) {
  return (
    <div
      className={`flex overflow-hidden rounded-lg ring-1 ring-black/10 gap-1 ${
        strong
          ? "shadow-[0_4px_0_0_rgba(0,0,0,0.25)]"
          : "shadow-[0_3px_0_0_rgba(0,0,0,0.20)]"
      }`}
      role="group"
      aria-label={`Date: ${month} ${day}, ${year}`}
    >
      <div className="bg-white text-neutral-900 flex items-center justify-center font-semibold px-2 py-2 min-w-[100px] md:min-w-[130px] text-base md:text-lg">
        <span className="font-bold">{month}</span>
      </div>
      <div className="bg-white text-neutral-900 flex items-center justify-center font-semibold px-2 py-2 min-w-[40px] md:min-w-[50px] text-base md:text-lg border-neutral-200">
        <span>{day}</span>
      </div>
      <div className="bg-white text-neutral-900 flex items-center justify-center font-semibold px-2 py-2 min-w-[90px] md:min-w-[90px] text-base md:text-lg border-neutral-200">
        <span>{year}</span>
      </div>
    </div>
  );
}
