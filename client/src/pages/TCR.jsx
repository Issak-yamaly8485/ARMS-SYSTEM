import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import { faTrash, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ConfirmationModal from "../components/Modals/ConfirmationModal";
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

const TCR = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { userInfo } = useSelector((state) => state.auth);
  const [file, setFile] = useState(null);

  const [templates, setTemplates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    templateName: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tcrData = await fetch("http://localhost:5000/api/tcr");
        if (!tcrData.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await tcrData.json();
        setTemplates(jsonData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [templates]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const isAdmin = () => {
    return userInfo.role === "admin" || userInfo.role === "superadmin";
  };

  const handleSubmit = (e) => {
    const formDataObj = new FormData();
    formDataObj.append("file", file);
    formDataObj.append("templateName", formData.templateName);
    e.preventDefault();
    fetch(`http://localhost:5000/api/tcr`, {
      method: "POST",

      body: formDataObj,
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Template Created Successfully");
        handleClose();
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error(err?.data?.message || err.error);
      });
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDownload = async (id, downloadname) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/tcr/${id}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const filename = downloadname;
        const blob = await response.blob();
        const link = document.createElement("a");

        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.click();

        toast.success("File downloaded successfully");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || response.statusText);
      }
    } catch (error) {
      console.error("Error downloading file:", error);
      toast.error("An error occurred while downloading the file");
    }
  };

  async function handleDeleteTemplate(id) {
    try {
      const response = await fetch(`http://localhost:5000/api/tcr/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        toast.error("Failed to delete template");
        throw new Error("Failed to delete Template");
      }
      toast.success("template deleted successfully");
    } catch (error) {
      console.error("Error deleting template:", error);
      toast.error(error.message);
    }
  }

  return (
    <div>
      {isAdmin() && (
        <>
          {" "}
          <Button
            sx={{
              backgroundColor: "#00928f",
              color: "white",
              borderRadius: 2,
              my: 2,
            }}
            onClick={handleOpen}
          >
            Add Template
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add New Template
              </Typography>
              <Box id="modal-modal-description" sx={{ mt: 2 }}>
                <form
                  encType="multipart/form-data"
                  className="modal-form"
                  onSubmit={handleSubmit}
                >
                  <label htmlFor="templateName">Template Name</label>
                  <input
                    id="name"
                    name="templateName"
                    type="text"
                    value={formData.templateName}
                    onChange={handleChange}
                  />

                  <label htmlFor="file">Template File:</label>
                  <br />
                  <input
                    type="file"
                    accept=".doc,.docx,.pdf"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                  />
                  <br />

                  <input id="form-submit-button" type="submit" value="Submit" />
                </form>
              </Box>
            </Box>
          </Modal>
        </>
      )}

      <TableContainer>
        <Table component={Paper} size="small" sx={{ borderRadius: "10px" }}>
          <TableHead sx={{ backgroundColor: "#00928f", borderRadius: "10px" }}>
            <TableRow>
              <TableCell align="center">Download</TableCell>

              <TableCell align="center">Template Name</TableCell>
              <TableCell align="center">File Name</TableCell>
              <TableCell align="center">File size</TableCell>
              <TableCell align="center">Uploaded At</TableCell>
              {isAdmin() && <TableCell align="center">Delete</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {templates.map((row) => (
              <TableRow key={row._id}>
                <TableCell align="center">
                  {" "}
                  <FontAwesomeIcon
                    onClick={() => {
                      handleDownload(row._id, row.displayName);
                    }}
                    className="icon-button fa-lg edit-icon"
                    icon={faDownload}
                  />
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.templateName}
                </TableCell>
                <TableCell align="center">{row.displayName}</TableCell>
                <TableCell align="center">{row.filesize}</TableCell>
                <TableCell align="center">
                  {row.createdAt.split("T")[0]}
                </TableCell>

                {isAdmin() && (
                  <TableCell align="center">
                    <ConfirmationModal
                      icon={faTrash}
                      onConfirm={() => {
                        handleDeleteTemplate(row._id);
                      }}
                    />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TCR;
