import bgBig from "./assets/bg-big.png";
import { ScheduleSection } from "./components/ScheduleSection";
import { AccomodationSection } from "./components/AccomodationSection";
import { FAQSection } from "./components/FAQSection";
import { StartSection } from "./components/StartSection";
import { OSASection } from "./components/OSASection";
import { PasswordWrapper } from "./components/PasswordWrapper";
import { OurStory } from "./components/OurStory";

export const App = () => {
  return (
    <PasswordWrapper>
      <div className="min-h-screen">
        <main>
          <StartSection
            id="home"
            title="Vi gifter oss!"
            imgSrc={bgBig}
            imageAlt="Happy couple"
          >
            <div className="prose max-w-none text-center text-lg md:w-1/2 mx-auto">
              <p className="text-gray-700">
                Kul att vi ska gifta oss, ännu roligare att du ska komma med. Vi
                är taggade på att ha med dig på vårt bröllop i Örebro.
                <br />
                <br />
                OBS Hemsidan är inte helt klar än så håll utkik framåt så du
                inte missar något.
              </p>
            </div>
          </StartSection>

          <div className="my-20 p-py-16 space-y-48">
            <OurStory />
            <ScheduleSection />
            <AccomodationSection />
            <FAQSection />
            <OSASection />
          </div>
        </main>
      </div>
    </PasswordWrapper>
  );
};
