import CategoryCard from "./categoryCard";

type FilterProps = {
    categories: string[];
    semester: string;
}

export default function Categories({ categories, semester }: FilterProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="lg:grid md:grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 justify-items-center w-full">
        {categories.map((cat, idx) => {
          const isLast = idx === categories.length - 1;
          return (
            <div
              key={cat}
              className={isLast ? "col-span-2" : ""}
            >
              <CategoryCard category={cat} semester={semester}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}


