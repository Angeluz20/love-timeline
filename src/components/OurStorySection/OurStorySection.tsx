import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsHeartArrow } from "react-icons/bs";
import { FaHeart, FaGraduationCap, FaComments, FaKissWinkHeart, FaPlaneDeparture } from "react-icons/fa";
import { Container, Title, StyledTimeline } from "./OurStorySectionStyles";

const OurStorySection: React.FC = () => {
  return (
    <Container>
      <Title>Nossa História</Title>
      <StyledTimeline>
        <VerticalTimeline lineColor="transparent">
          <VerticalTimelineElement
            date="O começo"
            iconStyle={{ background: "#f25c7a" }}
            icon={<FaComments />}
          >
            <h3 className="vertical-timeline-element-title">O acaso que virou destino</h3>
            <p>
              Tudo começou na loja do meu pai — uma conversa leve, sincera e sem intenções.
              Ainda assim, algo diferente aconteceu: a sensação de que o destino estava sorrindo pra nós.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="23/11/2017"
            iconStyle={{ background: "#f25c7a" }}
            icon={<BsHeartArrow />}
          >
            <h3 className="vertical-timeline-element-title">A mensagem que mudou tudo</h3>
            <p>
              À noite, recebi uma mensagem sua agradecendo pela conversa.
              Um gesto simples que abriu o caminho para algo profundo — risadas, encontros, e uma conexão única.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="25/11/2017 - 27/11/2017"
            iconStyle={{ background: "#f25c7a" }}
            icon={<FaKissWinkHeart />}
          >
            <h3 className="vertical-timeline-element-title">O primeiro beijo</h3>
            <p>
              Naquela noite, nosso primeiro beijo marcou o início de uma história linda.
              Dois dias depois, em 27/11, veio o pedido de namoro — e o “sim” que mudou tudo.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="A distância"
            iconStyle={{ background: "#f25c7a" }}
            icon={<FaPlaneDeparture />}
          >
            <h3 className="vertical-timeline-element-title">O amor à distância</h3>
            <p>
              A distância nos testou, mas o amor venceu.
              Mesmo longe, você sempre esteve perto — paciente, compreensiva e cheia de amor.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2025"
            iconStyle={{ background: "#f25c7a" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">Um novo começo</h3>
            <p>
              Depois da formatura, a vida me trouxe de volta — e com ela, o sonho de termos o nosso lar.
              Agora moramos juntos, vivendo o que sempre sonhamos.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="Hoje"
            iconStyle={{ background: "#f25c7a" }}
            icon={<FaHeart />}
          >
            <h3 className="vertical-timeline-element-title">Você</h3>
            <p>
              Parceira, carinhosa, compreensiva.
              O meu amor, meu porto seguro e a razão pela qual cada novo capítulo é ainda mais bonito.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </StyledTimeline>
    </Container>
  );
};

export default OurStorySection;
