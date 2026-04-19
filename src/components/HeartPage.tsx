import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function HeartPage({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.5 }}
      className="flex flex-col items-center justify-center h-full w-full z-10 relative cursor-pointer"
      onClick={onNext}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-rose-500 drop-shadow-[0_0_40px_rgba(244,63,94,0.6)]"
      >
        <Heart size={200} fill="currentColor" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-white mt-12 text-xl font-medium animate-pulse tracking-widest"
      >
        Tap the heart ✨
      </motion.p>
    </motion.div>
  );
}
