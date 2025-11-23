import React from 'react';
import { SectionId } from '../types';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutUs: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(SectionId.CONTACT);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    'Lịch trình linh hoạt',
    'Chi phí minh bạch',
    'Hỗ trợ 24/7',
    'Đối tác cao cấp'
  ];

  return (
    <section id={SectionId.ABOUT} className="py-20 bg-brand-dark scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-primary rounded-2xl z-0 translate-x-4 translate-y-4 hidden md:block"></div>
            <img
              src="https://picsum.photos/id/1011/800/1000"
              alt="About Voyage Adventures"
              className="relative z-10 rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
            {/* Experience Badge */}
            <div className="absolute bottom-10 -right-4 md:-right-10 z-20 bg-brand-surface p-6 rounded-xl border border-slate-700 shadow-xl max-w-[200px] hidden sm:block">
              <p className="text-4xl font-bold text-brand-primary mb-1">10+</p>
              <p className="text-slate-300 text-sm leading-tight">Năm kinh nghiệm tổ chức tour cao cấp</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2">{t('about_subtitle')}</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              {t('about_title')}
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              {t('about_desc_1')}
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              {t('about_desc_2')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-brand-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href={`#${SectionId.CONTACT}`}
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary hover:bg-amber-600 text-white font-bold rounded-full transition-all shadow-lg shadow-amber-500/20"
            >
              {t('about_cta')} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
