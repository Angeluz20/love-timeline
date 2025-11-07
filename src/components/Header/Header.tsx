import { Container, ContentHeader, TitleHeader } from "./HeaderStyle";
import Lottie from "lottie-react";
import hearts from "../../assets/heart-burst.json"

const Header = () => {
    const cleanedAnimation = {
  ...hearts,
  layers: hearts.layers.filter(layer => layer.nm !== "background"),
};
  return (
    <Container>
      <Lottie
        animationData={cleanedAnimation}
        loop
        style={{ background: 'transparent', width: 300, height: 300 }}
        />
      <ContentHeader>
        <TitleHeader>Juntos para sempre</TitleHeader>

        <p>
          Oi, <strong style={{ fontSize: "24px" }}>meu amor! </strong>
          No dia <strong style={{ fontSize: "24px" }}>27/11/2025</strong>, a
          gente faz <strong>8</strong> anos juntos — e eu preparei essa surpresa
          pra celebrar cada pedacinho da nossa história.
          <br />
          Agora é com você: rola pra baixo e vem descobrir o que preparei!
        </p>
      </ContentHeader>
        <Lottie
        animationData={cleanedAnimation}
        loop
        style={{ background: 'transparent', width: 300, height: 300 }}
        />
    </Container>
  );
};

export default Header;
