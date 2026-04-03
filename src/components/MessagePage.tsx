import { motion } from 'motion/react';

export function MessagePage({ onNext }: { onNext: () => void }) {
  const message = `عزيزتي نور،

منذ اللحظة التي دخلتِ فيها حياتي، تغير كل شيء. أصبحت الألوان أكثر إشراقاً، والأيام أكثر دفئاً، وقلبي ينبض بشكل أسرع بمجرد التفكير فيكِ.

أردت أن أصنع لكِ شيئاً مميزاً، هدية رقمية صغيرة لتذكركِ بمدى أهميتكِ بالنسبة لي. أنتِ شمسي في الأيام الغائمة، وملاذي الآمن، وأجمل مغامراتي.

شكراً لكونكِ أنتِ. شكراً لحبكِ اللامحدود، لابتسامتكِ الجميلة، وللطريقة التي تجعلينني أشعر بها وكأنني أسعد إنسان في العالم.

أحبكِ أكثر مما تستطيع الكلمات وصفه، ولا أطيق الانتظار لصنع ذكريات لا حصر لها معكِ.

لكِ إلى الأبد. ❤️`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="flex flex-col items-center justify-center h-full w-full max-w-md mx-auto p-6 z-10 relative"
    >
      <div className="bg-black/50 backdrop-blur-md p-8 rounded-3xl w-full shadow-2xl border border-pink-500/30 max-h-[60vh] overflow-y-auto custom-scrollbar mb-8">
        <motion.p
          dir="rtl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-pink-50 text-lg leading-relaxed whitespace-pre-wrap font-serif text-right"
        >
          {message}
        </motion.p>
      </div>

      <button
        onClick={onNext}
        className="px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-500 text-white font-bold rounded-full shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all"
      >
        شيء أخير... 🎵
      </button>
    </motion.div>
  );
}
