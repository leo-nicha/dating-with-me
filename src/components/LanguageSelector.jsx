import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'th', label: 'ไทย', country: 'th' },
  { code: 'en', label: 'English', country: 'us' },
  { code: 'zh', label: '中文', country: 'cn' },
  { code: 'ja', label: '日本語', country: 'jp' },
  { code: 'ko', label: '한국어', country: 'kr' }
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="absolute top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-white/80 backdrop-blur hover:bg-white text-brand-dark px-3 py-2 rounded-lg shadow-sm border border-brand-rose/20 transition-all font-medium text-sm"
        >
          <img 
            src={`https://flagcdn.com/w20/${currentLanguage.country}.png`}
            srcSet={`https://flagcdn.com/w40/${currentLanguage.country}.png 2x`}
            width="20" 
            alt={currentLanguage.label} 
            className="rounded-sm shadow-sm"
          />
          <span className="uppercase">{currentLanguage.code}</span>
          <span className="text-xs text-brand-dark/50">▼</span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-brand-rose/10 overflow-hidden"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-brand-cream transition-colors ${
                    i18n.language === lang.code ? 'bg-brand-rose/10 text-brand-rose font-semibold' : 'text-brand-dark'
                  }`}
                >
                  <img 
                    src={`https://flagcdn.com/w20/${lang.country}.png`}
                    srcSet={`https://flagcdn.com/w40/${lang.country}.png 2x`}
                    width="20" 
                    alt={lang.label}
                    className="rounded-sm shadow-sm"
                  />
                  <span className="text-sm">{lang.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
