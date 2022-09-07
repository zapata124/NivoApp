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
import { motion } from "framer-motion";
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
        // elevation={hovered ? 8 : 2}
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
        fullWidth={true}
        open={open}
        onClick={() => setOpen(false)}
        BackdropProps={{ invisible: true }}
      >
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // borderBottom: 'solid grey 1px'
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>

          <Box
            sx={{
              width: "600px",
              height: "600px",
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
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
              // drag
              // dragConstraints={{
              //   top: -50,
              //   left: -50,
              //   right: 50,
              //   bottom: 50,
              // }}
            >
              <PaperHover
                title={element.type.name.substring(
                  0,
                  element.type.name.length - 5
                )}
              >
                {element}
              </PaperHover>
            </motion.div>
          </Grid>
        );
      })}
    </>
  );
};

export default ChartContainer;
