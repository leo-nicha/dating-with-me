import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Step4Food({ onNext, food, setFood }) {
  const { t } = useTranslation();

  const foodOptions = [
    { id: 'pizza', label: t('step4.foodPizza'), icon: '🍕' },
    { id: 'sushi', label: t('step4.foodSushi'), icon: '🍣' },
    { id: 'burgers', label: t('step4.foodBurgers'), icon: '🍔' },
    { id: 'pasta', label: t('step4.foodPasta'), icon: '🍝' },
    { id: 'tacos', label: t('step4.foodTacos'), icon: '🌮' },
    { id: 'ramen', label: t('step4.foodRamen'), icon: '🍜' },
  ];

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex gap-2 text-2xl mb-2 text-brand-rose">
        💕 — 💕 — 💕
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-center">{t('step4.title')}</h1>
      <p className="text-sm font-medium text-brand-dark/60 -mt-4 mb-4">
        {t('step4.subtitle')}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {foodOptions.map((opt) => (
          <div key={opt.id} className="relative">
            <input
              type="radio"
              id={opt.id}
              name="food"
              value={opt.id}
              checked={food === opt.label}
              onChange={() => setFood(opt.label)}
              className="hidden food-card-input"
            />
            <label
              htmlFor={opt.id}
              className="food-card-label flex flex-col items-center justify-center p-4 md:p-6 bg-white/60 backdrop-blur rounded-2xl border-2 border-transparent hover:border-brand-pink/30 hover:bg-white h-full"
            >
              <span className="text-4xl md:text-5xl mb-2 md:mb-3 drop-shadow-sm">{opt.icon}</span>
              <span className="font-semibold text-brand-dark text-sm md:text-base">{opt.label}</span>
            </label>
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!food}
        className={`mt-8 py-3 px-10 rounded-full font-bold shadow-md transition-all ${
          food 
            ? 'bg-brand-pink hover:bg-brand-rose text-white hover:scale-105' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {t('step4.btnThisOne')}
      </button>
    </div>
  );
}
