import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { Container, Wrapper, Nav, WrapperMenu, WrapperSidebar } from "./styled";
import { BASE_NAV } from "./constants";
import { MUIAccordion } from "../../../MUIAccordion/MUIAccordion";
import Link from "next/link";
import { Services } from "../../../Services/Services";
import { Sidebar } from "../../../../otherPages/home/Sidebar/Sidebar";

export const LayoutNavHed: FC = () => {
  const [active, setActive] = useState("/");
  const [location, setLocation] = useState("/");
  const router = useRouter();
  const currentPath = router.pathname;
  const [display, setDisplay] = useState<number>(0);

  const handleNavClick = (link: string) => {
    setActive(link);
    setLocation(router.pathname);
  };

  useEffect(() => {
    const handleResize = () => {
      setDisplay(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setDisplay(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <WrapperMenu>
            <MUIAccordion />
          </WrapperMenu>
          {BASE_NAV.map((link, index) => (
            <Box sx={{ display: "inline-block" }} key={index}>
              {link.name === "SERVICES" ? (
                <Services />
              ) : (
                <Link href={link.path} passHref>
                  <Nav
                    onClick={() => handleNavClick(link.path)}
                    style={{
                      color: currentPath === link.path ? "#3498db" : "white",
                      transition: ".3s",
                      marginRight: "20px",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    {link.name}
                  </Nav>
                </Link>
              )}
            </Box>
          ))}
        </Box>
        <WrapperSidebar>
          <Sidebar />
        </WrapperSidebar>
      </Wrapper>
    </Container>
  );
};