"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type VerticalAccordionItemProps = {
    title: ReactNode;
    content: ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    backgroundColor?: string;
    borderColor?: string;
    targetHeight?: number;
    onContentHeight?: (h: number) => void;
};

export default function VerticalAccordionItem({
    title,
    content,
    isOpen,
    onToggle,
    backgroundColor = "#2C305F",
    borderColor = "#DBB968",
    targetHeight,
    onContentHeight,
}: VerticalAccordionItemProps) {
    const measureRef = useRef<HTMLDivElement>(null);

    const [isMobile, setIsMobile] = useState(
        () => (typeof window !== "undefined" ? window.innerWidth < 768 : false)
    );

    const [vh, setVh] = useState(() =>
        typeof window !== "undefined" ? window.innerHeight : 0
    );

    useEffect(() => {
        const onR = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", onR);
        return () => window.removeEventListener("resize", onR);
    }, []);

    useEffect(() => {
        const onR = () => setVh(window.innerHeight);
        window.addEventListener("resize", onR);
        return () => window.removeEventListener("resize", onR);
    }, []);

    const ORIENT = isMobile ? "horizontal" : "vertical";

    const TAB_W = isMobile ? 44 : 130;
    const PANEL_W_CLAMP = "clamp(320px, 60vw, 1000px)";

    const closedW = ORIENT === "vertical" ? TAB_W : "100%";
    const openW   = ORIENT === "vertical" ? `calc(${TAB_W}px + ${PANEL_W_CLAMP})` : "100%";

    const mobileOpenH = Math.max(
        TAB_W,
        Math.min(targetHeight ?? 0, Math.max(0, vh - 32))
    );

    useEffect(() => {
        if (!measureRef.current || !onContentHeight) return;

        const measuredElement = measureRef.current;
        const resizeObserver = new ResizeObserver(() => onContentHeight(measuredElement.scrollHeight));

        resizeObserver.observe(measuredElement);
        onContentHeight(measuredElement.scrollHeight);
        return () => resizeObserver.disconnect();
    }, [onContentHeight]);

    return (
        <motion.div
            key={ ORIENT }
            className="relative overflow-hidden min-w-0 min-h-0"
            initial={ false }
            animate={{
                width: ORIENT === "vertical" ? (isOpen ? openW : closedW) : "100%",
                height: ORIENT === "horizontal" ? (isOpen ? mobileOpenH : TAB_W) : (targetHeight ?? "auto"),
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            aria-expanded={ isOpen }
        >
            {/* Content layer */}
            <div className="absolute inset-0 bg-white border-4" style={{ borderColor }}>
                <div className={ isMobile 
                    ? "h-full w-full overflow-y-auto overflow-x-hidden p-4"
                    : "h-full w-full overflow-y-auto overflow-x-hidden p-6"}
                >
                    <div className="max-w-full break-words">{ content }</div>
                </div>
            </div>

            {/* Hidden measurer */}
            <div className="absolute -z-10 opacity-0 pointer-events-none">
                <div ref={ measureRef } className="p-6" style={{ width: 1000 }}>
                    { content }
                </div>
            </div>

            {/* Curtain + tab */}
            <motion.div
                className="absolute inset-0 will-change-transform"
                style={{ backgroundColor }}
                initial={ false }
                animate={{
                    x: ORIENT === "vertical" ? (isOpen ? "100%" : "0%") : 0,
                    y: ORIENT === "horizontal" ? (isOpen ? "100%" : "0%") : 0,
                    opacity: isOpen ? 0 : 1,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                {!isOpen && (
                    <button
                        type="button"
                        onClick={ onToggle }
                        className="absolute flex items-center justify-center select-none text-white"
                        style={
                            ORIENT === "vertical"
                                ? { top: 0, left: 0, height: "100%", width: TAB_W }
                                : { top: 0, left: 0, width: "100%", height: TAB_W }
                        }
                        aria-label="Toggle department"
                    >
                        <div className="h-full w-full flex items-center justify-center">
                            { title }
                        </div>
                    </button>
                )}
            </motion.div>
        </motion.div>
    );
}