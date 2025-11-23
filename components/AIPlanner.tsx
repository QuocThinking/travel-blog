import React, { useState } from 'react';
import { SectionId } from '../types';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getTravelAdvice } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';

const AIPlanner: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse('');
    
    try {
      const result = await getTravelAdvice(query);
      setResponse(result);
    } catch {
      setResponse(t('ai_error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id={SectionId.AI_PLANNER} className="py-24 bg-gradient-to-br from-indigo-900 to-brand-dark scroll-mt-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-brand-surface/50 backdrop-blur-lg border border-slate-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-brand-primary/20 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-brand-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              {t('ai_title')}
            </h2>
            <p className="text-slate-300 text-lg">
              {t('ai_desc')}
            </p>
          </div>

          <div className="space-y-6">
            <form onSubmit={handleAskAI} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('ai_placeholder')}
                className="w-full bg-slate-900/80 border border-slate-600 rounded-2xl py-5 px-6 pl-6 pr-16 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all shadow-inner"
              />
              <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-brand-primary hover:bg-amber-600 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </form>

            {response && (
              <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 animate-fade-in-up">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Sparkles className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary mb-2">{t('ai_suggestion_title')}</h4>
                    <p className="text-slate-200 leading-relaxed whitespace-pre-wrap">
                      {response}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {!response && !isLoading && (
              <div className="flex flex-wrap justify-center gap-2">
                <button onClick={() => setQuery(t('ai_btn_honeymoon'))} className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-full text-sm text-slate-300 transition-colors">
                  {t('ai_btn_honeymoon')}
                </button>
                <button onClick={() => setQuery(t('ai_btn_fall'))} className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-full text-sm text-slate-300 transition-colors">
                  {t('ai_btn_fall')}
                </button>
                <button onClick={() => setQuery(t('ai_btn_family'))} className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-full text-sm text-slate-300 transition-colors">
                  {t('ai_btn_family')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPlanner;
