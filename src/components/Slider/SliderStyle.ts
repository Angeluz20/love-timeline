import styled from "styled-components";

interface DotProps {
  active: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentSlider = styled.div`
  background: rgba(255, 255, 255, 0.9);
  width: 75%;
  max-width: 720px;
  border-radius: 14px;
  padding: 10px 10px 48px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleSection = styled.h1`
  color: #b72248;
  font-size: 34px;
  margin: 55px 0 28px;
  font-style: italic;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  border-radius: 12px;

  @media (max-width: 980px) {
    height: 320px;
  }

  @media (max-width: 480px) {
    height: 240px;
  }
`;

export const CenterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 12px;
  display: block;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
  animation: appear 420ms ease forwards;

  @keyframes appear {
    0% {
      opacity: 0;
      transform: scale(0.98);
    }
    60% {
      opacity: 1;
      transform: scale(1.02);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

export const Dot = styled.button<DotProps>`
  width: ${({ active }) =>
    active ? "40px" : "10px"};;
  height: 10px;
  border-radius: ${({ active }) =>
    active ? "10px" : "50%"};;
  border: none;
  cursor: pointer;
  background-color: ${({ active }) =>
    active ? "#b72248" : "rgba(182, 106, 129, 0.29)"};
  box-shadow: ${({ active }) =>
    active ? "0 2px 6px rgba(170, 152, 156, 0.25)" : "none"};
  transition: all 180ms ease;

  @media (max-width: 480px) {
    width: ${({ active }) =>
    active ? "26px" : "6px"};;
  height: 12px;
  border-radius: ${({ active }) =>
    active ? "4px" : "50%"};;
  }
`;
