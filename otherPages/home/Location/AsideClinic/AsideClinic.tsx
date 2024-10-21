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
        <TitleCard>{location?.title}</TitleCard>
        <Address>{location?.address}</Address>
        <InfoCard>{location?.tel}</InfoCard>

        <InfoCardLink>{location?.email}</InfoCardLink>
      </BoxWrapper>

      <Iframe src={location.googleMap}></Iframe>
    </Wrapper>
  );
};
