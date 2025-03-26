export const FullScreenIframe = ({ url }: { url: string }) => {
  return (
    <iframe
      src={url}
      className="absolute top-0 left-0 w-full h-full border-none"
      title="Full screen content"
      allowFullScreen
    />
  );
};

// Usage example:
// <FullScreenIframe url="https://example.com" />
