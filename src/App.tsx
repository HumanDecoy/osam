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
                Och vi vill att ni kommer med och firar!
              </p>
            </div>
          </StartSection>

          <div className="my-20 p-py-16 space-y-48">
            {/* <OurStory /> */}
            <ScheduleSection />
            <AccomodationSection />
            <FAQSection />
            <OSASection />
            <div
              style={{
                padding: "0 16px",
                marginTop: "60  px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="w-full md:w-5/12 h-[50vh] md:h-full">
                <img
                  src={frha}
                  alt={"freyja och harald"}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </PasswordWrapper>
  );
};
