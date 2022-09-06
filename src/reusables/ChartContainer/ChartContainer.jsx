import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Paper,
  Divider
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
          // borderBottom: 'solid grey 1px'
        }}
      >
        <Typography variant="h5" justifyContent={"center"}>
          {title}
        </Typography>
      </Box>
      <Divider /> 
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
  function drag(ev) {
    console.log(ev)
    ev.dataTransfer.setData("text", ev.target.id);
  }
  return (
    <>
      {viz.map((element, index) => {
        return (
          <Grid item key={index} draggable="true" ondragstart={(e) => drag(e)}>
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
