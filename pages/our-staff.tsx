import React, { useEffect, useState } from "react";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import {
  Container,
  Title,
  WrapperHeader,
  Counselors,
  WrapperCards,
  Prescribers,
} from "../otherPages/ourStaff/style";
import Head from "next/head";
import axios from "axios";
import { PRIVATE_DATA } from "../otherPages/privateData";
import PersonCardComponent from "../otherPages/ourStaff/PersonCardComponent";
import IMGHeader from "../public/4Z8WMNtQ.jpeg";

const OurStaff = () => {
  const [counselors, setCounselors] = useState<object[]>([]);
  const [prescribers, setPrescribers] = useState<object[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=positiveResetServicesCounselors&access_token=${PRIVATE_DATA.accessId}`,
      )
      .then((response) => {
        setCounselors(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });

    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=positiveResetServicesPrescribers&access_token=${PRIVATE_DATA.accessId}`,
      )
      .then((response) => {
        setPrescribers(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Positive Reset Services - Call Today | Our Staff</title>
      </Head>
      <OtherHeader />
      <WrapperHeader
        style={{
          backgroundImage: `url(${IMGHeader.src})`,
        }}
      >
        <Title>OUR STAFF MEMBERS</Title>
      </WrapperHeader>
      {counselors.length === 0 && prescribers.length === 0 ? (
        <Title sx={{ fontSize: "50px", margin: "40px 0" }}>
          Coming soon...
        </Title>
      ) : (
        <Container>
          {counselors.length !== 0 && (
            <Counselors>
              <Title sx={{ margin: "35px 0" }}>COUNSELORS</Title>
              <WrapperCards>
                {counselors?.map((counselor, index) => (
                  <PersonCardComponent key={index} counselor={counselor} />
                ))}
              </WrapperCards>
            </Counselors>
          )}
          {prescribers.length !== 0 && (
            <Prescribers>
              <Title sx={{ margin: "35px 0" }}>PRESCRIBERS</Title>
              <WrapperCards>
                {prescribers?.map((counselor, index) => (
                  <PersonCardComponent key={index} counselor={counselor} />
                ))}
              </WrapperCards>
            </Prescribers>
          )}
        </Container>
      )}
    </>
  );
};

export default OurStaff;
