import bgSmall from "./assets/osam/OsAmMobil.png";
import bgBig from "./assets/osam/osamBGLarge.png";
import { ScheduleSection } from "./components/ScheduleSection";
import { FAQSection } from "./components/FAQSection";
import { StartSection } from "./components/StartSection";
import { OSASection } from "./components/OSASection";
import { PasswordWrapper } from "./components/PasswordWrapper";

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
                Och vi vill att ni kommer med och firar!
              </p>
            </div>
          </StartSection>

          <div className="my-20 p-py-16 space-y-48">
            {/* <OurStory /> */}
            <ScheduleSection />
            {/* <AccomodationSection /> */}
            <FAQSection />
            <OSASection />
          </div>
        </main>
      </div>
    </PasswordWrapper>
  );
};
