// components/Section.tsx
interface SectionProps {
  id: string;
  title: string;
  imgSrc: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  imageAlt: string;
  children: React.ReactNode;
}

export const Section = ({
  id,
  title,
  imgSrc,
  imageAlt,
  children,
}: SectionProps) => {
  return (
    <section id={id} className="w-[874px] max-w-full mx-auto flex flex-col">
      {/* Image Container - Takes up roughly 50% of the height */}
      <div className="w-full h-[620px]">
        <img
          src={imgSrc}
          alt={imageAlt}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title Container */}
      <div className="py-8 px-6">
        <h2 className="text-4xl text-center">{title}</h2>
      </div>

      {/* Content Container */}
      <div className="flex-1 px-6 overflow-y-auto">{children}</div>
    </section>
  );
};
