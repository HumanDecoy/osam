import { useState } from "react";
import { SideSection } from "./SideSection";
import fulla from "../assets/oss/fulla.png";

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
        "Vi rekommenderar att du kommer 15-30 minuter innan ceremonin börjar kl. 15:00 för att säkerställa att du har tid att sätta dig.",
    },
    {
      question: "Vad är klädkoden?",
      answer:
        "Klädkoden är rätt avslappnad kom gärna i kostym, skjorta eller klänning men det är inget krav. Det viktigaste är att du känner dig bekväm.",
    },
    {
      question: "Kan jag ta med en gäst?",
      answer:
        "Vänligen se vilka som är nämda på din inbjudan. Om du vill ha med en gäst och det inte står på inbjudan, vänligen kontakta oss så fort som möjligt.",
    },
    {
      question: "Är barn välkomna?",
      answer:
        "Under vigseln är alla välkomna men även om vi älskar dina små, så kommer middag och festen endast vara för vuxna. Ammande barn är dock välkomna. Vi hoppas att du förstår och kan ordna barnomsorg.",
    },
    {
      question: "Var kan jag parkera?",
      answer:
        "Det finns parkeringsplatser vid både ceremonin och mottagningslokalerna. Parkering är gratis.",
    },
    {
      question: "Behöver jag ta med en present?",
      answer:
        "Nej ingen present krävs, din närvaro är det viktigaste för oss. Om du ändå vill ge oss något så är ett bidrag till vår bröllopsresa välkommet.",
    },
    {
      question: "Hur får jag tag på er?",
      answer:
        "Du kan ringa eller smsa Mira på 076-190 81 85 eller Mathias på 073-846 82 29",
    },
  ];

  return (
    <SideSection
      id="faq"
      title="Frågor och svar"
      imageSrc={fulla}
      imageAlt="Decorative wedding image"
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
