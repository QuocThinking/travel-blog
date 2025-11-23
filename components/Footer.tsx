import React from 'react';
import { getNavItems, CONTACT_INFO } from '../constants';
import { Plane, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const navItems = getNavItems(language);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Allow mailto and tel links to work normally
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }

    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, '#')}
              className="flex items-center gap-2 text-2xl font-serif font-bold text-white mb-6"
            >
              <Plane className="text-brand-primary w-6 h-6" />
              Voyage
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t('footer_desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">{t('footer_quick_links')}</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-slate-400 hover:text-brand-primary transition-colors text-sm block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6">{t('footer_support')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-400 hover:text-brand-primary transition-colors text-sm block">
                  {t('footer_faq')}
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-400 hover:text-brand-primary transition-colors text-sm block">
                  {t('footer_privacy')}
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-400 hover:text-brand-primary transition-colors text-sm block">
                  {t('footer_terms')}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} onClick={(e) => handleNavClick(e, `tel:${CONTACT_INFO.phone}`)} className="text-slate-400 hover:text-brand-primary transition-colors text-sm block">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} onClick={(e) => handleNavClick(e, `mailto:${CONTACT_INFO.email}`)} className="text-slate-400 hover:text-brand-primary transition-colors text-sm block">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">{t('footer_newsletter')}</h4>
            <p className="text-slate-400 text-sm mb-4">{t('footer_newsletter_desc')}</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder={t('footer_email_placeholder')} 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:border-brand-primary w-full text-sm placeholder-slate-500"
              />
              <button className="bg-brand-primary hover:bg-amber-600 text-white px-4 py-2 rounded-r-lg font-bold text-sm transition-colors">
                {t('footer_send')}
              </button>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Voyage Adventures. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Designed with ❤️ for travelers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
