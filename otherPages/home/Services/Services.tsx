import React, { FC, useState } from "react";
import { Wrapper, Iframe, WrapperBox } from "./styled";
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
          <Iframe
            title="YouTube Video"
            src="https://rr5---sn-4g5lzned.googlevideo.com/videoplayback?expire=1686346945&ei=YUiDZLvGAsew2roPkJ-eiAU&ip=114.32.132.80&id=o-AHDrWMClAFMm2My6kPF5XhoiUNlkdV4H9NsOXVTko6Ou&itag=18&source=youtube&requiressl=yes&spc=qEK7B13z7Uzen379uPAeSACwzLKES6kb3-RqVZE3tQ&vprv=1&svpuc=1&mime=video%2Fmp4&ns=SSp1cJwjj6UAiWOWRbikAVgN&cnr=14&ratebypass=yes&dur=106.091&lmt=1656852855771891&fexp=24007246&c=WEB&txp=6218224&n=YIWB2qiG0l9YXw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgd5NZ3O2UAADg8WXVLk5YJhv4f7hA2oSVw6OBCAxKbBUCIQD0i0w6MFsjcDtEiCjxSbKMUFvqeZpZDNWhAQ-yNWSubQ%3D%3D&redirect_counter=1&cm2rm=sn-un5e776&req_id=c424bdfbae8aa3ee&cms_redirect=yes&mh=lL&mip=94.240.175.57&mm=34&mn=sn-4g5lzned&ms=ltu&mt=1686328395&mv=m&mvi=5&pl=19&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhANFKraorshtKvv_D6yAth8sQ-OTz50ri6GKY1sL7nMzTAiEAtyqmpRa8m8rzh3ggc7OG5Udlgu4jaMpK5bfy26T14Wo%3D"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </Box>
      </Modal>
    </Wrapper>
  );
};
