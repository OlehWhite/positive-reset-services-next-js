import { styled, Box } from "@mui/material";

export const Container = styled(Box)(() => {
  return {
    display: "flex",
    marginTop: 50,

    "@media (max-width: 889px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: "flex",
  };
});

export const Logo = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: 650,
    display: "flex",
    justifyContent: "center",
  };
});
export const WrapperImg = styled(Box)(() => {
  return {
    padding: "0 18px 28px 0",
  };
});

export const WrapperBox = styled("div")(() => {
  return {
    borderRadius: "50%",
    overflow: "hidden",
  };
});

export const WrapperContent = styled(Box)(() => {
  return {
    marginLeft: 20,
  };
});
