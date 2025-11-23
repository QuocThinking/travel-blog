import React from 'react';
import { getFeaturedTours } from '../constants';
import { SectionId } from '../types';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FeaturedTours: React.FC = () => {
  const { language, t } = useLanguage();
  const tours = getFeaturedTours(language);

  const scrollToDestinations = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(SectionId.DESTINATIONS);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.FEATURED} className="py-20 bg-brand-dark scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2">{t('featured_subtitle')}</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">{t('featured_title')}</h3>
          </div>
          <a 
            href={`#${SectionId.DESTINATIONS}`} 
            onClick={scrollToDestinations}
            className="hidden md:flex items-center gap-2 text-slate-300 hover:text-brand-primary transition-colors mt-4 md:mt-0"
          >
            {t('featured_view_all')} <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="group bg-brand-surface rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-300 border border-slate-700/50">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-brand-primary fill-brand-primary" />
                  <span className="text-white text-xs font-bold">{tour.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{tour.location}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                  {tour.title}
                </h4>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {tour.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <div className="flex items-center gap-1 text-slate-300 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <span className="text-brand-primary font-bold text-lg">{tour.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a 
            href={`#${SectionId.DESTINATIONS}`} 
            onClick={scrollToDestinations}
            className="inline-flex items-center gap-2 text-brand-primary font-medium"
          >
            {t('featured_view_all')} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
