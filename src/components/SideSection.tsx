// components/SideSection.tsx
interface SideSectionProps {
  id: string;
  title: string;
  imageSrc: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  imageAlt: string;
  children: React.ReactNode;
  imageOnRight?: boolean;
}

export const SideSection = ({
  id,
  title,
  imageSrc,
  imageAlt,
  children,
  imageOnRight = false,
}: SideSectionProps) => {
  return (
    <section id={id} className="px-6 max-w-5xl mx-auto">
      <div
        className={`
        flex flex-col md:flex-row justify-between
        ${imageOnRight ? "md:flex-row-reverse" : ""} 
        h-full
      `}
      >
        {/* Image Container */}
        <div className="w-full md:w-5/12 h-[50vh] md:h-full flex flex-col">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-lg"
          />
          <p className="text-left italic mt-2 text-sm text-gray-600">
            {imageAlt}
          </p>
        </div>

        {/* Content Container */}
        <div className="w-full md:w-1/2 p-8 md:px-8 md:py-0 flex flex-col">
          <h2 className="text-4xl mb-8">{title}</h2>
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </div>
    </section>
  );
};
