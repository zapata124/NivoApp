import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Paper,
} from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";

const PaperHover = ({ children, title }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Paper
      elevation={hovered ? 8 : 2}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" justifyContent={"center"}>
          {title}
        </Typography>
      </Box>
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
      {viz.map((element, index) => {
        console.log(element);
        return (
          <Grid item key={index}>
            <PaperHover
              title={element.type.name.substring(
                0,
                element.type.name.length - 5
              )}
            >
              {element}
            </PaperHover>
          </Grid>
        );
      })}
    </>
  );
};

export default ChartContainer;
