export const metadata = {
  title: "FAQs | Tulos",
  description:
    "Find answers to frequently asked questions about our products, services, and policies.",
  alternates: {
    canonical: "/faqs",
  },
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/Container";
import { faqsData } from "@/constants";

const FAQPage = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Frequently Asked Questions
        </h1>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-0"
        >
          {faqsData.map((faq, index) => (
            <AccordionItem
              value={`item-${index}`}
              key={index}
              className="group"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-800/80 group-hover:text-gray-[800] hover:no-underline hovereffect">
                {faq?.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq?.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default FAQPage;
