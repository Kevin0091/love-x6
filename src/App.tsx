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
  { image: 'https://picsum.photos/seed/meet/600/600', text: 'It all started with a simple hello...' },
  { image: 'https://picsum.photos/seed/smile/600/600', text: 'Then came the smiles that brightened my days.' },
  { image: 'https://picsum.photos/seed/laugh/600/600', text: 'And the laughter we shared together.' },
  { image: 'https://picsum.photos/seed/hold/600/600', text: 'Every moment with you feels like magic.' },
  { image: 'https://picsum.photos/seed/love/600/600', text: 'I just wanted to tell you something important...' },
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

