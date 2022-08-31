import React from "react";
import { Box, Grid, Card } from "@mui/material";

const ChartContainer = ({ viz }) => {
  return (
    <>
      {viz.map((element) => {
        return (
          <Grid item>
            <Card>
              <Box sx={{ width: "300px", height: "300px" }}>{element}</Box>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default ChartContainer;
