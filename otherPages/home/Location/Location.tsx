import {
  Container,
  Info,
  Text,
  Title,
  Carusell,
  Clinicals,
  Img,
  InfoCard,
  TitleCard,
  Address,
  Wrapper,
} from "./styled";
import IMGLeft from "../../../public/arrow-point-to-left.png";
import IMGRight from "../../../public/arrow-point-to-right.png";
import React, { FC, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import Drawer from "@mui/material/Drawer";
import { AsideClinic } from "./AsideClinic/AsideClinic";
import Image from "next/image";
import { LOCATIONS } from "../../utils";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false,
  responsive: [
    {
      breakpoint: 1335,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const Location: FC = () => {
  const ref = useRef<Slider | null>(null);
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      onNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const onNext = (): void => {
    ref.current?.slickNext();
  };

  const onPrev = (): void => {
    ref.current?.slickPrev();
  };

  return (
    <Container>
      <Info>
        <Title>POSITIVE RESET SERVICES LOCATIONS</Title>
        <Text>
          POSITIVE RESET SERVICES is a successful franchise company that opens
          Mental Health Clinics across Unlined Sates. POSITIVE RESET SERVICES
          works like a professional system that has stood the test of time,
          financial success and successful treatment outcomes.
        </Text>
      </Info>
      <Carusell>
        <Image
          src={IMGLeft}
          width={64}
          height={64}
          alt="Left Button"
          title="Left Button"
          onClick={onPrev}
          id="arrow-off"
        />
        <Clinicals {...settings} ref={ref}>
          {LOCATIONS.map((location, index) => (
            <Wrapper key={index}>
              <Box onClick={() => setOpenIndex(index)}>
                <Box>
                  <Img
                    src={
                      location.isOpened
                        ? "/location-open.png"
                        : "/location-opening-soon.png"
                    }
                    alt={location.address}
                    title={location.address}
                  />
                </Box>
                <Box>
                  <TitleCard>{location.title}</TitleCard>
                  <Address>{location.address}</Address>
                  <InfoCard>{location.tel}</InfoCard>
                  <InfoCard>{location.email}</InfoCard>
                  <InfoCard>{location.link}</InfoCard>
                </Box>
              </Box>
              <Drawer
                anchor="right"
                open={openIndex === index}
                onClose={() => setOpenIndex(-1)}
              >
                <AsideClinic setOpenIndex={setOpenIndex} location={location} />
              </Drawer>
            </Wrapper>
          ))}
        </Clinicals>
        <Image
          src={IMGRight}
          width={64}
          height={64}
          alt="Right Button"
          title="Right Button"
          onClick={onNext}
          id="arrow-off"
        />
      </Carusell>
    </Container>
  );
};
