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
  { image: 'https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif', text: 'كل شيء بدأ بصدفة جميلة يا نور...' },
  { image: 'https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif', text: 'ثم جاءت ابتسامتك التي أضاءت أيامي.' },
  { image: 'https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif', text: 'والضحكات التي شاركناها معاً.' },
  { image: 'https://media.giphy.com/media/11c7UUfNvzCRsA/giphy.gif', text: 'كل لحظة معكِ تبدو وكأنها سحر.' },
  { image: 'https://media.giphy.com/media/Lq0h93752f6J9tijrh/giphy.gif', text: 'أردت فقط أن أخبركِ بشيء مهم جداً...' },
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

