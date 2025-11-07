import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Confetti from "react-confetti";
import giftAnimation from "../../assets/Referral gift.json"; 
import {
  GiftCard,
  ModalBackdrop,
  ModalContent,
  Message,
  CloseButton,
  YesButton,
  Container,
  TitleSection,
} from "./ProposalGiftStyles";

const ProposalGift = () => {
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleYes = () => {
    setOpen(false)
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 8000); 
  };

  return (
    <>
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      <Container>
        <TitleSection>
            Surpresa
        </TitleSection>
      <GiftCard onClick={() => setOpen(true)}>
        <Lottie
          animationData={giftAnimation}
          loop
          style={{ width: 150, height: 150 }}
        />
        <p>Clique para abrir seu presente </p>
      </GiftCard>
      </Container>

      {open && (
        <ModalBackdrop onClick={() => setOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <Message>
              <h2>Nosso Amor</h2>
              <p>
                Passamos por tantos momentos — risadas, saudades, conquistas —
                e hoje só quero continuar essa história ao seu lado, por todos
                os dias da minha vida.
              </p>
              <h3>Quer casar comigo? 💍</h3>

              <YesButton onClick={handleYes}>Sim</YesButton>
            </Message>
            <CloseButton onClick={() => setOpen(false)}>Fechar</CloseButton>
          </ModalContent>
        </ModalBackdrop>
      )}
    </>
  );
};

export default ProposalGift;
