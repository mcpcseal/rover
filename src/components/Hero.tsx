
import { motion } from 'framer-motion';
import { Play, Mic2, Disc } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 bg-white">
      <div className="container mx-auto px-6 relative z-10" id="hero-container">
        <div className="max-w-4xl mx-auto text-center" id="hero-content">
          <motion.div
            id="hero-text-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span id="hero-badge" className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-accent-primary mb-6 uppercase">
              Street Life • Pure Sound
            </span>
            <h1 id="hero-title" className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase">
              WE OWN <br />
              <span className="gradient-text">THE STREETS</span>
            </h1>
            <p id="hero-description" className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
              GRAVITY GANG is a underground hip-hop collective breaking the norms. No labels, no limits. Just raw bars and heavy beats.
            </p>
          </motion.div>

          <motion.div 
            id="hero-actions"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <button id="hero-cta-explore" className="px-8 py-4 bg-black text-white font-bold transition-all duration-300 hover:bg-zinc-800">
              EXPLORE MUSIC
            </button>
            <button id="hero-cta-join" className="px-8 py-4 border border-black text-black font-bold transition-all duration-300 hover:bg-black hover:text-white">
              JOIN THE GANG
            </button>
          </motion.div>

          <motion.div
            id="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 flex justify-center gap-12 text-text-secondary"
          >
            <div className="flex flex-col items-center gap-2" id="hero-stat-recording">
              <Mic2 className="w-6 h-6" id="icon-mic" />
              <span className="text-[10px] uppercase tracking-widest font-bold">Recording</span>
            </div>
            <div className="flex flex-col items-center gap-2" id="hero-stat-mastering">
              <Disc className="w-6 h-6" id="icon-disc" />
              <span className="text-[10px] uppercase tracking-widest font-bold">Mastering</span>
            </div>
            <div className="flex flex-col items-center gap-2" id="hero-stat-production">
              <Play className="w-6 h-6" id="icon-play" />
              <span className="text-[10px] uppercase tracking-widest font-bold">Production</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
