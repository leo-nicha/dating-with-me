import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useTranslation } from 'react-i18next';

export default function Step2Celebrate({ onNext }) {
  const { t } = useTranslation();

  useEffect(() => {
    // Fire confetti when component mounts
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-6xl mb-2">🎉</div>
      <h1 className="text-3xl md:text-5xl font-bold">{t('step2.title')}</h1>
      <p className="text-lg text-brand-dark/70 font-medium">
        {t('step2.subtitle')}
      </p>
      
      <button
        onClick={onNext}
        className="mt-8 bg-brand-pink hover:bg-brand-rose text-white font-bold py-3 px-8 rounded-full shadow-md transition-all hover:scale-105"
      >
        {t('step2.btnNext')}
      </button>
    </div>
  );
}
