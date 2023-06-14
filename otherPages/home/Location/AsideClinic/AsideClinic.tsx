import { Address, InfoCard, InfoCardLink, TitleCard } from "../styled";
import { Wrapper, Iframe, Block, Button, BoxWrapper } from "./styled";
import React, { FC, Dispatch, SetStateAction } from "react";
import { Box } from "@mui/material";
import LogoImgDark from "../../../../components/LogoImgDark/LogoImgDark";

type TAsideClinic = {
  clinical: {
    title: string;
    address: string;
    telephone: string;
    email: string;
    webSite: string;
    location: string;
    emailLink: string;
    webSiteLink: string;
  };
  setOpenIndex: Dispatch<SetStateAction<number>>;
};

export const AsideClinic: FC<TAsideClinic> = ({ setOpenIndex, clinical }) => {
  return (
    <Wrapper>
      <Block>
        <Box sx={{ marginTop: "20px" }}>
          <LogoImgDark />
        </Box>
        <Box>
          <Button onClick={() => setOpenIndex(-1)}>X</Button>
        </Box>
      </Block>
      <BoxWrapper>
        <TitleCard>{clinical.title}</TitleCard>
        <Address>{clinical.address}</Address>
        <InfoCard>{clinical.telephone}</InfoCard>
        {clinical.emailLink && clinical.emailLink.length > 0 ? (
          <InfoCardLink href={clinical.emailLink} target="_blank">
            {clinical.email}
          </InfoCardLink>
        ) : (
          <InfoCard>{clinical.email}</InfoCard>
        )}
        {clinical.webSiteLink && clinical.webSiteLink.length > 0 ? (
          <InfoCardLink href={clinical.webSiteLink} target="_blank">
            {clinical.webSite}
          </InfoCardLink>
        ) : (
          <InfoCard>{clinical.webSite}</InfoCard>
        )}
      </BoxWrapper>
      {clinical && clinical.location === "Opening soon!" ? (
        ""
      ) : (
        <Iframe src={clinical.location}></Iframe>
      )}
    </Wrapper>
  );
};
