import React, { useState, useRef } from "react";
import {
  PlayerContainer,
  PlayButton,
  SongInfo,
  WaveContainer,
  WaveBar,
  ContainerSongInfo,
  SongIcon,
} from "./FloatingMusicPlayerStyles";
import { FaPlay, FaPause } from "react-icons/fa";
import iconMusic from "../../assets/icon-music.jpg"

const FloatingMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTogglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerContainer expanded={isPlaying}>
      <PlayButton onClick={handleTogglePlay}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </PlayButton>

      {isPlaying && (
        <>
        <ContainerSongInfo>
          <SongIcon src={iconMusic} />
          <SongInfo>
            <h4>Ed Sheeran</h4>
            <p>Perfect</p>
          </SongInfo>
        </ContainerSongInfo>
        
          <WaveContainer>
            {[...Array(5)].map((_, i) => (
              <WaveBar key={i} delay={i * 0.15} />
            ))}
          </WaveContainer>
        </>
      )}

      <audio ref={audioRef} src="music/perfect.mp3" preload="auto" />
    </PlayerContainer>
  );
};

export default FloatingMusicPlayer;
