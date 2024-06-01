import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../FormModal.css";

const FileForm = ({ route, onClose, page }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("file", file);

    fetch(`http://localhost:5000/api/bit/${page}/${route}`, {
      method: "POST",
      body: formDataObj,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          toast.error(data.message);
          return;
        }
        console.log("Success:", data);
        toast.success("Item Added Successfully");
        onClose();
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error(err?.data?.message || err.error);
      });
  };

  return (
    <form
      encType="multipart/form-data"
      className="modal-form"
      onSubmit={handleSubmit}
    >
      <br />
      <label htmlFor="file">PDF File:</label>
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
  );
};

export default FileForm;
