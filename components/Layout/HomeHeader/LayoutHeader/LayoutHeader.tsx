import {
  Contact,
  ContactAndFollow,
  ContactInfo,
  Email,
  Follow,
  FollowInfo,
  Link,
  Tel,
  Title,
  Wrapper,
  WrapperFollow,
  WrapperImg,
} from "./styled";
import React, { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import IMGHomeLogo from "../../../../public/logo.png";
import IMGPhoneLogo from "../../../../public/white-mobil.png";
import IMGFollowIcon from "../../../../public/white-follow-icon.png";
import IMGFacebook from "../../../../public/facebook-icon.svg";
import IMGLinkedin from "../../../../public/linkedin-icon.svg";
import { PRIVATE_DATA } from "../../../../otherPages/privateData";

const ID = "telephoneNumber";

export const LayoutHeader: FC = () => {
  const [telNum, setTelNum] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [linkFacebook, setLinkFaceBook] = useState<string>("");
  const [linkLinkedin, setLinkLinkedin] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        setTelNum(
          response.data.items[0].fields.telephoneNumber.content[0].content[0]
            .value
        );
        setEmail(
          response.data.items[0].fields.email.content[0].content[0].value
        );
        setLinkFaceBook(
          response.data.items[0].fields.facebookLink.content[0].content[0].value
        );
        setLinkLinkedin(
          response.data.items[0].fields.linkedinLink.content[0].content[0].value
        );
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <Wrapper>
      <Box>
        <Image
          src={IMGHomeLogo}
          width={353}
          height={47}
          alt="Logo"
          title="Logo"
        />
      </Box>
      <ContactAndFollow>
        <Contact>
          <WrapperImg>
            <Image
              src={IMGPhoneLogo}
              width={30}
              height={50}
              alt="Phone"
              title="Phone"
            />
          </WrapperImg>
          <ContactInfo>
            <Tel>{telNum}</Tel>
            <Email>{email}</Email>
          </ContactInfo>
        </Contact>
        <Follow>
          <WrapperImg>
            <Image
              src={IMGFollowIcon}
              width={60}
              height={60}
              alt="Follow"
              title="Follow"
            />
          </WrapperImg>
          <FollowInfo>
            <Title>Follow Us</Title>
            <WrapperFollow>
              <Link href={linkFacebook}>
                <Image
                  src={IMGFacebook}
                  width={20}
                  height={20}
                  alt="Facebook"
                  title="Facebook"
                />
              </Link>
              <Link href={linkLinkedin}>
                <Image
                  src={IMGLinkedin}
                  width={23}
                  height={23}
                  alt="Linkedin"
                  title="Linkedin"
                />
              </Link>
            </WrapperFollow>
          </FollowInfo>
        </Follow>
      </ContactAndFollow>
    </Wrapper>
  );
};
