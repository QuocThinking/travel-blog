import React, { useState, useEffect } from 'react';
import { Menu, X, Plane, Globe } from 'lucide-react';
import { getNavItems } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  
  const navItems = getNavItems(language);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'vn' ? 'en' : 'vn');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 text-2xl font-serif font-bold text-white"
        >
          <Plane className="text-brand-primary w-8 h-8" />
          Voyage<span className="text-brand-primary">Adventures</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-slate-300 hover:text-brand-primary transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1 rounded-full border border-slate-600 hover:border-brand-primary text-slate-300 hover:text-brand-primary transition-all text-sm font-bold"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'vn' ? 'VN' : 'EN'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 rounded border border-slate-600 text-slate-300 text-xs font-bold"
          >
            {language === 'vn' ? 'VN' : 'EN'}
          </button>
          
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-surface shadow-xl border-t border-slate-700">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-6 py-3 text-slate-200 hover:bg-slate-700 hover:text-brand-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
