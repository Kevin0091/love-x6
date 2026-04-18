import { motion } from 'motion/react';

export function MessagePage({ onNext }: { onNext: () => void }) {
  const message = `صديقتي الرائعة آية،

أردت فقط أن آخذ لحظة لأشكركِ على كل شيء. في زحمة الحياة، من النادر أن نجد أشخاصاً طيبين وحقيقيين مثلكِ.

صنعت هذه الصفحة البسيطة كهدية صغيرة لأقول لكِ شكراً على طاقتكِ الإيجابية، وعلى دعمكِ الدائم للصداقة، وعلى كونكِ دائماً تستمعين وتشاركين اللحظات الحلوة. أنتِ من الأشخاص الذين يجعلون الأيام العادية تبدو أفضل بكثير.

أتمنى أن تبقي دائماً بهذه الروح الجميلة والمرحة. شكراً لكونكِ صديقة رائعة يُعتمد عليها.

أتمنى لكِ يوماً سعيداً ومليئاً بكل تفاصيل الفرح التي تستحقينها.

أفضل الأمنيات لكِ دائماً! ✨`;

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
        مفاجأة أخيرة... 🎵
      </button>
    </motion.div>
  );
}
