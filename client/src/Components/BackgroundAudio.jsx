import { useState, useRef } from 'react';
import audio from './audio.mp3';

const BackgroundAudio = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5); // Default volume 50%
  const audioRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const adjustVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    
    <div className="absolute top-4 right-4 flex items-center gap-2 bg-white p-2 rounded-lg shadow-lg">
      <button
        onClick={toggleMute}
        className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg text-sm"
      >
        {isMuted ? "Unmute" : "Mute"}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={adjustVolume}
        className="w-24"
      />
      <audio
        ref={audioRef}
        src={audio} // Ensure this path points to your audio file
        autoPlay
        loop
        onError={(e) => console.error("Audio failed to load:", e)}
      />
    </div>
  );
};

export default BackgroundAudio;
