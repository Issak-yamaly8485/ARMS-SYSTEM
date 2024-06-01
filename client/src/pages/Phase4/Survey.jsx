import React, { useEffect, useState } from "react";
import DataTable from "../../components/tableContainer/DataTable";
import "../../components/tableContainer/DataTable.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Survey = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bit/survey");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const { Alumni, Employer, Student, AnalysisReportSurvey } = data;

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/bit/survey/${id}`, {
        method: "DELETE",
      });
      toast.success("Item Deleted Successfully");
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleDownload = async (id, downloadname) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/bit/survey/download/${id}`,
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

  return (
    <>
      <h1>Survey</h1>
      <div className="board-container">
        <div className="table">
          <DataTable
            page="survey"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Alumni"
            rows={Alumni}
            route="alumnidata"
            form="Form2"
          />
        </div>
        <div className="table">
          <DataTable
            page="survey"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Employer"
            rows={Employer}
            route="employerdata"
            form="Form2"
          />
        </div>
        <div className="table">
          <DataTable
            page="survey"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Student"
            rows={Student}
            route="studentdata"
            form="Form2"
          />
        </div>
        <div className="table">
          <DataTable
            page="survey"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Analysis Report"
            rows={AnalysisReportSurvey}
            route="analysisdata"
            form="FileForm"
          />
        </div>
      </div>
    </>
  );
};

export default Survey;
