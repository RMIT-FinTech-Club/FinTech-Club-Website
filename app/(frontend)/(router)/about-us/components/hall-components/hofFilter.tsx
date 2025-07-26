
type FilterProps = {
    semesters: string[];
    onSelect?: (semester: string) => void;
}

export default function HoFFilter({ semesters, onSelect }: FilterProps) {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    const letter = selected.split(" ")[1];
    const year = "2025";
    const valueForData = `${year}${letter}`;
    onSelect?.(valueForData);
  };

  return (
    <div className="relative inline-block mb-3 xl:mr-8">
        <select 
            name="semester" 
            id="semesters" 
            onChange={handleChange}
            className=" bg-[#DCB968] text-[#2C305F] font-semibold pr-8 px-4 py-2 rounded-md focus:outline-none appearance-none w-40 xl:text-lg"
        >
            {
                semesters.map((sem, idx) => (
                    <option key={idx} value={sem} id={sem}>{sem}</option>
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
