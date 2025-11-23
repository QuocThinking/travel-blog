import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedTours from './components/FeaturedTours';
import Destinations from './components/Destinations';
import AIPlanner from './components/AIPlanner';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-brand-dark min-h-screen font-sans">
        <Navbar />
        <main>
          <Hero />
          <FeaturedTours />
          <Destinations />
          <AIPlanner />
          <Testimonials />
          <AboutUs />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
