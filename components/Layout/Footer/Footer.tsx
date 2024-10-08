import {
  Container,
  Wrapper,
  Menu,
  Logo,
  WorkingHours,
  RecentPosts,
  Text,
  Ul,
  Li,
  WrapperPost,
  Post,
  Title,
  ImgPost,
  Contact,
  ContactInfo,
  Email,
  Tel,
  WrapperImg,
  TextLogo,
  Day,
  WrapperAlarm,
  WrapperPosition,
  Days,
  Copyright,
  Links,
  Twitter,
  Linkedin,
  Facebook,
  TitleFooter,
} from "./styled";
import React, { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import ModalServices from "../../ModalServices/ModalServices";
import IMGFacebook from "../../../public/facebook-footer.svg";
import IMGLinkedin from "../../../public/linkedin-footer.svg";
import IMGAlarmClock from "../../../public/alarm-clock.png";
import IMGPhoneLogo from "../../../public/silver-mobil.png";
import IMGTwitter from "../../../public/twitter-footer.svg";
import Image from "next/image";
import Link from "next/link";
import { PRIVATE_DATA } from "../../../otherPages/privateData";
import LogoImg from "../../LogoImg/LogoImg";
import {LINKS, OTHER_INFO, SCHEDULE} from "../../../otherPages/utils";

const BASE_MENU = [
  { page: "Home", path: "/" },
  { page: "Services", path: "/services" },
  { page: "Тelehealth", path: "/telehealth" },
  { page: "Appointment request", path: "/appointment-request" },
  { page: "About Us", path: "/about-us" },
  { page: "Contact us", path: "/contact-us" },
  { page: "Career Opportunities", path: "/career-opportunities" },
];

interface Post {
  img: string;
  text: string;
  button: string;
}

const ID = "telephoneNumber";
const IDPosts = "aboutFranchising";

export const Footer: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${IDPosts}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response: any) => {
        if (response.data.items.length > 0) {
          response.data.items.map((post?: any) => {
            const imgID = post.fields.img.sys.id;
            const text = post.fields.text.content[0].content[0].value;
            const button = post.fields.button.content[0].content[0].value;

            return axios
              .get(
                `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/assets/${imgID}?access_token=${PRIVATE_DATA.accessId}`
              )
              .then((response: any) => {
                const newPost: Post = {
                  img: response.data.fields.file.url,
                  text,
                  button,
                };
                setPosts((prevPost) => [...prevPost, newPost]);
              });
          });
        }
      })
      .catch((error: any) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <Container>
      <Wrapper>
        <Logo>
          <LogoImg />
          <TextLogo>
            POSITIVE RESET SERVICES is a successful franchise company that opens
            Mental Health Clinics across United States.
            <br />
            POSITIVE RESET SERVICES operates as a professional system that has
            stood the test of time, achieving financial success and delivering
            successful treatment outcomes.
          </TextLogo>
          <Contact>
            <WrapperImg>
              <Image
                src={IMGPhoneLogo}
                width={25}
                height={40}
                alt="Phone"
                title="Phone"
              />
            </WrapperImg>
            <ContactInfo>
              <Tel href={`tel:${OTHER_INFO.tel}`}>{OTHER_INFO.tel}</Tel>
              <Email>{OTHER_INFO.email}</Email>
            </ContactInfo>
          </Contact>
        </Logo>
        <Menu>
          <Title>MENU</Title>
          <Ul>
            {BASE_MENU.map((link, index) => (
              <Li key={index}>
                {link.page !== "Services" ? (
                  <Link href={link.path} passHref id="white-footer-link">
                    {link.page}
                  </Link>
                ) : (
                  <ModalServices />
                )}
              </Li>
            ))}
          </Ul>
        </Menu>
        <RecentPosts>
          <Title>RECENT POST</Title>
          <WrapperPost>
            {posts.length > 0 &&
              posts.slice(0, 3).map((post: Post, index: number) => (
                <Post key={index}>
                  <ImgPost
                    src={post.img}
                    alt="First Post"
                    title="Second Post"
                  />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Text>{post.text}</Text>
                  </Box>
                </Post>
              ))}
          </WrapperPost>
        </RecentPosts>
        <WorkingHours>
          <WrapperPosition>
            <WrapperAlarm>
              <Image
                src={IMGAlarmClock}
                width={45}
                height={45}
                alt="Alar"
                title="Alarm"
              />
            </WrapperAlarm>
          </WrapperPosition>
          <Days>
            {Object.entries(SCHEDULE).map((day, index) => (
              <Day key={index}>
                {day[0]}: {day[1]}
              </Day>
            ))}
          </Days>
        </WorkingHours>
      </Wrapper>
      <Copyright>
        <TitleFooter>
          Copyright © 2021 Vimax LLC. All rights reserved
        </TitleFooter>
        <Links>
          <Facebook href={LINKS.facebook} target="_blank">
            <Image
              src={IMGFacebook}
              width={20}
              height={20}
              alt="Facebook"
              title="Facebook"
            />
          </Facebook>
          <Twitter href={LINKS.twitter} target="_blank">
            <Image
              src={IMGTwitter}
              width={20}
              height={20}
              alt="Twitter"
              title="Twitter"
            />
          </Twitter>
          <Linkedin href={LINKS.linkedin} target="_blank">
            <Image
              src={IMGLinkedin}
              width={20}
              height={20}
              alt="Linkedin"
              title="Linkedin"
            />
          </Linkedin>
        </Links>
      </Copyright>
    </Container>
  );
};
