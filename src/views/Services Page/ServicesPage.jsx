import React from "react";
import { Box } from "@mantine/core";
import { About, PagesHeader, Services } from "../../components";

const ServicesPage = () => {
  return (
    <Box className="overflow-y-scroll overflow-x-hidden">
      <PagesHeader text={`Services`} text2={`Home / Services`} />
      <About />
      <Services />
    </Box>
  );
};

export default ServicesPage;
