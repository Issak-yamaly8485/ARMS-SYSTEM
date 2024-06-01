import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  faCircleXmark,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../tableContainer/DataTable.css";
import "./FormModal.css";

import EditForm1 from "./FormTypes/EditForm1";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  maxWidth: 800,
  minWidth: 200,
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: "10px",
  boxShadow: 15,
  p: 4,
};

const EditFormModal = ({ title, route, page, rowID }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ color: "black" }} onClick={handleOpen}>
        <FontAwesomeIcon
          style={{color:"black"}}
          className="icon-button fa-lg edit-icon"
          icon={faPenToSquare}
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
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Update {title.toLowerCase()} row
            </Typography>
            <button onClick={handleClose}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>

          <Typography
            className="table-form-container"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          ></Typography>

          <EditForm1
            rowID={rowID}
            route={route}
            page={page}
            onClose={handleClose}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default EditFormModal;
