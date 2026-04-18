/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { IntroOverlay } from './components/IntroOverlay';
import { FloatingHearts } from './components/FloatingHearts';
import { StoryPage } from './components/StoryPage';
import { HeartPage } from './components/HeartPage';
import { MessagePage } from './components/MessagePage';
import { MusicPlayerPage } from './components/MusicPlayerPage';

const storyPages = [
  { image: 'https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif', text: 'مرحباً آية! أردت فقط أن أصنع لكِ شيئاً بسيطاً...' },
  { image: 'https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif', text: 'لأعبر لكِ عن شكري على وجودك الرائع كصديقة.' },
  { image: 'https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif', text: 'وعلى كل الأوقات الممتعة والضحكات التي شاركناها معاً.' },
  { image: 'https://media.giphy.com/media/11c7UUfNvzCRsA/giphy.gif', text: 'أنتِ شخص مميز جداً، وروحكِ دائماً تنشر الإيجابية.' },
  { image: 'https://media.giphy.com/media/Lq0h93752f6J9tijrh/giphy.gif', text: 'لذا، أردت أن أشارككِ شيئاً لطيفاً اليوم...' },
];

export default function App() {
  const [page, setPage] = useState(-1); // -1 is intro, 0-4 is story, 5 is heart, 6 is message, 7 is music

  const next = () => setPage((p) => p + 1);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden font-sans">
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {page === -1 && <IntroOverlay key="intro" onComplete={next} />}

        {page >= 0 && page < 5 && (
          <StoryPage
            key={`story-${page}`}
            image={storyPages[page].image}
            text={storyPages[page].text}
            onNext={next}
          />
        )}

        {page === 5 && <HeartPage key="heart" onNext={next} />}

        {page === 6 && <MessagePage key="message" onNext={next} />}

        {page === 7 && <MusicPlayerPage key="music" />}
      </AnimatePresence>
    </div>
  );
}

