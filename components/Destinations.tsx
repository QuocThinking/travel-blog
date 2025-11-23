import React, { useState } from 'react';
import { getDestinations } from '../constants';
import { SectionId, Destination } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Destinations: React.FC = () => {
  const { language, t } = useLanguage();
  const allDestinations = getDestinations(language);
  const [filter, setFilter] = useState<'all' | Destination['category']>('all');

  const filteredDestinations = filter === 'all' 
    ? allDestinations 
    : allDestinations.filter(d => d.category === filter);

  const categories = [
    { id: 'all', label: t('dest_filter_all') },
    { id: 'asia', label: t('dest_filter_asia') },
    { id: 'europe', label: t('dest_filter_europe') },
    { id: 'americas', label: t('dest_filter_americas') },
  ];

  return (
    <section id={SectionId.DESTINATIONS} className="py-20 bg-brand-surface/30 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2">{t('dest_subtitle')}</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">{t('dest_title')}</h3>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat.id 
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25' 
                  : 'bg-brand-surface border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <div key={dest.id} className="relative group overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer animate-fade-in-up">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h4 className="text-2xl font-serif font-bold text-white mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {dest.name}
                </h4>
                <p className="text-brand-primary font-medium text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  {dest.count} Tours
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
