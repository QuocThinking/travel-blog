import React, { useState } from 'react';
import { SectionId } from '../types';
import { getTestimonials } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { language, t } = useLanguage();
  const testimonials = getTestimonials(language);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id={SectionId.TESTIMONIALS} className="py-20 bg-brand-dark scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2">{t('testimonials_subtitle')}</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">{t('testimonials_title')}</h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Slider Controls */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-2 rounded-full bg-brand-surface border border-slate-700 text-slate-300 hover:text-white hover:border-brand-primary transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-2 rounded-full bg-brand-surface border border-slate-700 text-slate-300 hover:text-white hover:border-brand-primary transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-brand-surface/50 border border-slate-700/50 rounded-2xl p-8 md:p-12 text-center relative">
                    <Quote className="w-10 h-10 text-brand-primary/20 absolute top-8 left-8" />
                    
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-primary p-1">
                        <img src={item.avatar} alt={item.name} className="w-full h-full rounded-full object-cover" />
                      </div>
                    </div>

                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < item.rating ? 'text-brand-primary fill-brand-primary' : 'text-slate-600'}`} 
                        />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-slate-300 italic mb-8 leading-relaxed">
                      "{item.content}"
                    </p>

                    <div>
                      <h4 className="text-white font-bold text-lg">{item.name}</h4>
                      <p className="text-brand-primary text-sm">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-brand-primary' : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
