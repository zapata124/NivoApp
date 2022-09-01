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

const CardHover = ({ children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Card
      elevation={hovered ? 8 : 2}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Card>
  );
};
const ChartContainer = ({ viz }) => {
  return (
    <>
      {viz.map((element) => {
        return (
          <Grid item>
            <CardHover>
              {/* <CardActionArea> */}
              <CardContent>
                <Box sx={{ width: "300px", height: "300px" }}>{element}</Box>
              </CardContent>
              {/* </CardActionArea> */}
            </CardHover>
          </Grid>
        );
      })}
    </>
  );
};

export default ChartContainer;
