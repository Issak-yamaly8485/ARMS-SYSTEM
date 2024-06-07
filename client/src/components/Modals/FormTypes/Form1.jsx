import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../FormModal.css";
const Form1 = ({ route, onClose, page }) => {
  const [formData, setFormData] = useState({});

  const [file, setFile] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataObj = new FormData();

    formDataObj.append("name", formData.name);
    formDataObj.append("position", formData.position);
    formDataObj.append("company", formData.company);
    formDataObj.append("mobileno", formData.mobileno);
    formDataObj.append("email", formData.email);
    formDataObj.append(
      "appointment_issue_date",
      formData.appointment_issue_date
    );
    formDataObj.append(
      "appointment_start_date",
      formData.appointment_start_date
    );
    formDataObj.append("appointment_end_date", formData.appointment_end_date);

    formDataObj.append("file", file); // Append selected file
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
      <label htmlFor="name">Name:</label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <br />
      <label htmlFor="position">Position:</label>
      <br />
      <input
        type="text"
        id="position"
        name="position"
        value={formData.position}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="company">Company/Institution:</label>
      <br />
      <input
        type="text"
        id="company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        a
      />
      <br />
      <label htmlFor="mobileno">Mobile No:</label>
      <br />
      <input
        type="text"
        id="mobileno"
        name="mobileno"
        value={formData.mobileno}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Appointment issue date:</label>
      <br />
      <input
        type="date"
        id="appointment_issue_date"
        name="appointment_issue_date"
        value={formData.appointment_issue_date}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Appointment start date:</label>
      <br />
      <input
        type="date"
        id="appointment_start_date"
        name="appointment_start_date"
        value={formData.appointment_start_date}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Appointment end date:</label>
      <br />
      <input
        type="date"
        id="appointment_end_date"
        name="appointment_end_date"
        value={formData.appointment_end_date}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="file">Upload CV:</label>
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

export default Form1;
