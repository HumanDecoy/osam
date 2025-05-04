import { SideSection } from "./SideSection";
import glada from "../assets/oss/glada.png";
import unga from "../assets/oss/unga.png";
import coola from "../assets/oss/coola.png";

export const OurStory = () => {
  return (
    <SideSection
      id="story"
      title="Vår berättelse"
      imageSrc={glada}
      imageAlt="Vår berättelse"
      imageOnRight={false} // optional - defaults to false (image on left)
    >
      <div className="prose space-y-6">
        <p>
          Som sig bör när man ska gifta sig vill man ju ha koll på hur allt
          började, eller hur? Så här kommer vår resa – kul ju!
        </p>
        <p>
          Vi träffades under det beryktade covid-året 2020, och som många andra
          då hittade vi varandra på Tinder. Mathias bodde i Råcksta med Niklas,
          medan Mira hyrde ett studentrum i andra hand vid Telefonplan. Mathias
          fick knappt tag på Mira de första dagarna, men skam den som ger sig!
          Till slut var Mira med på noterna, och efter lite snack på Tinder
          bestämde vi oss för att ses.
        </p>
        <p>
          Det blev en promenaddejt en onsdag efter jobbet. Vi möttes utanför
          Miras jobb och började ströva längs vattnet mot Telefonplan, där vi
          tänkte skiljas åt. Men det blev snabbt klart att vi hade alldeles för
          trevligt för att sluta där. När vi kom fram till Liljeholmen åt vi
          lite mat och fortsatte promenera, och till slut hamnade vi vid
          utkiksplatsen där man ser ut över Stockholm. Där satt vi och pratade,
          lyssnade på musik och delade vår första kyss. Fem timmar senare
          avslutade vi vår nu ganska legendariska promenaddejt.
        </p>
        <p>
          Efter det sågs vi i princip varje dag. Två månader senare karantänade
          vi ihop inför jul, och tre månader efter det flyttade vi in i vår
          första lägenhet på Hornsgatan. Drygt ett år senare köpte vi vårt
          första gemensamma hem och flyttade – som alla andra Norénare – till
          Bandhagen. Där bor vi fortfarande, men sedan sommaren 2023 med en ny
          liten familjemedlem: vår son Vide!
        </p>
        <p>
          Sommaren 2024, på samma utkiksplats i Liljeholmen, så tog Mathias med
          sig en glatt oanade Mira och en sovande Vide i vagnen. Där så frågade
          Mathias om Mira ville gifta sig och efter att ha varit i chock (i vad
          som Mathias beskriver som en evighet) så svarade Mira naturligtvis ja!
          Och nu är vi här – redo för bröllop! Det har gått snabbt, men oj vad
          vi har hunnit med på vägen.
        </p>
      </div>
    </SideSection>
  );
};
