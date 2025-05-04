import { SideSection } from "./SideSection";
import toast from "../assets/osam/nisseerik.jpg";

export const AccomodationSection = () => {
  return (
    <SideSection
      id="tal"
      title="Jag vill hålla tal!"
      imageSrc={toast}
      imageAlt="Erik och Nils Folker"
    >
      <div className="prose">
        <p>
          Kul! Toastmasters på vårt bröllop kommer vara bröderna Erik och Nils
          Folker. Vill du hålla ett tal eller något annat under middagen så hör
          du av dig till dem via <strong>Nilserikfolker@gmail.com</strong>.
        </p>
        <p>Vi ser gärna att man försöker hålla taltiden till max 3 minuter.</p>
      </div>
    </SideSection>
  );
};
