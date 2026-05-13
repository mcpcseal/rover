import { Music, Mail, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="section-padding bg-bg-tertiary">
      <div className="container mx-auto px-6" id="footer-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20" id="footer-grid">
          <div className="col-span-1 md:col-span-2" id="footer-brand-section">
            <div className="flex items-center gap-2 mb-8" id="footer-logo-group">
              <div className="p-2 bg-accent-primary rounded-lg" id="footer-logo-icon">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tighter outfit uppercase" id="footer-brand-name">GRAVITY <span className="gradient-text">GANG</span></span>
            </div>
            <p className="text-text-secondary text-lg max-w-md leading-relaxed mb-8" id="footer-description">
              The underground collective redefining the sounds of the street. Pure hustle, no labels.
            </p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
            </div>
          </div>

          <div id="footer-nav-section">
            <h4 className="text-white font-bold uppercase tracking-widest mb-8" id="footer-nav-title">Navigation</h4>
            <ul className="flex flex-col gap-4" id="footer-nav-list">
              <li><a href="#" id="footer-link-home" className="text-text-secondary hover:text-white transition-colors">Home</a></li>
              <li><a href="#music" id="footer-link-music" className="text-text-secondary hover:text-white transition-colors">Music</a></li>
              <li><a href="#team" id="footer-link-team" className="text-text-secondary hover:text-white transition-colors">Team</a></li>
              <li><a href="#contact" id="footer-link-contact" className="text-text-secondary hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div id="footer-connect-section">
            <h4 className="text-white font-bold uppercase tracking-widest mb-8" id="footer-connect-title">Connect</h4>
            <ul className="flex flex-col gap-6" id="footer-connect-list">
              <li className="flex items-center gap-3 text-text-secondary" id="footer-contact-email">
                <Mail className="w-5 h-5 text-accent-primary" />
                <span>hello@antigravity.studio</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary" id="footer-contact-location">
                <MapPin className="w-5 h-5 text-accent-primary" />
                <span>Seoul, South Korea</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary" id="footer-contact-web">
                <Globe className="w-5 h-5 text-accent-primary" />
                <span>www.antigravity.studio</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4" id="footer-bottom">
          <p className="text-text-secondary text-sm" id="footer-copyright">
            © 2026 GRAVITY GANG. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-sm text-text-secondary" id="footer-legal-links">
            <a href="#" id="footer-link-privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" id="footer-link-terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
