import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  width: "90%",
  height: "70vh",
  backgroundImage: "url('/images/Collage.jpg')",
  backgroundSize: "contain",
  display: "flex",
  jusftifyContent: "space-between",
  alignItems: "center",
};

export default function VideoPlayer({ videoImage, index }) {
  const currentTestimonies = [
    "/videos/Tevin-Testimony.mp4",
    "/videos/Kenny_1.MOV",
  ];
  const [currentIndex, setCurrentIndex] = useState(index);
  console.log(index,"index")
  console.log(currentIndex,"current")
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function Decrement() {
    if (currentIndex > 0) {
      setCurrentIndex((currentIndex) => currentIndex - 1);
      console.log(currentIndex);
    } else {
      setCurrentIndex(0);
    }
  }

  function Increment() {
    if (currentIndex < currentTestimonies.length - 1) {
      setCurrentIndex((currentIndex) => currentIndex + 1);
      console.log(currentIndex);
    }
  }

  function Video({ currentIndex }) {
    return (
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0,0,0,.8)",
        }}
      >
        <SkipPreviousIcon
          sx={{
            cursor: "pointer",
            height: 80,
            width: 50,
            color: "white",
          }}
          onClick={() => {
            Decrement();
          }}
        >
          Previous
        </SkipPreviousIcon>
        <video
          autoPlay
          style={{
            width: "100%",
            height: "100%",
          }}
          onEnded={() => {
            if (currentIndex < currentTestimonies.length - 1) {
              setCurrentIndex((currentIndex) => currentIndex + 1);
            } else if (currentIndex == currentTestimonies.length - 1) {
              setCurrentIndex(0);
            }
          }}
        >
          <source src={currentTestimonies[currentIndex]} />
        </video>
        <SkipNextIcon
          sx={{
            cursor: "pointer",
            height: 80,
            width: 50,
            color: "white",
          }}
          onClick={() => {
            Increment();
          }}
        ></SkipNextIcon>
      </Box>
    );
  }
  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          width: "100%",
          height: 150,
          backgroundImage: `url(${videoImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style}>

          <Video currentIndex={currentIndex} />

        </Box>
      </Modal>
    </div>
  );
}
