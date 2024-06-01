import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faCamera, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Account.css";
import Paper from "@mui/material/Paper";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

const AccountModal = ({ id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [file, setFile] = useState(null);

  ////apply changes to form
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  /////
  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("profilePic", file);

    fetch(`http://localhost:5000/api/users/image/${id}`, {
      method: "PUT",
      body: formDataObj,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          toast.success(data.message);
          toast.success("Please Click Update Info to change");
          handleClose();
          return;
        }
        console.log("Success:", data);
        handleClose();
        toast.success("Picture Updated Successfully");
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error(err?.data?.message || err.error);
      });
  };

  return (
    <div>
      <Button
        sx={{
          backgroundColor: "transparent",
          color: "white",
          borderRadius: 2,
          my: 2,
        }}
        onClick={handleOpen}
      >
        <FontAwesomeIcon className="fa-2xl" icon={faCamera} />
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
              Change Profile Pic
            </Typography>
            <button onClick={handleClose}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>

          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <form
              className="modal-form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <label htmlFor="file">Image</label>
              <input
                className="image-input"
                type="file"
                id="image-input"
                name="file"
                onChange={handleFileChange}
              />

              <input id="form-submit-button" type="submit" value="Submit" />
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AccountModal;
