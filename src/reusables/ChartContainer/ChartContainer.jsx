import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Paper,
} from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";

const PaperHover = ({ children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Paper
      elevation={hovered ? 8 : 2}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        sx={{
          width: "300px",
          height: "300px",
        }}
      >
        {children}
      </Box>
    </Paper>
  );
};
const ChartContainer = ({ viz }) => {
  return (
    <>
      {viz.map((element) => {
        return (
          <Grid item>
            <PaperHover>{element}</PaperHover>
          </Grid>
        );
      })}
    </>
  );
};

export default ChartContainer;
