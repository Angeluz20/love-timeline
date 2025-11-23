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

const startDate = new Date(2017, 10, 27);
const pad = (n: number) => String(n).padStart(2, "0");

const RelationshipTimerComp: React.FC = () => {
  const [time, setTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculate = () => {
    const now = new Date();
    let lastAnniv = new Date(now.getFullYear(), now.getMonth(), 27);
    if (now.getDate() < 27) lastAnniv = new Date(now.getFullYear(), now.getMonth() - 1, 27);

    let years = lastAnniv.getFullYear() - startDate.getFullYear();
    let months = lastAnniv.getMonth() - startDate.getMonth();
    let daysFromStart = lastAnniv.getDate() - startDate.getDate();

    if (daysFromStart < 0) {
      const prev = new Date(lastAnniv.getFullYear(), lastAnniv.getMonth(), 0).getDate();
      daysFromStart += prev;
      months -= 1;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const msSinceLastAnniv = now.getTime() - lastAnniv.getTime();
    const days = Math.floor(msSinceLastAnniv / (1000 * 60 * 60 * 24));
    const totalSeconds = Math.floor(msSinceLastAnniv / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;

    setTime({ years, months, days, hours, minutes, seconds });
  };

  useEffect(() => {
    calculate();
    const id = setInterval(calculate, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Container>
      <TitleSection>Estamos juntos há:</TitleSection>

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
            <TimerValue>{pad(time.hours)}</TimerValue>
            <TimerLabel>Horas</TimerLabel>
          </TimerCard>

          <TimerCard>
            <TimerValue>{pad(time.minutes)}</TimerValue>
            <TimerLabel>Minutos</TimerLabel>
          </TimerCard>

          <TimerCard>
            <TimerValue>{pad(time.seconds)}</TimerValue>
            <TimerLabel>Segundos</TimerLabel>
          </TimerCard>
        </TimerGroup>
      </TimerContainer>
    </Container>
  );
};

export default RelationshipTimerComp;
