"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type AccordionItemProps = {
  title: string;
  content: string;
};

export default function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout className="border-b border-gray-600">
      <motion.button
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left text-black"
      >
        <span className="font-medium text-lg">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDownIcon className="h-5 w-5 text-black" />
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="py-2 text-gray-300">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
