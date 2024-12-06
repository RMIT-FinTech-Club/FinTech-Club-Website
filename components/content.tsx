"use client";
import { headerHeight } from "@/components/navbar";
import { useEffect, useRef, useState, ReactNode } from "react";

type ContentProps = { children: ReactNode };

function Content({ children }: ContentProps) {
    const mainRef = useRef<HTMLDivElement>(null);
    const [contentMarginTop, setContentMarginTop] = useState(0);

    useEffect(() => {
        setContentMarginTop(headerHeight);
    }, []);

    return (
        <main ref={mainRef} style={{ borderTop: headerHeight ? `${contentMarginTop - 1}px solid #2C305F` : 0 }} className="flex-grow overflow-x-clip">
            {children}
        </main>
    )
}

export default Content;