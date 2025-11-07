import React, { useEffect, useState } from "react";
import {
  TimerContainer,
  TimerCard,
  TimerGroup,
  TimerValue,
  TimerLabel,
  Container,
  TitleSection,
} from "./RelationshipTimerStyle";

const startDate = new Date("2017-11-27T00:00:00"); 

const RelationshipTimerComp: React.FC = () => {
  const [time, setTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const totalMs = now.getTime() - startDate.getTime();

      const totalSeconds = Math.floor(totalMs / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      const years = Math.floor(totalDays / 365);
      const months = Math.floor((totalDays % 365) / 30);
      const days = totalDays - years * 365 - months * 30;
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      setTime({ years, months, days, hours, minutes, seconds });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <TitleSection>
        Estamos juntos há:
      </TitleSection>
    <TimerContainer>
      <TimerGroup>
        <TimerCard>
          <TimerValue>{time.years}</TimerValue>
          <TimerLabel>Anos</TimerLabel>
        </TimerCard>
        <TimerCard>
          <TimerValue>{time.months}</TimerValue>
          <TimerLabel>Meses</TimerLabel>
        </TimerCard>
        <TimerCard>
          <TimerValue>{time.days}</TimerValue>
          <TimerLabel>Dias</TimerLabel>
        </TimerCard>
      </TimerGroup>

      <TimerGroup>
        <TimerCard>
          <TimerValue>{time.hours}</TimerValue>
          <TimerLabel>Horas</TimerLabel>
        </TimerCard>
        <TimerCard>
          <TimerValue>{time.minutes}</TimerValue>
          <TimerLabel>Minutos</TimerLabel>
        </TimerCard>
        <TimerCard>
          <TimerValue>{time.seconds}</TimerValue>
          <TimerLabel>Segundos</TimerLabel>
        </TimerCard>
      </TimerGroup>
    </TimerContainer>
    </Container>
  );
};

export default RelationshipTimerComp;
