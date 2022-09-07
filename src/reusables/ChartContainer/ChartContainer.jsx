import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Paper,
  Divider,
  Dialog,
  DialogContent,
} from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";

const PaperHover = ({ children, title }) => {
  const [hovered, setHovered] = React.useState(false);
  const [dimensions, setDimensions] = React.useState("300px");
  const [open, setOpen] = React.useState(false);
  const handleDimensions = () => {
    if (dimensions === "300px") return setDimensions("50vh");
    else setDimensions("300px");
  };
  return (
    <>
      <Paper
        elevation={hovered ? 8 : 2}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(true)}
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
          onClick={handleDimensions}
        >
          {children}
        </Box>
      </Paper>
      <Dialog
        open={open}
        onClick={() => setOpen(false)}
        BackdropProps={{ invisible: true }}
      >
        <DialogContent
        // sx={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   // borderBottom: 'solid grey 1px'
        // }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // borderBottom: 'solid grey 1px'
            }}
          ></Box>
          <Box
            sx={{
              width: "500px",
              height: "500px",
            }}
            onClick={handleDimensions}
          >
            {children}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};
const ChartContainer = ({ viz }) => {
  function drag(ev) {
    console.log(ev);
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
