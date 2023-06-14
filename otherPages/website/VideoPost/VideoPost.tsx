import IMGVideoLogo from "../../../public/Websitе-cover-video.jpg";
import { VideoLogo, Wrapper } from "./styled";
import { Box, Modal } from "@mui/material";
import { useState } from "react";
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

export const VideoPost = () => {
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <>
      <Wrapper>
        <VideoLogo onClick={handleOpen}>
          <Image
            id="img"
            width={563}
            height={320}
            src={IMGVideoLogo}
            alt="Video Logo"
            title="Video Logo"
          />
        </VideoLogo>
        <Modal
          open={openModalWindow}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <video
              width={630}
              controls
              autoPlay
              loop
              src="/Website Service.mp4"
            />
          </Box>
        </Modal>
      </Wrapper>
    </>
  );
};
