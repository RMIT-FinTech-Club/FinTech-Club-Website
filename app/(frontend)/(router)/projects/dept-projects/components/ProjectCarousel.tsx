"use client";
import * as React from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, PhotoIcon } from "@heroicons/react/24/solid";

type ProjectItem = {
    id: string | number;
    title: string;
    imageUrl?: string;
    description?: string;
    slug?: string;
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
                    gap-4 md:max-lg:gap-2 lg:gap-6
                    px-2 md:max-lg:px-2 lg:px-4
                    "
                >
                {group.map((item) => (
                    <article
                        key={item.id}
                        className="group h-full flex flex-col rounded-lg bg-white border-[4px] border-[#2C305F]
                                    overflow-hidden shadow-sm md:max-lg:rounded-lg"
                    >
                        {/* Media stays fixed so the card height never changes */}
                        <div className="relative w-full aspect-[16/9]">
                            {item.imageUrl ? (
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(min-width:1024px) 50vw, 100vw"
                            />
                            ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-[#2C305F]/40">
                                <PhotoIcon className="h-10 w-10" />
                            </div>
                            )}
                        </div>

                        {/* Sliding bottom panel */}
                        <div className="relative flex-1">
                            {/* The whole panel is absolutely positioned and slides up.
                                56px = visible title strip height at rest. */}
                            <div
                            className="
                                absolute inset-x-0 bottom-0
                                translate-y-[calc(100%-56px)]
                                group-hover:translate-y-0 group-focus-within:translate-y-0
                                transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                                will-change-transform
                            "
                            >
                            {/* Title strip (always visible) */}
                            <div className="bg-[#2C305F] text-white font-semibold leading-none
                                            min-h-14 px-4 lg:px-5 flex items-center">
                                {item.title}
                            </div>

                            {/* Revealed content */}
                            <div className="bg-[#2C305F] px-4 lg:px-5 pb-4 pt-2 text-white/90 space-y-3 flex flex-row items-center justify-between">
                                {item.description ? (
                                    <p className="text-sm opacity-90 text-left flex-1">{item.description}</p>
                                ) : <span className="flex-1" />}

                                <div className="ml-4">
                                    <a
                                        href={`/projects/${item.slug}`}
                                        className="inline-flex items-center justify-center rounded-xl
                                                bg-[#DBB968] text-[#2C305F] font-semibold
                                                px-5 py-2.5 shadow
                                                hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-white/40"
                                    >
                                        Explore More
                                    </a>
                                </div>
                            </div>
                            </div>
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