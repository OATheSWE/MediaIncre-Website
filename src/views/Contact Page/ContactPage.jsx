import React from "react";
import { Box } from "@mantine/core";
import { PagesHeader } from "../../components";
import Contact from "./Contact";

const ContactPage = () => {
  return (
    <Box className="w-[98.4vw] overflow-x-hidden overflow-y-scroll">
      <PagesHeader text={`Contact`} text2={`Home / Contact`} />
      <Contact />
    </Box>
  );
};

export default ContactPage;
