import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
  background: radial-gradient(circle at top left, #fffafc, #fbeff2);
`;


export const Title = styled.h1`
  color: #b72248;
  font-size: 34px;
  margin: 55px 0 28px;
  font-style: italic;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const StyledTimeline = styled.div`
  width: 100%;

  .vertical-timeline::before {
    background: rgba(242, 92, 122, 0.6);
  }

  .vertical-timeline-element-content {
    background: rgba(255, 255, 255, 0.15) !important;
    backdrop-filter: blur(10px);
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    color: #292929ff;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .vertical-timeline-element-content-arrow {
    border-right: 7px solid rgba(255, 255, 255, 0.3);
  }


  .vertical-timeline-element-date {
    color: #b72248 !important;
    font-weight: bold;
    font-style: italic;
  }

  .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px rgba(183, 34, 72, 0.2), 0 0 12px rgba(183, 34, 72, 0.3);
  }

  .vertical-timeline-element-icon svg {
    color: #fff;
  }

  .vertical-timeline-element-content:hover {
    transform: translateY(-5px) scale(1.02);
    background: rgba(255, 255, 255, 0.25) !important;
  }

  .vertical-timeline-element-title {
    color: #b72248;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .vertical-timeline-element-content p {
    color: #292929;
    font-size: 16px;
    line-height: 1.6;
  }
`;
