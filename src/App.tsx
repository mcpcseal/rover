import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MusicSection from './components/MusicSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary selection:bg-accent-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MusicSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
