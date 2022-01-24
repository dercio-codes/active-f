import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import SecondarySectionHeader from "../SecondarySectionHeader";
import Checkout from "./Checkout"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "80vw",
  overflow:'scroll',
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function YearOfMyLifeForm() {
  const [formFields, setFormFields] = React.useState({
    amount: "",
    email: "",
    reference: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFormFields({
      ...formFields,
      [e.target.name]: value,
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Year of My Life
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          overflow:'scroll'
        }}
      >
          <Checkout />
      </Modal>
    </div>
  );
}
