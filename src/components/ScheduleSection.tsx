import { SideSection } from "./SideSection";
import amos from "../assets/osam/amos2010.png";
interface TimelineEventProps {
  time: string;
  event: string;
  desc?: string;
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
    <div className="space-y-2 border p-4 rounded-lg bg-white">
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
      imageSrc={amos}
      imageAlt="Wedding venue decorations"
      imageOnRight
    >
      <div className="space-y-8">
        <TimelineEvent
          time="16:00"
          event="Vigsel"
          desc="Vigsel i Sofia kyrka"
          address="Klefbecks backe 1, 116 29 Stockholm"
          addressLink="https://maps.app.goo.gl/kdub4byQ5ep8TMfk6"
        />
        <TimelineEvent
          time="~ 17:10"
          event="Transport till Ekensdal"
          desc="Vi tar en kort promenad ner till barnängsbryggan och transporterar oss med båt till Ekensdal. "
          address="Barnängsbryggan"
          addressLink="https://maps.app.goo.gl/4W7UFbbk34aUQFoZA"
        />
        <TimelineEvent
          time="~17:45 - 02:00"
          event="Middag, mingel & fest"
          locationName="Ekensdal"
          address={`Skurusundsvägen 151, 131 46 Nacka`}
          addressLink="https://maps.app.goo.gl/K14hvR88pGjzjNKq5"
        />
      </div>
    </SideSection>
  );
};
