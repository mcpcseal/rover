import { motion } from 'framer-motion';
import { Share2, Link, User } from 'lucide-react';

const TeamSection: React.FC = () => {
  const team = [
    {
      name: "VORTEX",
      role: "Rapper / Lyricist",
      bio: "The voice of the streets. Raw bars, unmatched flow.",
      social: { instagram: "#", twitter: "#" }
    },
    {
      name: "ECHO",
      role: "Main Producer",
      bio: "Crafting the hardest beats in the underground scene.",
      social: { linkedin: "#", instagram: "#" }
    },
    {
      name: "PULSE",
      role: "DJ / Visuals",
      bio: "Setting the vibe, on and off the stage.",
      social: { twitter: "#", linkedin: "#" }
    }
  ];

  return (
    <section id="team-section" className="section-padding">
      <div className="container mx-auto px-6" id="team-container">
        <div className="relative mb-20 overflow-hidden rounded-3xl aspect-[21/9]" id="team-banner">
          <img 
            src="/vibe.png" 
            alt="The Gang" 
            className="w-full h-full object-cover"
            id="team-banner-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" id="team-banner-overlay"></div>
          <div className="absolute bottom-10 left-10" id="team-banner-content">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2" id="team-banner-title">
              THE <span className="gradient-text">GANG</span>
            </h2>
            <p className="text-text-secondary font-medium tracking-widest uppercase" id="team-banner-subtitle">Pure Hustle, No Compromise</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              id={`team-member-${member.name.toLowerCase()}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-8 group hover:bg-white/5 transition-all duration-500"
            >
              <div className="w-16 h-1 bg-black mb-6" id={`team-member-divider-${index}`}></div>
              <h3 className="text-2xl font-bold mb-2 uppercase" id={`team-member-name-${index}`}>{member.name}</h3>
              <p className="text-black text-sm font-bold uppercase tracking-widest mb-4" id={`team-member-role-${index}`}>{member.role}</p>
              <p className="text-text-secondary mb-8 leading-relaxed" id={`team-member-bio-${index}`}>
                {member.bio}
              </p>
              <div className="flex gap-4" id={`team-member-socials-${index}`}>
                {member.social.instagram && (
                  <a href={member.social.instagram} id={`social-instagram-${index}`} className="text-text-secondary hover:text-white transition-colors">
                    <Share2 className="w-5 h-5" id={`icon-share-${index}`} />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} id={`social-twitter-${index}`} className="text-text-secondary hover:text-white transition-colors">
                    <Link className="w-5 h-5" id={`icon-link-${index}`} />
                  </a>
                )}
                {member.social.linkedin && (
                  <a href={member.social.linkedin} id={`social-linkedin-${index}`} className="text-text-secondary hover:text-white transition-colors">
                    <User className="w-5 h-5" id={`icon-user-${index}`} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
