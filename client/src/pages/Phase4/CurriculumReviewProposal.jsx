import React, { useEffect, useState } from "react";
import DataTable from "../../components/tableContainer/DataTable";
import "../../components/tableContainer/DataTable.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CurriculumReviewProposal = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bit/crm");
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
  const {
    CRM_PreperationProposal,
    CRM_EndorsementatKulliyyah,
    CRM_ReviewByKCA1,
    EndorsementatAQAC_DCM,
    RevisionofCRM,
    CRM_ReviewByKCA2,
    CRM_EndorsementatSenate,
    CRM_Proposal
  } = data;

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/bit/crm/${id}`, {
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
        `http://localhost:5000/api/bit/crm/download/${id}`,
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
      <h1>Curriculum Review Proposal</h1>
      <div className="board-container">
        <div className="table">
          <DataTable
            page="crm"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Preparation of curriculum review proposal"
            rows={CRM_PreperationProposal}
            route="preparationproposal"
            form="Form2"
          />
        </div>
        <div className="table">
          <DataTable
            page="crm"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Endorsement at Kulliyyah (Department, KEM, KBM)"
            rows={CRM_EndorsementatKulliyyah}
            route="endorsmentatkulliyah"
            form="Form2"
          />
        </div>
        <div className="table">
          <DataTable
            page="crm"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Review by KCA 1"
            rows={CRM_ReviewByKCA1}
            route="kca1"
            form="Form2"
          />
        </div>
        <div className="table">
          <DataTable
            page="crm"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Endorsement at AQAC/DCM"
            rows={EndorsementatAQAC_DCM}
            route="aqacdcm"
            form="Form2"
          />
        </div>
        <div className="table">
          <DataTable
            page="crm"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Revision of curriculum review proposal with course outlines and course plans"
            rows={RevisionofCRM}
            route="revisionofcrm"
            form="Form2"
          />
        </div>
        <div className="table">
          <DataTable
            page="crm"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Review by KCA 2"
            rows={CRM_ReviewByKCA2}
            route="kca2"
            form="Form2"
          />
        </div>
        <div className="table">
          <DataTable
            page="crm"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Endorsement in Senate"
            rows={CRM_EndorsementatSenate}
            route="endorsementatsenate"
            form="Form3"
          />
        </div>
        <div className="table">
          <DataTable
            page="crm"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Endorsed Proposal"
            rows={CRM_Proposal}
            route="proposal"
            form="FileForm"
          />
        </div>
      </div>
    </>
  );
};

export default CurriculumReviewProposal;
