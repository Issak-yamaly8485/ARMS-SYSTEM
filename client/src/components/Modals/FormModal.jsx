import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { faSquarePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../tableContainer/DataTable.css";
import "./FormModal.css";

import Form1 from "./FormTypes/Form1";
import Form2 from "./FormTypes/Form2";
import Form3 from "./FormTypes/Form3";
import FileForm from "./FormTypes/FileForm";
import LocationForm from "./FormTypes/LocationForm";

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

const FormModal = ({ title, route, page, descInput, form }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function desiredForm(form) {
    switch (form) {
      case "Form1":
        return <Form1 route={route} page={page} onClose={handleClose} />;
      case "Form2":
        return (
          <Form2
            route={route}
            page={page}
            descInput={descInput}
            onClose={handleClose}
          />
        );
        case "Form3":
        return (
          <Form3
            route={route}
            page={page}
            descInput={descInput}
            onClose={handleClose}
          />
        );
        case "LocForm":
          return (
            <LocationForm
              route={route}
              page={page}
              descInput={descInput}
              onClose={handleClose}
            />
          );
      case "FileForm":
        return <FileForm route={route} page={page} onClose={handleClose} />;
      default:
        return <h1>No Form</h1>;
    }
  }

  return (
    <div>
      <Button sx={{ color: "black" }} onClick={handleOpen}>
        <FontAwesomeIcon className="icon-button add-icon" icon={faSquarePlus} />
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
              Add {title.toLowerCase()}
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
          {desiredForm(form)}
        </Box>
      </Modal>
    </div>
  );
};

export default FormModal;
