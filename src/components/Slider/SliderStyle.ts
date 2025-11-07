import styled from "styled-components";

interface NavButtonProps {
  left?: boolean;
}

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

export const NavButton = styled.button<NavButtonProps>`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? "left: 8px;" : "right: 8px;")}
  transform: translateY(-50%);
  color: #b72248;
  border: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  z-index: 5;
  transition: transform 0.15s ease, background 0.15s ease;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px) saturate(150%);
  -webkit-backdrop-filter: blur(10px) saturate(150%);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.25);

  &:hover {
    transform: translateY(-50%) scale(1.05);
    // background: #fff;
  }

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    font-size: 18px;
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
