import React, { useState, useRef, useEffect } from 'react';
import './Player.css';

const Player = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.previewUrl;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Playback error:", error);
            setIsPlaying(false);
          });
      }
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player">
      <div className="now-playing">
        {currentSong ? (
          <p>
            Now Playing: {currentSong.trackName} - {currentSong.artistName}
          </p>
        ) : (
          <p>Select a song to play</p>
        )}
      </div>
      <div className="controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default Player;
