import styled from "styled-components";

export const PlayerContainer = styled.div<{ expanded: boolean }>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: ${({ expanded }) => (expanded ? "300px" : "60px")};
  height: 60px;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px) saturate(150%);
  -webkit-backdrop-filter: blur(10px) saturate(150%);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.25);

  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  transition: all 0.4s ease;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);

  &:hover {
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
  }
`;

export const PlayButton = styled.button`
  background: linear-gradient(135deg, #b72248, #f25c7a);
  border: none;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(242, 92, 122, 0.6);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 12px rgba(242, 92, 122, 0.9);
  }
`;

export const SongIcon = styled.img`
  width: 35px;
  border-radius: 10px;
`

export const ContainerSongInfo = styled.div`
  display: flex;
  fle-direction: row;
  padding: 6px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.44);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(10px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 5px 10px;
  margin-left: 8px;
`

export const SongInfo = styled.div`
  margin-left: 15px;

  h4 {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color:  #383838ff;
  }

  p {
    margin: 0;
    font-size: 12px;
    color:  #474747ff;
  }
`;

export const WaveContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 3px;
`;

export const WaveBar = styled.div<{ delay: number }>`
  width: 3px;
  height: 15px;
  background: linear-gradient(180deg, #f25c7a, #b72248);
  border-radius: 2px;
  animation: wave 1s infinite;
  animation-delay: ${({ delay }) => delay}s;

  @keyframes wave {
    0%, 100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(2.3);
    }
  }
`;
