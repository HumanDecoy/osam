import { useState } from "react";
import { SideSection } from "./SideSection";

import nacka from "../assets/osam/osamfr.jpg";
import nackaSm from "../assets/osam/osamfr.jpg";
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <div
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl font-medium">{question}</span>
      </div>

      <div className="pb-4">
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export const FAQSection = () => {
  const faqs = [
    {
      question: "Vilken tid ska jag komma till vigseln?",
      answer:
        "Vigseln börjar klockan 16:00. Försök att vara på plats en liten stund innan.",
    },
    {
      question: "Är barn välkomna?",
      answer:
        "Vi älskar barn, men den här kvällen så är det endast vuxna. Ammande barn är såklart välkomna.",
    },
    {
      question: "Hur tar jag mig hem från Ekensdal?",
      answer:
        "Ekensdal ligger tyvärr lite avsides, men det finns en buss (409) som går till Slussen från stationen Kungshamn, den ligger 10 minuters promenad från Ekensdal. Vi rekomenderar dock att ni beställer en taxi. Ska ni åka buss så är det en bra ide att kontrollera med SL.se då bussen på natten ibland kräver ett byte.",
    },
    {
      question: "Hur gör jag om jag behöver få tag på er?",
      answer:
        "Du kan ringa Oscar på 070-751 80 21 eller Amanda på 070-750 27 13.",
    },
    {
      question: "Behöver jag ta med en present?",
      answer:
        "Nej du behöver inte ta med en present, det viktigaste för oss är att ni kommer och firar med oss! Skulle ni ändå vilja ge oss något så tar vi gärna emot ett bidrag som ni kan sätta in på det här kontot: 9710-07 847 88 (Bank Lunar). Det går även bra att swisha.",
    },
  ];

  return (
    <SideSection
      id="faq"
      title="Frågor och svar"
      imageSrc={window.innerWidth <= 768 ? nackaSm : nacka}
      imageAlt="Nacka 2019"
      imageOnRight
    >
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </SideSection>
  );
};
