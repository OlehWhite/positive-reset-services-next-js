import { styled, Box } from "@mui/material";
import { createGlobalStyle } from "styled-components";

export const Wrapper = styled(Box)(() => {
  return {
    margin: "0 auto",
  };
});

export const Img = styled(Box)(({ show }: { show: number }) => {
  return {
    display: "flex",
    position: "fixed",
    bottom: 30,
    right: 30,
    backgroundColor: "#34495e",
    borderRadius: "50%",
    visibility: show ? "visible" : "hidden",
    opacity: show ? 1 : 0,
    transition: ".3s",
    cursor: "pointer",
    width: 30,
    padding: 10,

    ":hover": {
      transition: ".3s",
      backgroundColor: "#51708f",
    },
  };
});

export const Arrow = styled(Box)(() => {
  return {};
});

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    font-weight: 400;
  }
`;
