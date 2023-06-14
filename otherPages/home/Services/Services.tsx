import React, { FC, useState } from "react";
import { Wrapper, WrapperBox } from "./styled";
import IMGVideoLogo from "../../../public/video-logo.jpg";
import { AboutFranchise } from "./AboutFranchise/AboutFranchise";
import { Box, Modal } from "@mui/material";
import Image from "next/image";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 640,
  boxShadow: 24,
  height: 360,
};

export const Services: FC = () => {
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <Wrapper>
      <WrapperBox onClick={handleOpen}>
        <Image
          src={IMGVideoLogo}
          width={643}
          height={365}
          alt="Video Logo"
          title="Video Logo"
          id="img"
        />
      </WrapperBox>
      <AboutFranchise />
      <Modal
        open={openModalWindow}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <video width={640} controls autoPlay loop src="/videoplayback.mp4" />
        </Box>
      </Modal>
    </Wrapper>
  );
};
