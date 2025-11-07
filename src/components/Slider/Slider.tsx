import React, { useState, useEffect } from "react";
import {
  Container,
  TitleSection,
  ImageWrapper,
  CenterImage,
  DotsContainer,
  Dot,
  ContentSlider,
} from "./SliderStyle";

import image1 from "../../assets/images.jpeg";
import image2 from "../../assets/images2.jpeg";
import image3 from "../../assets/images3.jpeg";
import image4 from "../../assets/images4.jpeg";
import image5 from "../../assets/images5.jpeg";
import image6 from "../../assets/images6.jpeg";
import image7 from "../../assets/images7.jpeg";
import image8 from "../../assets/images8.jpeg";
import backdrop from "../../assets/nh.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); 
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(false); 
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const prev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(false);
    }, 400);
  };

  const next = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFade(false);
    }, 400);
  };

  return (
    <Container>
      <TitleSection>Nossos momentos</TitleSection>
      <ContentSlider>
        <ImageWrapper>
          <CenterImage
            src={images[currentIndex]}
            alt={`moment-${currentIndex}`}
            className={fade ? "fade-out" : "fade-in"}
          />
        </ImageWrapper>

        {/* <NavButton left onClick={prev} aria-label="Anterior">
          ❮
        </NavButton>
        <NavButton onClick={next} aria-label="Próximo">
          ❯
        </NavButton> */}

        <DotsContainer>
          {images.map((_, i) => (
            <Dot
              key={i}
              active={i === currentIndex}
              onClick={() => {
                if (i === currentIndex) return;
                setFade(true);
                setTimeout(() => {
                  setCurrentIndex(i);
                  setFade(false);
                }, 400);
              }}
            />
          ))}
        </DotsContainer>
      </ContentSlider>
    </Container>
  );
};

export default Slider;
