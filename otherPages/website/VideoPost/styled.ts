import { Box, styled } from "@mui/material";

export const VideoLogo = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: 563,
    height: "100%",
    maxHeight: 320,
    transition: ".3s",
    cursor: "pointer",

    "&:hover": {
      transition: ".3s",
      boxShadow: "0px 0px 20px 10px silver",
    },
    "@media (max-width: 661px)": {
      width: 440,
      maxWidth: "100%",
    },
    "@media (max-width: 500px)": {
      width: 350,
      maxWidth: "100%",
    },
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-evenly",
    maxWidth: 1303,

    "@media (max-width: 1335px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});
