export const OSASection = () => {
  return (
    <section id={"osa"} className="px-6 max-w-5xl mx-auto">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc-Zu1BltDVTSGUegSbRKEPDUQyAezEXRCy7rkrwkemIPM8yQ/viewform?embedded=true"
        width={"100%"}
        height={
          typeof window !== "undefined" && window.innerWidth <= 768
            ? 1340
            : 1200
        }
      >
        Laddar...
      </iframe>
    </section>
  );
};
