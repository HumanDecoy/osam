import bgSmall from "./assets/osam/OsAmMobil.png";
import bgBig from "./assets/osam/osamBGLarge.png";
import { ScheduleSection } from "./components/ScheduleSection";
import { FAQSection } from "./components/FAQSection";
import { StartSection } from "./components/StartSection";
import { OSASection } from "./components/OSASection";
import { PasswordWrapper } from "./components/PasswordWrapper";
import { AccomodationSection } from "./components/AccomodationSection";
import frha from "./assets/osam/freyjaharald.jpg";

export const App = () => {
  return (
    <PasswordWrapper>
      <div className="min-h-screen">
        <main>
          <StartSection
            id="home"
            title="Vi gifter oss!"
            imgSrc={window.innerWidth <= 768 ? bgSmall : bgBig}
            imageAlt="oscar och amanda"
          >
            <div className="prose max-w-none text-center text-lg md:w-1/2 mx-auto">
              <p className="text-gray-700">
                Den 1 augusti 2025 vill vi att ni kommer med oss och firar!
              </p>
            </div>
          </StartSection>

          <div className="my-20 p-py-16 space-y-48">
            {/* <OurStory /> */}
            <ScheduleSection />
            <AccomodationSection />
            <FAQSection />
            <OSASection />
            <div className="px-4 mt-16 flex flex-col items-center">
              <div className="w-full md:w-5/12">
                <div className="w-full h-[50vh] md:h-full">
                  <img
                    src={frha}
                    alt="freyja och harald"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 italic text-left">
                  Freyja & Harald
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PasswordWrapper>
  );
};
