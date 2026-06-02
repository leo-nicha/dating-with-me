import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Step1Ask from './components/Step1Ask';
import Step2Celebrate from './components/Step2Celebrate';
import Step3DateTime from './components/Step3DateTime';
import Step4Food from './components/Step4Food';
import Step5Summary from './components/Step5Summary';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [step, setStep] = useState(1);
  const [dateInfo, setDateInfo] = useState({ date: '', time: '' });
  const [food, setFood] = useState('');

  const nextStep = () => setStep(s => s + 1);

  // Transition variants for smooth page changes
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
      <LanguageSelector />
      {/* Subtle background decoration */}
      <div className="absolute top-10 left-10 text-brand-pink/30 text-4xl">❤️</div>
      <div className="absolute top-20 right-20 text-brand-pink/30 text-2xl">✨</div>
      <div className="absolute bottom-20 left-1/4 text-brand-pink/20 text-3xl">💕</div>

      <div className="w-full max-w-md relative z-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" variants={variants} initial="initial" animate="animate" exit="exit" className="text-center">
              <Step1Ask onNext={nextStep} />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="step2" variants={variants} initial="initial" animate="animate" exit="exit" className="text-center">
              <Step2Celebrate onNext={nextStep} />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div key="step3" variants={variants} initial="initial" animate="animate" exit="exit">
              <Step3DateTime onNext={nextStep} dateInfo={dateInfo} setDateInfo={setDateInfo} />
            </motion.div>
          )}
          {step === 4 && (
            <motion.div key="step4" variants={variants} initial="initial" animate="animate" exit="exit">
              <Step4Food onNext={nextStep} food={food} setFood={setFood} />
            </motion.div>
          )}
          {step === 5 && (
            <motion.div key="step5" variants={variants} initial="initial" animate="animate" exit="exit">
              <Step5Summary dateInfo={dateInfo} food={food} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
