import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Step5Summary({ dateInfo, food }) {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);

  // Format date nicely based on current language
  const dateObj = new Date(dateInfo.date);
  const formattedDate = dateObj.toLocaleDateString(i18n.language === 'en' ? 'en-US' : i18n.language, {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  // time could be "5:00 PM — we eating..." we just extract the first part
  const displayTime = dateInfo.time.split('—')[0].trim();

  const summaryText = `${t('step5.title')}\n${t('step5.labelWhen')}: ${formattedDate} ${t('step5.labelAt')} ${displayTime}\n${t('step5.labelFood')}: ${food}\n\n${t('step5.summaryPS')}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(summaryText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur p-6 md:p-8 rounded-3xl shadow-xl w-full max-w-sm mx-auto flex flex-col gap-4 md:gap-6 text-left relative overflow-hidden">
      {/* Decorative polaroid look */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-cream rotate-12 shadow-sm rounded border border-brand-rose/10 flex items-center justify-center">
        ❤️
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-center text-brand-rose">{t('step5.title')}</h1>
      
      <p className="text-center font-medium text-brand-dark mt-2">
        {displayTime}, {t('step5.summarySubtitle')}
      </p>

      <p className="text-center text-sm text-brand-dark/60 italic mb-4">
        {t('step5.summaryPS')}
      </p>

      <div className="flex flex-col gap-4 bg-brand-cream/30 p-4 rounded-2xl border border-brand-rose/10">
        <div className="flex items-start gap-4">
          <div className="text-2xl mt-1">📅</div>
          <div>
            <div className="text-xs font-bold text-brand-dark/50 tracking-wider">{t('step5.labelWhen')}</div>
            <div className="font-semibold text-brand-rose">{formattedDate}</div>
            <div className="text-sm font-medium">{t('step5.labelAt')} {displayTime}</div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-2xl mt-1">🍽️</div>
          <div>
            <div className="text-xs font-bold text-brand-dark/50 tracking-wider">{t('step5.labelFood')}</div>
            <div className="font-semibold text-brand-dark">{food}</div>
          </div>
        </div>
      </div>

      <button
        onClick={handleCopy}
        className="mt-2 md:mt-4 bg-brand-rose hover:bg-brand-dark text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 text-sm md:text-base"
      >
        {copied ? t('step5.btnCopied') : t('step5.btnCopy')}
      </button>
    </div>
  );
}
