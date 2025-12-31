import { useEffect, useState } from 'react';
import Header from './components/Header';
import Aurora from './components/Aurora';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Connect from './components/Connect';

function App() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate opacity: starts at 0, increases as you scroll down
      // Fully opaque (0.95) after scrolling 100vh
      const opacity = Math.min(scrollY / windowHeight, 0.95);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-slate-200 font-sans selection:bg-primary/30 scroll-smooth">
      <div className="fixed inset-0 -z-10 bg-slate-900">
        <Aurora
          colorStops={['#66d9ff', '#3b75a1', '#0a1143']}
          speed={0.5}
        />
      </div>
      <Header />

      {/* Scroll Overlay for legibility */}
      <div
        className="fixed inset-0 bg-slate-900 pointer-events-none z-[-5] transition-opacity duration-100"
        style={{ opacity: scrollOpacity }}
      />

      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="connect">
          <Connect />
        </div>
      </main>
    </div>
  );
}

export default App;
