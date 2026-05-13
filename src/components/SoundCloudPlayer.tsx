

interface SoundCloudPlayerProps {
  url: string;
  title?: string;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ url, title }) => {
  // Convert standard SoundCloud URL to embed URL if needed
  // Example: https://soundcloud.com/artist/track -> https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/artist/track
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%238b5cf6&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

  return (
    <div className="glass overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-accent-primary/50" id={`sc-player-wrapper-${title?.toLowerCase().replace(/\s+/g, '-')}`}>
      {title && (
        <div className="px-4 py-3 border-b border-white/10" id="sc-player-header">
          <h3 className="text-sm font-medium text-white/80 truncate" id="sc-player-title">{title}</h3>
        </div>
      )}
      <div className="relative aspect-video sm:aspect-square md:aspect-video lg:aspect-square xl:aspect-video" id="sc-player-iframe-container">
        <iframe
          id={`sc-iframe-${title?.toLowerCase().replace(/\s+/g, '-')}`}
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={embedUrl}
          className="absolute inset-0"
        ></iframe>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;
