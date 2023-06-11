import { Address, InfoCard, TitleCard } from "../styled";
import { Wrapper, Iframe, Block, Button } from "./styled";
import { FC, Dispatch, SetStateAction } from "react";
import IMGLogo from "../../../../public/Illinois-BC-Name01e.png";
import { Box } from "@mui/material";
import Image from "next/image";

type TAsideClinic = {
  clinical: {
    title: string;
    address: string;
    telephone: string;
    email: string;
    webSite: string;
    location: string;
  };
  setOpenIndex: Dispatch<SetStateAction<number>>;
};

export const AsideClinic: FC<TAsideClinic> = ({ setOpenIndex, clinical }) => {
  return (
    <Wrapper>
      <Block>
        <Box sx={{ marginTop: "20px" }}>
          <Image
            src={IMGLogo}
            width={300}
            height={47}
            alt="Illinois"
            title="Illinois"
          />
        </Box>
        <Box>
          <Button onClick={() => setOpenIndex(-1)}>X</Button>
        </Box>
      </Block>
      <Box>
        <TitleCard>{clinical.title}</TitleCard>
        <Address>{clinical.address}</Address>
        <InfoCard>{clinical.telephone}</InfoCard>
        <InfoCard>{clinical.email}</InfoCard>
        <InfoCard>{clinical.webSite}</InfoCard>
      </Box>
      {clinical && clinical.location === "Opening soon!" ? (
        ""
      ) : (
        <Iframe src={clinical.location}></Iframe>
      )}
    </Wrapper>
  );
};
