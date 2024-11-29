"use client";
import { useSetAtom } from "jotai";
import { headerHeight } from "./Navbar/navbar";
import { useEffect, useRef, useState } from "react";

export let contentWitdth: number;

function Content({ child }) {
    const mainRef = useRef<HTMLDivElement>(null);
    const [contentMarginTop, setContentMarginTop] = useState(0)

    useEffect(() => {
        setContentMarginTop(headerHeight)
        contentWitdth = mainRef.current?.offsetWidth
    }, [])

    return (
        <main ref={mainRef} style={{marginTop: headerHeight ? contentMarginTop - 1 : 0}} className="flex-grow overflow-x-clip">
            {child}
        </main>
    )
}

export default Content;