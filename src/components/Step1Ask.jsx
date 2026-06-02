import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Step1Ask({ onNext }) {
  const { t } = useTranslation();
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleNoHover = () => {
    // Escape logic
    const x = Math.random() * 200 - 100; // Random x between -100 and 100
    const y = Math.random() * 200 - 100; // Random y between -100 and 100
    setNoPosition({ x, y });
  };

  return (
    <div className="flex flex-col items-center gap-8" ref={containerRef}>
      <div className="text-6xl mb-4 animate-bounce">💌</div>
      <h1 className="text-4xl md:text-5xl font-bold">
        {t('step1.title')}
      </h1>
      
      <div className="flex items-center justify-center gap-4 mt-8 relative w-full h-32">
        <button
          onClick={onNext}
          className="bg-brand-rose hover:bg-brand-pink text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 text-xl"
        >
          {t('step1.btnYes')}
        </button>

        <motion.button
          animate={{ x: noPosition.x, y: noPosition.y }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          onMouseEnter={handleNoHover}
          onClick={handleNoHover}
          className="bg-brand-cream border-2 border-brand-rose text-brand-rose hover:bg-brand-rose/10 font-bold py-3 px-8 rounded-full shadow transition-colors text-xl absolute"
          style={{ right: '10%' }}
        >
          {t('step1.btnNo')}
        </motion.button>
      </div>
    </div>
  );
}
