import React, { useState, useMemo } from 'react';
import { Play } from 'lucide-react';
import { VideoItem } from '../types';
import VideoModal from './VideoModal';

interface VideoMarqueeProps {
  videos: VideoItem[];
  direction?: 'left' | 'right';
  title: string;
}

const VideoMarquee: React.FC<VideoMarqueeProps> = ({ videos, direction = 'left', title }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // --- SEAMLESS LOOP LOGIC ---
  const trackVideos = useMemo(() => {
    if (videos.length === 0) return [];
    const baseWidth = videos[0].type === 'short' ? 224 : 424;
    const minWidth = 5000;
    const repetitions = Math.max(2, Math.ceil(minWidth / (videos.length * baseWidth)));
    return Array(repetitions).fill(videos).flat();
  }, [videos]);

  const duration = useMemo(() => {
    const pixelsPerSecond = 40;
    const itemWidth = videos[0].type === 'short' ? 224 : 424;
    return (trackVideos.length * itemWidth) / pixelsPerSecond;
  }, [trackVideos, videos]);

  const animationClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';

  const renderTrack = (id: string) => (
    <div 
      className={`flex shrink-0 gap-6 pr-6 ${animationClass} group-hover:[animation-play-state:paused] items-center`}
      style={{ animationDuration: `${duration}s` }}
    >
      {trackVideos.map((video, idx) => (
        <div 
          key={`${id}-${video.id}-${idx}`}
          className={`relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/5 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-orange-500/50 ${
            video.type === 'short' ? 'w-[220px] h-[380px]' : 'w-[320px] h-[180px] md:w-[420px] md:h-[236px]'
          }`}
          onClick={() => setSelectedVideo(video.youtubeId)}
        >
          <img 
            src={video.thumbnail} 
            alt={video.title} 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
             <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
                <Play fill="white" size={24} className="ml-1" />
             </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
             <p className="text-[10px] font-bold text-white/90 tracking-[0.2em] truncate uppercase">{video.title}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <div className="flex items-center gap-6">
          <div className="w-16 h-[1px] bg-gradient-to-r from-orange-500 to-pink-500 opacity-60"></div>
          <h3 className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.4em] opacity-70">
            {title}
          </h3>
        </div>
      </div>

      <div className="flex w-full overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {renderTrack('t1')}
        {renderTrack('t2')}
      </div>

      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        youtubeId={selectedVideo || ''} 
      />
    </div>
  );
};

export default VideoMarquee;