import { styled, Box } from "@mui/material";

export const Container = styled(Box)(() => {
  return {
    borderTop: "1px solid #ffffff42",
    borderBottom: "1px solid #ffffff42",
  };
});

export const Wrapper = styled("nav")(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 1300,
    margin: "0 auto",
    padding: "20px",
  };
});

export const WrapperMenu = styled(Box)(() => {
  return {
    display: "none",

    "@media (max-width: 769px)": {
      display: "block",
    },
  };
});

export const WrapperSidebar = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "@media (max-width: 769px)": {
      display: "flex",
      alignItems: "center",
    },
  };
});
