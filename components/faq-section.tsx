"use client";

import type React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What is Orca-q and who is it for?",
    answer:
      "Orca-q is an open-source database editor designed for developers, data analysts, and teams who want a simple but powerful tool for managing databases. It's suitable for both individual developers and small teams who need a friendly UI for queries and schema management.",
  },
  {
    question: "What can I do with Orca-q?",
    answer:
      "You can explore your database structure, generate queries with a friendly UI, build and edit schemas quickly, and manage multiple connections. It helps simplify daily database tasks without requiring deep SQL knowledge.",
  },
  {
    question: "Can I use Orca-q with my existing databases?",
    answer:
      "Yes. Orca-q supports popular databases like PostgreSQL and MySQL. You can connect using your existing credentials and start exploring tables, schemas, and queries right away.",
  },
  {
    question: "What's included in the free version?",
    answer:
      "The free version includes unlimited database connections, schema browsing, query generation, and data export/import features. It's fully open-source, so you can use it without restrictions.",
  },
  {
    question: "Do I need to install Orca-q?",
    answer:
      "You can use Orca-q directly in your browser with the web version, or install the desktop app for Windows and macOS if you prefer a local setup.",
  },
  {
    question: "Is my data secure with Orca-q?",
    answer:
      "Yes. Orca-q connects directly from your device to your database — your data is never sent to external servers. If you use the desktop app, everything runs locally on your computer.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onToggle();
  };
  return (
    <div
      className={`w-full bg-black/20 shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-white/20 outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer backdrop-blur-sm`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-white text-base font-medium leading-6 break-words">
          {question}
        </div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-white/70 transition-all duration-500 ease-out ${
              isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${
            isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"
          }`}
        >
          <div className="text-white/90 text-sm font-normal leading-6 break-words">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };
  return (
    <section className="w-full px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-white text-4xl font-semibold leading-10 break-words">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-white/70 text-sm font-medium leading-[18.20px] break-words">
            Everything you need to know about Orca-q and how it can transform
            your development workflow
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            {...faq}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
}
