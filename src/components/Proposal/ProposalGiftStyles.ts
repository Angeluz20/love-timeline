import styled from "styled-components";

export const GiftCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 40px;
  width: 300px;
  margin: 20px auto;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    width: 240px;
    padding: 30px;
    margin-bottom: 20px;
  }

  p {
    margin-top: 15px;
    color: #e495a3ff;
    font-size: 18px;
    text-align: center;
    font-style: italic;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 40px rgba(255, 182, 193, 0.5);
  }
`;

export const TitleSection = styled.h1`
  color: #b72248;
  font-size: 34px;
  margin: 16px 0 28px;
  font-style: italic;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(12px);
  background: rgba(0, 0, 0, 0.69);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
  backdrop-filter: blur(25px);
  padding: 40px;
  width: 80%;
  max-width: 500px;
  color: #fff;
  text-align: center;
  box-shadow: 0 4px 60px rgba(255, 255, 255, 0.1);
  animation: fadeIn 0.4s ease;

  @media (max-width: 768px) {
  width: 70%;
  max-width: 400px;  }

  @keyframes fadeIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const Message = styled.div`
  h2 {
    font-size: 26px;
    margin-bottom: 15px;
    color: #e495a3ff;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 15px;
    color: #888888ff;
  }

  h3 {
    margin-top: 20px;
    font-size: 22px;
    color: #e495a3ff;
    font-style: italic;
  }
`;

export const YesButton = styled.button`
  background: linear-gradient(90deg, #f25c7a, #b72248);
  border: none;
  border-radius: 30px;
  color: #fff;
  padding: 12px 30px;
  margin-top: 20px;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(242, 92, 122, 0.6);
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: 2px solid #f25c7a;
  border-radius: 30px;
  color: #f25c7a;
  padding: 8px 20px;
  margin-top: 25px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(242, 92, 122, 0.2);
  }
`;
