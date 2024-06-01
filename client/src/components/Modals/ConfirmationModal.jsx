import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./FormModal.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20%",
  maxWidth: 500,
  minWidth: 300,
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: "10px",
  boxShadow: 15,
  p: 4,
};

const ConfirmationModal = ({ icon, onConfirm, anonStyle }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };
  return (
    <div className={` ${anonStyle ? " anon-trash" : ""}`}>
      <Button sx={{ color: "black" }} onClick={handleOpen}>
        <FontAwesomeIcon
          style={{ color: "black" }}
          className={`icon-button trash-icon fa-lg`}
          icon={icon}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="table-title-form">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Confirmation Alert
            </Typography>
          </div>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete this item?
          </Typography>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              JustifyContent: "center",
              width: "100%",
            }}
          >
            <Button onClick={handleClose} sx={{ mt: 2 }}>
              Cancel
            </Button>
            <Button onClick={handleConfirm} sx={{ mt: 2 }}>
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
