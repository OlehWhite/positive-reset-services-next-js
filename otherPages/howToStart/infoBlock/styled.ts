import { styled, Box } from "@mui/material";

export const Container = styled(Box)(() => {
  return {
    backgroundColor: "#f7f7f7",
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 1300,
    width: "100%",
    margin: "0 auto",
    paddingTop: 60,

    "@media (max-width: 1335px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

export const Info = styled(Box)(() => {
  return {
    maxWidth: 630,
    width: "100%",
  };
});

export const WrapperPicture = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "center",
    maxWidth: 520,
    width: "100%",
  };
});

export const Post = styled(Box)(() => {
  return {
    display: "flex",
    marginBottom: 10,
  };
});

export const WrapperImg = styled("div")(() => {
  return {
    overflow: "hidden",
    marginRight: 20,
  };
});

export const WrapperPost = styled("div")(() => {
  return {
    width: "100%",
    maxWidth: 534,
  };
});

export const Title = styled("h2")(() => {
  return {
    fontSize: 16,
    color: "#373737",
    margin: 0,
  };
});

export const Text = styled("p")(() => {
  return {
    fontSize: 14,
    color: "#959595",
    lineHeight: "26px",
  };
});

export const Img = styled("img")(() => {
  return {
    width: 68,
    borderRadius: "50%",
  };
});
