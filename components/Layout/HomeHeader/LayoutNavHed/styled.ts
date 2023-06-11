import { styled, Box } from "@mui/material";
import Link from "next/link";

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

export const Nav = styled("a")(() => {
  return {
    color: "white",
    transition: ".3s",
    marginRight: 20,
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",

    "&:hover": {
      color: "#3498db",
    },

    "@media (max-width: 769px)": {
      display: "none",
    },
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
    "@media (max-width: 769px)": {
      display: "flex",
      alignItems: "center",
    },
  };
});
