import React, { useState } from 'react';
import { SectionId } from '../types';
import { CONTACT_INFO, getFeaturedTours } from '../constants';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const { language, t } = useLanguage();
  const tours = getFeaturedTours(language);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    message: ''
  });

  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    try {
      const response = await fetch("https://formspree.io/f/mldvkewr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', phone: '', tour: '', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id={SectionId.CONTACT} className="py-20 bg-brand-surface scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2">{t('contact_subtitle')}</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">{t('contact_title')}</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-brand-dark rounded-3xl overflow-hidden shadow-2xl">
          {/* Contact Info */}
          <div className="lg:w-2/5 bg-brand-primary p-12 text-white flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-serif font-bold mb-6">{t('contact_info_title')}</h4>
              <p className="mb-10 text-white/90">
                {t('contact_info_desc')}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>{CONTACT_INFO.email}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>{CONTACT_INFO.address}</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="w-32 h-32 bg-white/10 rounded-full absolute -bottom-16 -left-16 blur-2xl"></div>
              <div className="w-40 h-40 bg-white/10 rounded-full absolute top-10 right-10 blur-3xl"></div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-3/5 p-12 relative min-h-[500px] flex flex-col justify-center">
            
            {status === 'SUCCESS' ? (
              <div className="text-center animate-fade-in-up py-10">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{t('form_success_title')}</h4>
                <p className="text-slate-300 mb-8 max-w-md mx-auto">
                  {t('form_success_desc')}
                </p>
                <button 
                  onClick={() => setStatus('IDLE')}
                  className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                >
                  Gửi yêu cầu khác / Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">{t('form_name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">{t('form_phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      placeholder="090 123 4567"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">{t('form_email')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="tour" className="block text-sm font-medium text-slate-400 mb-2">{t('form_tour')}</label>
                    <select
                      id="tour"
                      name="tour"
                      value={formData.tour}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">{t('form_select_tour_placeholder')}</option>
                      {tours.map(tour => (
                        <option key={tour.id} value={tour.title}>{tour.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">{t('form_message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="..."
                  ></textarea>
                </div>

                {status === 'ERROR' && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">{t('form_error')}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'SUBMITTING'}
                  className="w-full bg-brand-primary hover:bg-amber-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'SUBMITTING' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t('form_btn_submitting')}
                    </>
                  ) : (
                    <>
                      {t('form_btn')} <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;