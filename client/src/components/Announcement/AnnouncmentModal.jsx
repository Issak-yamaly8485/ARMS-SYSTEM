import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faSquarePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const AnnouncmentModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);

  const { userInfo } = useSelector((state) => state.auth);


  ////apply changes to form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  /////
  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("title", formData.title);
    formDataObj.append("image", file);
    formDataObj.append("content", formData.content);

    console.log(formData);
    fetch(`http://localhost:5000/api/dashboard/announcements/`, {
      method: "POST",
      body: formDataObj,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          toast.success(data.message);
          handleClose();
          return;
        }
        console.log("Success:", data);
        handleClose();
        toast.success("Item Added Successfully");
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
          backgroundColor: "#00928f",
          color: "white",
          borderRadius: 2,
          my: 2,
        }}
        onClick={handleOpen}
      >
        <FontAwesomeIcon icon={faSquarePlus} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Announcement
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <form
              className="modal-form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
              />

              <label htmlFor="email">Content</label>
              <input
                type="textarea"
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
              />

              <label htmlFor="file">Image</label>
              <input
                type="file"
                id="file"
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

export default AnnouncmentModal;
