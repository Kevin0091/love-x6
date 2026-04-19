import { motion } from 'motion/react';

export function MessagePage({ onNext }: { onNext: () => void }) {
  const message = `Happy Birthday, sweet Aiya!

I wanted to take a moment to wish you the absolute best on your special day. In the busyness of everyday life, it's so rare to find a friend as genuine, fun, and kind as you.

I made this little page as a birthday gift to say thank you for your incredible positive energy, your constant support, and always being there to share the good moments. You're the kind of person who makes ordinary days feel so much brighter.

I hope you never lose that beautiful, fun spirit of yours. Here's to a day filled with all the joy, laughter, and cake you deserve.

Have the best birthday ever! ✨`;

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
        One last surprise... 🎵
      </button>
    </motion.div>
  );
}
