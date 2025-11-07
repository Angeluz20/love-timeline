import styled from 'styled-components' 

export const Container = styled.div`
  background: linear-gradient(to right, #a81339ff, #F25C7A);
  width: 100vw;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 390px;
  }

  @media (max-width: 480px) {
    height: 400px;
  }
`;

export const TitleHeader = styled.h1`
  color: #fff;
  font-size: 40px;
  font-style: italic;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 27px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ContentHeader = styled.div`
  padding: 20px;
  width: 95
  %;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px;
  }
`;
