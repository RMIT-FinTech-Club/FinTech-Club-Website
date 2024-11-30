"use client";
import { headerHeight } from "./Navbar/navbar";
import { useEffect, useRef, useState, ReactNode } from "react";

export let contentWitdth: number;
type ContentProps = {
    children: ReactNode; // Định nghĩa kiểu cho children
};

function Content({ children }: ContentProps) {
    const mainRef = useRef<HTMLDivElement>(null);
    const [contentMarginTop, setContentMarginTop] = useState(0)

    useEffect(() => {
        setContentMarginTop(headerHeight)
        if (mainRef.current) {
            contentWitdth = mainRef.current?.offsetWidth
        }
    }, [])

    return (
        <main ref={mainRef} style={{ marginTop: headerHeight ? contentMarginTop - 1 : 0 }} className="flex-grow overflow-x-clip">
            {children}
        </main>
    )
}

export default Content;