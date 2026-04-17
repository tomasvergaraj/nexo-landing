import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Benefits from './components/Benefits';
import Process from './components/Process';
import TechStack from './components/TechStack';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Benefits />
        <Process />
        <TechStack />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
