
import { motion } from 'framer-motion';
import SoundCloudPlayer from './SoundCloudPlayer';

const MusicSection: React.FC = () => {
  const tracks = [
    {
      title: "STREET MANIFESTO - FT. VORTEX",
      url: "https://soundcloud.com/futureclassic/flume-insane-feat-moon-holiday",
    },
    {
      title: "CONCRETE JUNGLE - PROD. ECHO",
      url: "https://soundcloud.com/soulection/soulection-radio-show-500",
    },
    {
      title: "NIGHT HUSTLE",
      url: "https://soundcloud.com/monstercat/haywyre-insight",
    },
    {
      title: "GRAVITY VOID - REMIX",
      url: "https://soundcloud.com/lowlypalace/kyle-exum-gravity",
    }
  ];

  return (
    <section id="music-section" className="section-padding bg-white border-t border-black">
      <div className="container mx-auto px-6" id="music-container">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6" id="music-header">
          <div className="max-w-2xl" id="music-title-group">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase" id="music-title">
              LATEST <span className="gradient-text">JOINTS</span>
            </h2>
            <p className="text-text-secondary text-lg" id="music-subtitle">
              Check out the newest drops from the gang. From underground anthems to experimental beats.
            </p>
          </div>
          <button id="music-view-all" className="text-sm font-bold tracking-widest text-black hover:opacity-70 transition-opacity uppercase border-b border-black pb-1">
            View All Tracks
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" id="music-grid">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              id={`music-item-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <SoundCloudPlayer url={track.url} title={track.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
