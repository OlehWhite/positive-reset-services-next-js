import { HomeHeader } from "../components/Layout/HomeHeader/HomeHeader";
import { MotivationalQuotes } from "../otherPages/home/MotivationalQuotes/MotivationalQuotes";
import { FranchiseOptions } from "../otherPages/home/FranchiseOptions/FranchiseOptions";
import { AboutFranchising } from "../otherPages/home/AboutFranchising/AboutFranchising";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import { OurPartners } from "../otherPages/home/OurPartners/OurPartners";
import { Location } from "../otherPages/home/Location/Location";
import { Services } from "../otherPages/home/Services/Services";
import { Box } from "@mui/material";
import React from "react";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Positive Reset Services - Call Today</title>
        <meta
          name="description"
          content="POSITIVE RESET SERVICES is a successful franchise company that operates Mental Health Clinics across the United States. We provide a professional system with a proven track record of financial success and positive treatment outcomes. Call us today at +1 (848) 228-3388."
        />
      </Head>
      <HomeHeader />
      <>
        <Services />
        <MotivationalQuotes />
        <Location />
        <Feedbacks />
        <FranchiseOptions />
        <AboutFranchising />
        <OurPartners />
      </>
    </>
  );
};

export default Home;
