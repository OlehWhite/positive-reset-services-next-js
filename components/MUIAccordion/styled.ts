import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export const Nav = styled(Link)(() => {
  return {
    textDecoration: "none",
    color: "#555",
    margin: 0,
    fontSize: 14,
    fontWeight: 600,
    padding: "12px 0",
    transition: ".3s",

    "&:hover": {
      transition: ".3s",
      color: "#3498db",
    },
  };
});

export const SNav = styled(Link)(() => {
  return {
    padding: "6px 0",
  };
});

export const Menu = styled(Typography)(() => {
  return {
    fontWeight: 700,
    color: "#000",
    fontSize: 14,
    transition: ".3s",

    "&:hover": {
      transition: ".3s",
      color: "#3498db",
    },
  };
});
