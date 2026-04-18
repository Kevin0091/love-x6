import { motion } from 'motion/react';
import { TypewriterText } from './TypewriterText';
import { useState } from 'react';

interface StoryPageProps {
  image: string;
  text: string;
  onNext: () => void;
}

export function StoryPage({ image, text, onNext }: StoryPageProps) {
  const [showButton, setShowButton] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col items-center justify-center h-full w-full max-w-md mx-auto p-6 z-10 relative"
    >
      <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-white/10">
        <img src={image} alt="Story" className="w-full h-full object-cover" />
      </div>

      <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl w-full min-h-[120px] shadow-xl border border-pink-500/20 flex items-center justify-center text-center mb-8">
        <p dir="rtl" className="text-white text-lg font-medium leading-relaxed">
          <TypewriterText text={text} onComplete={() => setShowButton(true)} speed={60} />
        </p>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showButton ? 1 : 0 }}
        disabled={!showButton}
        onClick={onNext}
        className="px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-500 text-white font-bold rounded-full shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all disabled:pointer-events-none"
      >
        التالي ✨
      </motion.button>
    </motion.div>
  );
}
