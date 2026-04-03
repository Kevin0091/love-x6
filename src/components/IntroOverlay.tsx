import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useEffect } from 'react';

export function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onClick={onComplete}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="mb-6"
      >
        <Heart size={64} className="text-pink-500" fill="currentColor" />
      </motion.div>
      <motion.p
        dir="rtl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-white text-xl font-medium tracking-wide"
      >
        أهلاً نور... أقوم بتجهيز هديتك ❤️
      </motion.p>
    </motion.div>
  );
}
