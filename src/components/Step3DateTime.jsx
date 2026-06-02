import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Step3DateTime({ onNext, dateInfo, setDateInfo }) {
  const { t } = useTranslation();
  const canProceed = dateInfo.date && dateInfo.time;

  return (
    <div className="bg-white/80 backdrop-blur p-6 md:p-8 rounded-3xl shadow-xl w-full max-w-sm mx-auto flex flex-col gap-5 md:gap-6 text-left">
      <div className="text-center text-3xl md:text-4xl mb-2">🗓️🐾</div>
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 md:mb-4">{t('step3.title')}</h1>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-brand-dark/80 ml-2">{t('step3.pickDay')}</label>
        <div className="relative w-full">
          <input 
            type="date" 
            className="w-full block box-border bg-brand-cream/50 border border-brand-rose/30 rounded-2xl py-3 px-4 md:py-4 md:px-5 outline-none focus:ring-2 focus:ring-brand-rose/50 transition-all font-medium text-brand-dark text-base min-h-[3rem] md:min-h-[3.5rem]"
            value={dateInfo.date}
            onChange={(e) => setDateInfo({...dateInfo, date: e.target.value})}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-brand-dark/80 ml-2">{t('step3.whatTime')}</label>
        <div className="relative w-full">
          <select 
            className="w-full block box-border bg-brand-cream/50 border border-brand-rose/30 rounded-2xl py-3 px-4 md:py-4 md:px-5 outline-none focus:ring-2 focus:ring-brand-rose/50 transition-all font-medium text-brand-dark appearance-none text-base min-h-[3rem] md:min-h-[3.5rem]"
            value={dateInfo.time}
            onChange={(e) => setDateInfo({...dateInfo, time: e.target.value})}
          >
            <option value="" disabled>{t('step3.selectTime')}</option>
            <option value="5:00 PM">{t('step3.time5')}</option>
            <option value="6:00 PM">{t('step3.time6')}</option>
            <option value="7:00 PM">{t('step3.time7')}</option>
            <option value="8:00 PM">{t('step3.time8')}</option>
            <option value="9:00 PM">{t('step3.time9')}</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-rose">
            <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!canProceed}
        className={`mt-4 py-4 px-8 rounded-full font-bold shadow-md transition-all ${
          canProceed 
            ? 'bg-brand-pink hover:bg-brand-rose text-white hover:scale-105' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {t('step3.btnContinue')}
      </button>
    </div>
  );
}
