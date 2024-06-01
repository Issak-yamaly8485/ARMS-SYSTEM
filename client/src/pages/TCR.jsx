import { useEffect, useState } from "react";
import "../layout/TCR.css";
import React from "react";
import DataTable from "../components/tableContainer/DataTable";
import { useLocation } from "react-router-dom";

const TCR = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const route = useLocation();
  const { pathname } = route;
  const location = pathname.split("/").slice(1).toString().toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assessorsResponse = await fetch(
          "http://localhost:5000/api/bit/assessors"
        );
        if (!assessorsResponse.ok) {
          throw new Error("Failed to fetch assessors data");
        }
        const assessorsData = await assessorsResponse.json();

        const programCurriculumResponse = await fetch(
          "http://localhost:5000/api/bit/programcurriculum"
        );
        if (!programCurriculumResponse.ok) {
          throw new Error("Failed to fetch program curriculum data");
        }
        const programCurriculumData = await programCurriculumResponse.json();

        const selfSwotResponse = await fetch(
          "http://localhost:5000/api/bit/selfswot"
        );
        if (!selfSwotResponse.ok) {
          throw new Error("Failed to fetch self SWOT data");
        }
        const selfSwotData = await selfSwotResponse.json();

        const crmResponse = await fetch("http://localhost:5000/api/bit/crm");
        if (!crmResponse.ok) {
          throw new Error("Failed to fetch CRM data");
        }
        const crmData = await crmResponse.json();

        setData({
          assessorsData,
          programCurriculumData,
          selfSwotData,
          crmData,
        });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }



  const { assessorsData, programCurriculumData, selfSwotData, crmData } = data;

  return (
    <>
      <h1>Template Curriculum Review</h1>
      <div className="tcr-container">
        {/* ///////////////////////////////////// */}
        <DataTable
          page="assessors"
          title="Scope 2: Feedback Report"
          rows={assessorsData.EndorsementOfSenate2}
          route="workshop1"
          descInput={true}
          form="Form3"
        />
        {/* ///////////////////////////////////// */}
        <DataTable
          page="programcurriculum"
          title="Scope 5: Workshop 1"
          rows={programCurriculumData.Workshop1}
          route="workshop1"
          descInput={true}
          form="Form2"
        />
        <DataTable
          page="programcurriculum"
          title="Scope 5: Workshop 2"
          rows={programCurriculumData.Workshop2}
          route="workshop2"
          descInput={true}
          form="Form2"
        />
        <DataTable
          page="programcurriculum"
          title="Scope 5: Workshop 3"
          rows={programCurriculumData.Workshop3}
          route="workshop3"
          descInput={true}
          form="Form2"
        />
        {/* ///////////////////////////////////// */}
        <DataTable
          page="selfswot"
          title=" Scope 6: Preparation of self-review report"
          rows={selfSwotData.SelfReviewReport}
          route="workshop1"
          descInput={true}
          form="Form2"
        />
        <DataTable
          page="selfswot"
          title="Scope 6: Preparation of SWOT analysis"
          rows={selfSwotData.SubmissionOfSelfReviewReport}
          route="workshop1"
          descInput={true}
          form="Form2"
        />
        <DataTable
          page="selfswot"
          title="Scope 6: Submission of self-review report to assessor"
          rows={selfSwotData.AssessorFeedbackReport}
          route="workshop1"
          descInput={true}
          form="Form2"
        />
        <DataTable
          page="selfswot"
          title="Scope 6: Receipt of assessor feedback report"
          rows={selfSwotData.ReceiptofAssessorFeedbackReport}
          route="workshop1"
          descInput={true}
          form="Form2"
        />
        {/* ///////////////////////////////////// */}
        <DataTable
          page="crm"
          title="Scope 7: CRM_Endorsement at Kulliyyah"
          rows={crmData.CRM_EndorsementatKulliyyah}
          route="workshop1"
          descInput={true}
          form="Form2"
        />
        <DataTable
          page="crm"
          title="Scope 7: Endorsementat Senate"
          rows={crmData.CRM_EndorsementatSenate}
          route="workshop1"
          descInput={true}
          form="Form3"
        />
        <DataTable
          page="crm"
          title="Scope 7: Preperation Proposal"
          rows={crmData.CRM_PreperationProposal}
          route="workshop1"
          descInput={true}
          form="FileForm"
        />
        <DataTable
          page="crm"
          title="Scope 7: CRM Report"
          rows={crmData.CRM_Proposal}
          route="workshop1"
          descInput={true}
          form="Form2"
        />
        <DataTable
          page="crm"
          title="Scope 7: Review By KCA1"
          rows={crmData.CRM_ReviewByKCA1}
          route="workshop1"
          descInput={true}
          form="Form2"
        />
        <DataTable
          page="crm"
          title="Scope 7: Review By KCA2"
          rows={crmData.CRM_ReviewByKCA2}
          route="workshop1"
          descInput={true}
          form="Form2"
        />
        <DataTable
          page="crm"
          title="Scope 7: Endorsementat AQAC DCM"
          rows={crmData.EndorsementatAQAC_DCM}
          route="workshop1"
          descInput={true}
          form="Form2"
        />
        <DataTable
          page="crm"
          title="Scope 7: Revision of CRM"
          rows={crmData.RevisionofCRM}
          route="workshop1"
          descInput={true}
          form="Form2"
        />
      </div>
    </>
  );
};

export default TCR;
