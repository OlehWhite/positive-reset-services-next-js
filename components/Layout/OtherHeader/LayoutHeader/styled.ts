import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(() => {
  return {
    width: 1300,
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
    padding: "20px 0",

    "@media (max-width: 700px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

export const ContactInfo = styled(Box)(() => {
  return {};
});

export const Tel = styled(Box)(() => {
  return {
    marginBottom: 6,
    color: "#555",
    fontWeight: 600,
    fontSize: 13,
  };
});

export const Email = styled(Box)(() => {
  return {
    color: "#979797",
    fontWeight: 400,
    fontSize: 13,
  };
});

export const ContactAndFollow = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 450,
    width: "100%",
    alignItems: "center",

    "@media (max-width: 769px)": {
      display: "none",
    },
  };
});

export const Follow = styled(Box)(() => {
  return {
    display: "flex",
    color: "white",
  };
});

export const ImgFollow = styled("img")(() => {
  return {
    width: 40,
    height: 40,
  };
});

export const Contact = styled(Box)(() => {
  return {
    display: "flex",
  };
});

export const FollowInfo = styled(Box)(() => {
  return {};
});

export const Title = styled(Box)(() => {
  return {
    marginBottom: 6,
    color: "#979797",
  };
});

export const WrapperFollow = styled(Box)(() => {
  return {
    display: "flex",
    marginLeft: 8,
  };
});

export const Link = styled("a")(() => {
  return {
    display: "flex",
    width: 14,
    padding: 5,
    borderRadius: "50%",
    backgroundColor: "rgb(95,95,95)",
    cursor: "pointer",
    marginRight: 6,
    transition: ".3s",

    "&:hover": {
      transition: ".3s",
      backgroundColor: "#00C1FF",
    },
  };
});

export const WrapperImg = styled(Box)(() => {
  return {
    marginRight: 6,
  };
});