import { styled } from "@mui/material";
import Link from "next/link";

export const Button = styled("span")(() => {
  return {
    color: "white",
    textDecoration: "none",
    fontSize: 15,
    transition: ".3s",
    cursor: "pointer",

    "&:hover": {
      color: "#3498db",
    },
  };
});

export const Ul = styled("ul")(() => {
  return {
    margin: 0,
    padding: 0,
  };
});

export const Li = styled("li")(() => {
  return {
    listStyleType: "none",
    padding: "10px 0",
    borderBottom: "1px solid rgba(255,255,255,.08)",
  };
});

export const Nav = styled("a")(() => {
  return {
    display: "block",
    textDecoration: "none",
    color: "#fff",
    fontSize: 16,
    transition: ".3s",
    cursor: "pointer",

    "&:hover": {
      color: "#3498db",
    },
  };
});
