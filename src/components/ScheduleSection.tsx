import { SideSection } from "./SideSection";
import fina from "../assets/oss/fina.png";
interface TimelineEventProps {
  time: string;
  event: string;
  desc: string;
  locationName?: string;
  address: string;
  addressLink?: string;
}

const TimelineEvent = ({
  time,
  event,
  desc,
  locationName,
  address,
  addressLink,
}: TimelineEventProps) => {
  return (
    <div className="space-y-2 border p-4 rounded-lg">
      <div className="text-2xl text-gray-600">{time}</div>
      <div className="text-2xl font-medium">{event}</div>
      {desc && <div className="font-medium text-lg">{desc}</div>}
      {address && (
        <div className="space-y-1 text-gray-600 pt-4">
          {locationName && <p>{locationName}</p>}
          <p>{address}</p>
          {addressLink && (
            <a
              href={addressLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline inline-block mt-1"
            >
              Se på kartan
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export const ScheduleSection = () => {
  return (
    <SideSection
      id="schema"
      title="Schema"
      imageSrc={fina}
      imageAlt="Wedding venue decorations"
      imageOnRight
    >
      <div className="space-y-8">
        <p>Mer info kommer när det närmar sig men här är grundidén</p>
        <TimelineEvent
          time="15:00"
          event="Vigsel"
          desc="Vigsel i Axbergs kyrka"
          address="Axbergs kyrka, Örebro"
          addressLink="https://maps.app.goo.gl/pwci77KgyhKdQYfF8"
        />
        <TimelineEvent
          time="17:00 - 01:00"
          event="Middag & fest"
          locationName="Orangeriet på eztrad"
          address={`Sommarrovägen 24, Örebro`}
          addressLink="https://maps.app.goo.gl/rK47DsmLcr9nXYa26"
          desc="Lite mingel och fördrinkar innan trerätters middag och sedan fest. Dryck ingår till maten men övrig alkohol får köpas själv i baren."
        />
      </div>
    </SideSection>
  );
};
