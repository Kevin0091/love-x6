import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { motion } from 'motion/react';

const songs = [
  {
    title: 'Babydoll',
    artist: 'Dominic Fike',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2d/37/18/2d3718e9-8620-b603-d3cc-f34ce817070d/886447290170.jpg/400x400bb.jpg',
    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b9/00/5c/b9005c47-45de-a5cb-e9ac-f8af66d69f33/mzaf_18175355208890397177.plus.aac.p.m4a'
  },
  {
    title: '505',
    artist: 'Arctic Monkeys',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/400x400bb.jpg',
    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/32/bc/c1/32bcc1f1-f812-e765-5b4e-340e5c9ab373/mzaf_7885353230840382876.plus.aac.p.m4a'
  }
];

export function MusicPlayerPage() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const song = songs[currentSongIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentSongIndex]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((current / duration) * 100 || 0);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const percentage = x / bounds.width;
      audioRef.current.currentTime = percentage * audioRef.current.duration;
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="flex flex-col items-center justify-center h-full w-full max-w-md mx-auto p-6 z-10 relative"
    >
      <div className="bg-black/40 backdrop-blur-xl p-8 rounded-[2rem] w-full shadow-2xl border border-pink-500/20">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-8 shadow-2xl">
          <img src={song.cover} alt="Album Cover" className="w-full h-full object-cover" />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">{song.title}</h2>
          <p className="text-pink-200 text-sm">{song.artist}</p>
        </div>

        <div className="mb-8">
          <div
            className="h-2 bg-white/10 rounded-full overflow-hidden cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-rose-500 rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-8">
          <button onClick={prevSong} className="text-white/80 hover:text-pink-300 transition-colors">
            <SkipBack size={32} fill="currentColor" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-20 h-20 flex items-center justify-center bg-gradient-to-tr from-pink-500 to-rose-400 rounded-full text-white shadow-[0_0_30px_rgba(244,63,94,0.4)] hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause size={36} fill="currentColor" /> : <Play size={36} fill="currentColor" className="ml-2" />}
          </button>
          <button onClick={nextSong} className="text-white/80 hover:text-pink-300 transition-colors">
            <SkipForward size={32} fill="currentColor" />
          </button>
        </div>

        <audio
          ref={audioRef}
          src={song.url}
          onTimeUpdate={handleTimeUpdate}
          onEnded={nextSong}
        />
      </div>
    </motion.div>
  );
}
