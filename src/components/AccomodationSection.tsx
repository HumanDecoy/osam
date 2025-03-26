import { SideSection } from "./SideSection";
import familj from "../assets/oss/familj.png";
import bandb from "../assets/bandb.jpg";

export const AccomodationSection = () => {
  return (
    <SideSection
      id="boende"
      title="Boendetips"
      imageSrc={familj}
      imageAlt="Boende"
    >
      <div className="prose">
        <p>
          Här kommer ett tips på boende i Örebro. Det finns ett billigt B&B
          precis bredvid festlokalen men vi rekommenderar annars ett hotell i
          stan.
        </p>
      </div>
      <div className="mt-4 p-4 border rounded-lg">
        <img src={bandb} className="rounded-lg" />
        <h2 className="text-xl font-bold my-2">Rosängen B&B</h2>
        <p className="text-gray-700">
          Ett mysigt och prisvärt bed and breakfast precis bredvid festlokalen.
        </p>
        <a
          href="https://rosangen.se/boende/"
          target="_blank"
          className="mt-2 inline-block text-blue-500 hover:text-blue-700"
        >
          Läs mer
        </a>
      </div>
    </SideSection>
  );
};
