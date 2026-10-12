"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { content } from "@/data/content";
import type { Locale } from "@/lib/site";

export default function Faq({ locale }: { locale: Locale }) {
  return <Accordion type="single" collapsible className="faq-list">{content[locale].faqs.map(([question, answer], i) => <AccordionItem key={question} value={`faq-${i}`}><AccordionTrigger className="faq-question">{question}</AccordionTrigger><AccordionContent className="faq-answer">{answer}</AccordionContent></AccordionItem>)}</Accordion>;
}
