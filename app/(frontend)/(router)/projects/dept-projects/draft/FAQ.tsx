// app/page.tsx
import AccordionItem from "./AccordionItem";

export default function FAQ() {
  return (
    <div className="max-w-2xl mx-auto p-6 text-black">
      <h1 className="text-2xl font-bold mb-4">FAQs</h1>

      <AccordionItem
        title="What is Motion+?"
        content="Motion+ is a one-time fee, lifetime access membership that unlocks the source code for all Motion examples, early access features, premium components, and an exclusive Discord community."
      />

      <AccordionItem
        title="What does 'lifetime access' mean?"
        content="It means you have access to everything forever without recurring fees."
      />

      <AccordionItem
        title="How does the team package work?"
        content="It allows multiple users under a single license for collaborative work."
      />
    </div>
  );
}
