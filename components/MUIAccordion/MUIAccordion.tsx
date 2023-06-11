import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import { Nav, Menu, SNav } from "./styled";
import * as React from "react";
import { Box } from "@mui/material";

export const MUIAccordion = () => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Menu>MENU</Menu>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
          <Nav href="/">
            <a>HOME</a>
          </Nav>
          <Accordion sx={{ boxShadow: 0 }}>
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Menu>SERVICES</Menu>
            </AccordionSummary>
            <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
              <SNav href="/how-to-start">
                <a>How to Start</a>
              </SNav>
              <SNav href="/state-license">
                <a>State License</a>
              </SNav>
              <SNav href="/training">
                <a>Training</a>
              </SNav>
              <SNav href="/interview">
                <a>Interviews</a>
              </SNav>
              <SNav href="/erm">
                <a>ERM</a>
              </SNav>
              <SNav href="/find-location">
                <a>Find Location</a>
              </SNav>
              <SNav href="/community-integration">
                <a>Community Integration</a>
              </SNav>
              <SNav href="/office-layout-setup">
                <a>Office Layout/Setup</a>
              </SNav>
              <SNav href="/website">
                <a>Website</a>
              </SNav>
              <SNav href="/appointment-request">
                <a>Appointment Request</a>
              </SNav>
              <SNav href="/billing-and-insurances">
                <a>Billing and Insurances</a>
              </SNav>
              <SNav href="/career-opportunities">
                <a>Career Opportunities</a>
              </SNav>
              <SNav href="/medication-management">
                <a>Medication Management</a>
              </SNav>
              <SNav href="/child-and-adolescent">
                <a>Child and Adolescent</a>
              </SNav>
            </AccordionDetails>
          </Accordion>
          <Nav href="/telehealth">
            <a>TELEHEALTH</a>
          </Nav>
          <Nav href="/about-us">
            <a>ABOUT US</a>
          </Nav>
          <Nav href="/contact-us">
            <a>CONTACT US</a>
          </Nav>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
