import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: #b72248;
`;

export const TimerGroup = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const TimerCard = styled.div`
  background: #fff;
  // background: linear-gradient(to right, #f5d0da, #ffffff);
  border-radius: 10px;
  padding: 20px 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 100px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    min-width: 70px;
  }
`;

export const TimerValue = styled.h2`
  font-size: 36px;
  margin: 0;
  color: #b72248;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const TimerLabel = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #4d4d4d;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
