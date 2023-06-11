import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import { FC } from "react";
import { Box } from "@mui/material";
import { Header } from "../otherPages/aboutUs/Header/Header";
import { Mission } from "../otherPages/aboutUs/Mission/Mission";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import { VisionStatement } from "../otherPages/aboutUs/VisionStatement/VisionStatement";
import Head from "next/head";

const AboutUs: FC = () => {
  return (
    <Box>
      <Head>
        <title>Positive Reset Services - Call Today | About Us</title>
        <meta name="description" content="OUR MISSION OUR VALUES OUR VISION OUR GOAL" />
      </Head>
      <OtherHeader />
      <Header />
      <Mission />
      <VisionStatement />
      <Feedbacks />
    </Box>
  );
};

export default AboutUs;
