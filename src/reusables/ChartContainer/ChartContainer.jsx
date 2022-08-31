import React from "react";
import { Box, Container } from "@mui/material";

const ChartContainer = ({ children }) => {
  return <Box sx={{ width: '300px', height: '300px' }}>{children}</Box>;
};

export default ChartContainer;
