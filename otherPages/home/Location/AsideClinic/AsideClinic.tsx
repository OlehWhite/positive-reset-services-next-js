import { Address, InfoCard, InfoCardLink, TitleCard } from "../styled";
import { Wrapper, Iframe, Block, Button, BoxWrapper } from "./styled";
import React, { FC, Dispatch, SetStateAction } from "react";
import { Box } from "@mui/material";
import LogoImgDark from "../../../../components/LogoImgDark/LogoImgDark";

type TAsideClinic = {
  location: any;
  setOpenIndex: Dispatch<SetStateAction<number>>;
};

export const AsideClinic: FC<TAsideClinic> = ({ setOpenIndex, location }) => {
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
        <TitleCard>{location.title}</TitleCard>
        <Address>{location.address}</Address>
        <InfoCard>{location.tel}</InfoCard>
        {location.email ? (
          <InfoCardLink href={location.emailLink} target="_blank">
            {location.email}
          </InfoCardLink>
        ) : (
          <InfoCard>{location.email}</InfoCard>
        )}
        {location.webSiteLink ? (
          <InfoCardLink href={location.webSiteLink} target="_blank">
            {location.webSite}
          </InfoCardLink>
        ) : (
          <InfoCard>{location.webSite}</InfoCard>
        )}
      </BoxWrapper>
      {location && location.location === "Opening soon!" ? (
        ""
      ) : (
        <Iframe src={location.location}></Iframe>
      )}
    </Wrapper>
  );
};
