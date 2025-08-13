"use client";
import * as React from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, PhotoIcon } from "@heroicons/react/24/solid";

type ProjectItem = {
    id: string | number;
    title: string;
    imageUrl?: string;
};

function usePerPage() {
    const mq = "(min-width: 1024px)";
    const [twoUp, setTwoUp] = React.useState(false);

    React.useEffect(() => {
        const mql = window.matchMedia(mq);
        const apply = () => setTwoUp(mql.matches);
        apply();
        mql.addEventListener?.("change", apply);
        mql.addListener?.(apply);
        return () => {
            mql.removeEventListener?.("change", apply);
            mql.removeListener?.(apply);
        };
    }, []);

    return twoUp ? 2 : 1;
}

export default function ProjectCarousel({ items }: { items: ProjectItem[] }) {
    const perPage = usePerPage();
    const pages = React.useMemo(() => {
        const out: ProjectItem[][] = [];
        for (let i = 0; i < items.length; i += perPage) {
            out.push(items.slice(i, i + perPage));
        }
        return out;
        }, [items, perPage]);

    const [page, setPage] = React.useState(0);

    React.useEffect(() => {
        setPage((p) => Math.min(p, Math.max(0, pages.length - 1)));
    }, [pages.length]);

    const canPrev = page > 0;
    const canNext = page < pages.length - 1;

    const goPrev = () => canPrev && setPage((p) => p - 1);
    const goNext = () => canNext && setPage((p) => p + 1);

    return (
        <div className="relative w-full pt-4 md:max-lg:pt-3">
        {/* viewport */}
        <div className="overflow-hidden">
            {/* track */}
            <div
            className="flex transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(-${page * 100}%)` }}
            >
            {pages.map((group, i) => (
                <div
                key={i}
                className="
                    w-full shrink-0 grid
                    grid-cols-1            /* mobile + tablet (<=1023): 1 column */
                    lg:grid-cols-2         /* desktop (>=1024): 2 columns */
                    gap-6 md:max-lg:gap-4 lg:gap-8
                    px-2 md:max-lg:px-2 lg:px-4
                    "
                >
                {group.map((item) => (
                    <article
                    key={item.id}
                    className="rounded-xl bg-white border-[4px] border-[#2C305F] overflow-hidden shadow-sm md:max-lg:rounded-xl"
                    >
                    {/* media area */}
                        <div className="relative bg-white h-40 sm:h-44 md:max-lg:h-48 lg:h-56">
                            {item.imageUrl ? (
                                <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                priority={false}
                                />
                            ) : (
                                <div className="h-full w-full flex items-center justify-center text-[#2C305F]/40">
                                <PhotoIcon className="h-10 w-10" />
                                </div>
                            )}
                        </div>
                    {/* title bar */}
                    <div className="bg-[#2C305F] text-white font-semibold px-3 py-2 lg:px-4 lg:py-3">
                        {item.title}
                    </div>
                    </article>
                ))}
                </div>
            ))}
            </div>
        </div>

        {/* arrows */}
        {pages.length > 1 && (
            <>
            <button
                onClick={goPrev}
                aria-label="Previous"
                className={`flex absolute left-2 md:left-3 lg:-left-8 top-1/2 -translate-y-1/2
                            z-20 h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full
                            bg-[#DBB968] text-black shadow
                            ${canPrev ? "" : "opacity-40 pointer-events-none"}`}
                >
                <ChevronLeftIcon className="h-5 w-5" />
            </button>

                <button
                onClick={goNext}
                aria-label="Next"
                className={`flex absolute right-2 md:right-3 lg:-right-8 top-1/2 -translate-y-1/2
                            z-20 h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full
                            bg-[#DBB968] text-black shadow
                            ${canNext ? "" : "opacity-40 pointer-events-none"}`}
                >
                <ChevronRightIcon className="h-5 w-5" />
                </button>

            </>
        )}

        {/* dots */}
        {pages.length > 1 && (
            <div className="mt-4 flex items-center justify-center gap-2">
            {pages.map((_, i) => (
                <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition
                            ${i === page ? "bg-[#DBB968]" : "bg-[#D4CACD]"}`}
                />
            ))}
            </div>
        )}
        </div>
    );
}