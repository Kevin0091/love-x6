import { motion } from 'motion/react';

export function MessagePage({ onNext }: { onNext: () => void }) {
  const message = `My dearest,

From the moment you walked into my life, everything changed. The colors seem brighter, the days feel warmer, and my heart beats a little faster just thinking about you.

I wanted to make something special for you, a little digital gift to remind you of how much you mean to me. You are my sunshine on a cloudy day, my safe haven, and my greatest adventure.

Thank you for being you. Thank you for your endless love, your beautiful smile, and the way you make me feel like the luckiest person in the world.

I love you more than words can say, and I can't wait to create countless more memories with you.

Forever yours. ❤️`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="flex flex-col items-center justify-center h-full w-full max-w-md mx-auto p-6 z-10 relative"
    >
      <div className="bg-black/50 backdrop-blur-md p-8 rounded-3xl w-full shadow-2xl border border-pink-500/30 max-h-[60vh] overflow-y-auto custom-scrollbar mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-pink-50 text-lg leading-relaxed whitespace-pre-wrap font-serif"
        >
          {message}
        </motion.p>
      </div>

      <button
        onClick={onNext}
        className="px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-500 text-white font-bold rounded-full shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all"
      >
        One more thing... 🎵
      </button>
    </motion.div>
  );
}
