import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import { Menu } from "./styled";
import * as React from "react";
import { Box } from "@mui/material";
import Link from "next/link";

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
          <Link href="/">HOME</Link>
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
              <Link href="/how-to-start">How to Start</Link>
              <Link href="/state-license">State License</Link>
              <Link href="/training">Training</Link>
              <Link href="/interview">Interviews</Link>
              <Link href="/erm">ERM</Link>
              <Link href="/find-location">Find Location</Link>
              <Link href="/community-integration">Community Integration</Link>
              <Link href="/office-layout-setup">Office Layout/Setup</Link>
              <Link href="/website">Website</Link>
              <Link href="/appointment-request">Appointment Request</Link>
              <Link href="/billing-and-insurances">Billing and Insurances</Link>
              <Link href="/career-opportunities">Career Opportunities</Link>
              <Link href="/medication-management">Medication Management</Link>
              <Link href="/child-and-adolescent">Child and Adolescent</Link>
            </AccordionDetails>
          </Accordion>
          <Link href="/telehealth">TELEHEALTH</Link>
          <Link href="/about-us">ABOUT US</Link>
          <Link href="/contact-us">CONTACT US</Link>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
