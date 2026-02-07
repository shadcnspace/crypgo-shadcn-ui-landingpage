// components/Faq.js
"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";

const faqData = [
  {
    question: "What is Crypgo?",
    answer:
      "Crypgo is a cryptocurrency exchange that allows users to trade 100+ cryptocurrencies worldwide.",
  },
  {
    question: "Is Crypgo available worldwide?",
    answer: "Yes, Crypgo is accessible from most countries around the globe.",
  },
  {
    question: "Which cryptocurrencies are supported on Crypgo?",
    answer:
      "We support Bitcoin, Ethereum, Litecoin, and many more. Over 100 cryptocurrencies are available.",
  },
  {
    question: "Is my personal information secure with Crypgo?",
    answer:
      "Yes, we prioritize your security with advanced encryption and compliance protocols.",
  },
  {
    question: "Are there any deposit or withdrawal fees?",
    answer:
      "Our fee structure is transparent. Visit our pricing page for detailed info.",
  },
  {
    question: "Does Crypgo offer advanced trading tools?",
    answer:
      "Yes, Crypgo provides charts, APIs, and tools suitable for both beginners and professionals.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className=" py-16 text-white">
      <div className="container">
        <div className=" mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-green-400 uppercase text-sm">
              Popular questions
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              Learn more about Crypgo
            </h2>
            <p className="text-gray-400 mt-2">
              We accept 100+ cryptocurrencies around the world
            </p>
          </div>
          <Accordion className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 rounded-lg border-none px-4"
              >
                <AccordionTrigger className="text-lg font-medium hover:no-underline py-4 **:data-[slot=accordion-trigger-icon]:hidden">
                  {item.question}
                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
