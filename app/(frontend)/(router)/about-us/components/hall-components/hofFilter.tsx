import type { SemesterFilterProps } from "./types";

export default function HoFFilter({ semesters, onSelect, selectedLabel }: SemesterFilterProps) {
  const getSemesterValue = (label: string): string => {
    const letter = label.split(" ")[1]; // "Semester C" → "C"
    const year = new Date().getFullYear();
    return `${year}${letter}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const label = e.target.value;
    onSelect?.(getSemesterValue(label)); // tell parent to update
  };

  return (
    <div className="relative inline-block mb-3 xl:mr-8">
        <select 
            name="semester" 
            id="semesters" 
            value={selectedLabel}
            onChange={handleChange}
            className=" bg-[#DCB968] text-[#2C305F] font-semibold pr-8 px-4 py-2 rounded-md focus:outline-none appearance-none w-40 xl:text-lg"
        >
            {
                semesters.map((label) => (
                    <option key={label} value={label}>{label}</option>
                ))
            }
        </select>
        <div
            className="
            pointer-events-none
            absolute right-3 top-1/2 -translate-y-1/2
            w-0 h-0
            border-l-[6px] border-l-transparent
            border-r-[6px] border-r-transparent
            border-t-[6px] border-t-[#2C305F]
            "
        ></div>
    </div>
  );
}
