import { HomeHeader } from "../components/Layout/HomeHeader/HomeHeader";
import { MotivationalQuotes } from "../otherPages/home/MotivationalQuotes/MotivationalQuotes";
import { FranchiseOptions } from "../otherPages/home/FranchiseOptions/FranchiseOptions";
import { AboutFranchising } from "../otherPages/home/AboutFranchising/AboutFranchising";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import { OurPartners } from "../otherPages/home/OurPartners/OurPartners";
import { Location } from "../otherPages/home/Location/Location";
import { Services } from "../otherPages/home/Services/Services";
import { Box } from "@mui/material";
import React, { FC } from "react";
import Head from "next/head";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Positive Reset Services - Call Today</title>
        <meta
          name="keywords"
          content="Positive Reset Services - Call Today, Addiction treatment services, Recovery programs, Substance abuse counseling, Mental health support, Holistic approach to recovery, Professional treatment center, Personalized care and therapy, Long-term recovery solutions, Supportive community for healing"
        />
        <meta
          name="description"
          content="THE GRASS IS GREENER WHERE YOU WATER IT"
        />
        <meta
          name="description2"
          content="THE SECRET OF GETTING AHEAD IS GETTING STARTED"
        />
        <meta name="description3" content="DO IT WITH PASSION, OR NOT AT ALL" />
        <meta name="description4" content="POSITIVE RESET SERVICES LOCATIONS" />
        <meta
          name="description5"
          content="THE ‘MENTAL HEALTH’ FRANCHISE IS BEYOND SUCCESSFUL."
        />
        <meta
          name="description6"
          content="NEWS ABOUT FRANCHISING OPPORTUNITIES"
        />
        <meta name="description7" content="OUR PARTNERS" />
      </Head>
      <HomeHeader />
      <Box>
        <Services />
        <MotivationalQuotes />
        <Location />
        <Feedbacks />
        <FranchiseOptions />
        <AboutFranchising />
        <OurPartners />
      </Box>
    </>
  );
};

export default Home;
