import React from 'react';
import { SectionId } from '../types';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.HERO} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/16/1920/1080" 
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center mt-16">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in-up leading-tight">
          {t('hero_title_1')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">
            {t('hero_title_2')}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light">
          {t('hero_subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`#${SectionId.FEATURED}`}
            onClick={(e) => scrollToSection(e, SectionId.FEATURED)}
            className="px-8 py-4 bg-brand-primary hover:bg-amber-600 text-white font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30"
          >
            {t('hero_cta_book')} <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={`#${SectionId.AI_PLANNER}`}
            onClick={(e) => scrollToSection(e, SectionId.AI_PLANNER)}
            className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-full transition-all flex items-center justify-center"
          >
            {t('hero_cta_ai')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
