import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../FormModal.css";

const EditForm1 = ({ route, page, onClose, rowID }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/bit/${page}/${rowID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        toast.error(err.message);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [route]);

  const handleChange = (e, key) => {
    setData({ ...data, [key]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/bit/${page}/${rowID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update data");
      }
      toast.success("row edited successfully");
      onClose();
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const inputType = {
    startDate: "date",
    endDate: "date",
    targetDate: "date",
    actualDate: "date",
    email: "email",
    appointment_issue_date: "date",
    appointment_start_date: "date",
    appointment_end_date: "date",
    comment: "text",
  };

  return (
    <form
      encType="multipart/form-data"
      className="modal-form"
      onSubmit={handleSubmit}
    >
      {Object.keys(data).map((key, index) => {
        if (key !== "_id" && key !== "displayName" && key !== "file") {
          return (
            <div key={index}>
              <label htmlFor={key}>{key}</label>
              <input
                type={inputType[key]}
                id={key}
                value={data[key]}
                onChange={(e) => handleChange(e, key)}
              />
            </div>
          );
        }
        return null;
      })}

      <input id="form-submit-button" type="submit" value="Submit" />
    </form>
  );
};

export default EditForm1;
