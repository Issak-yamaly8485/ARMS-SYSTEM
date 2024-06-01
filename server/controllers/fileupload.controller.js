import {
  ///////////// 1
  EndorsementOfSenate,
  AnalysisReport,
  ///////////////// 2
  EndorsementOfSenate2,
  /////////////////// 3
  AlumniSurvey,
  EmployerSurvey,
  StudentSurvey,
  AnalysisReportSurvey,
  ///////////////////// 4
  BenchmarkingAnalysis,
  InstitutionVisit,
  //////////////////// 5
  Workshop1,
  Workshop2,
  Workshop3,

  ///// 6
  SelfReviewReport,
  SubmissionOfSelfReviewReport,
  assessorFeedbackReport,
  ReceiptofAssessorFeedbackReport,

  /////7
  CRM_PreperationProposal,
  CRM_EndorsementatKulliyyah,
  CRM_ReviewByKCA1,
  EndorsementatAQAC_DCM,
  RevisionofCRM,
  CRM_ReviewByKCA2,
  CRM_EndorsementatSenate,
  CRM_Proposal,
  ///// 8
  PreparationofDokumenSemakan,
  DokumenReviewbyKCA,
  EndorsementatJKPT,
} from "../models/fileupload.model.js";

import {
  NominationOfBoard,
  NominationOfBoard2,
} from "../models/members.model.js";

import { TimelineSchema } from "../models/dashboard/timeline.model.js";

const addMembersData = async (req, res, Model, scope) => {
  try {
    const {
      name,
      company,
      mobileno,
      email,
      position,
      appointment_issue_date,
      appointment_start_date,
      appointment_end_date,
    } = req.body;
    const file = req.file;

    const newData = await Model.create({
      name,
      company,
      mobileno,
      email,
      position,
      appointment_issue_date,
      appointment_start_date,
      appointment_end_date,
      displayName: file?.originalname,
      file: file?.filename,
    });
    const newTimeline = TimelineSchema.create({
      fileName: file?.originalname,
      endDate: appointment_end_date,
      scopeName: scope,
      mainDataID: newData._id,
    });
    res.status(201).json({ newData, newTimeline });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createDocument = async (req, res, Model, scope) => {
  try {
    const { startDate, endDate, targetDate, location, actualDate, comment } =
      req.body;
    const file = req.file;
    console.log("req.body", req.body);
    console.log("file", req.file);
    const newData = await Model.create({
      startDate,
      endDate,
      targetDate,
      actualDate,
      location,
      comment: comment || "",
      displayName: file?.originalname,
      file: file?.filename,
    });
    let newTimeline;
    if (endDate && file) {
      newTimeline = TimelineSchema.create({
        fileName: file?.originalname,
        endDate,
        scopeName: scope,
        mainDataID: newData._id,
      });
    }
    if (actualDate && file) {
      newTimeline = TimelineSchema.create({
        fileName: file?.originalname,
        endDate: actualDate,
        scopeName: scope,
        mainDataID: newData._id,
      });
    }

    res.status(201).json({ newData, newTimeline });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

///////////// 1
export const addNominationData = async (req, res) => {
  await addMembersData(req, res, NominationOfBoard, "External Stakeholders");
};
export const addEndorsementData = async (req, res) => {
  await createDocument(req, res, EndorsementOfSenate, "External Stakeholders");
};
export const addAnalysisData = async (req, res) => {
  await createDocument(req, res, AnalysisReport, "External Stakeholders");
};
///////////////// 2
export const addNominationData2 = async (req, res) => {
  await addMembersData(req, res, NominationOfBoard2),
    "Internal & External Assessors";
};
export const addEndorsementData2 = async (req, res) => {
  await createDocument(
    req,
    res,
    EndorsementOfSenate2,
    "Internal & External Assessors"
  );
};

/////////////////// 3

export const addAlumniSurveyData = async (req, res) => {
  await createDocument(req, res, AlumniSurvey, "Survey");
};
export const addEmployerSurveyData = async (req, res) => {
  await createDocument(req, res, EmployerSurvey, "Survey");
};
export const addStudentSurveyData = async (req, res) => {
  await createDocument(req, res, StudentSurvey, "Survey");
};

export const addAnalysisReportData = async (req, res) => {
  await createDocument(req, res, AnalysisReportSurvey, "Survey");
};

///////////////////// 4

export const addBenchmarkingAnalysisData = async (req, res) => {
  await createDocument(req, res, BenchmarkingAnalysis, "Benchmarking");
};
export const addInstitutionVisitData = async (req, res) => {
  await createDocument(req, res, InstitutionVisit, "Benchmarking");
};
//////////////////// 5

export const addWorkshop1Data = async (req, res) => {
  await createDocument(req, res, Workshop1, "Programme Curriculum");
};
export const addWorkshop2Data = async (req, res) => {
  await createDocument(req, res, Workshop2, "Programme Curriculum");
};
export const addWorkshop3Data = async (req, res) => {
  await createDocument(req, res, Workshop3, "Programme Curriculum");
};
///// 6

export const addSelfReviewReportData = async (req, res) => {
  await createDocument(
    req,
    res,
    SelfReviewReport,
    "Self-review and SWOT Analysis"
  );
};
export const addSubmissionOfSelfReviewReportData = async (req, res) => {
  await createDocument(
    req,
    res,
    SubmissionOfSelfReviewReport,
    "Self-review and SWOT Analysis"
  );
};
export const addassessorFeedbackReportData = async (req, res) => {
  await createDocument(
    req,
    res,
    assessorFeedbackReport,
    "Self-review and SWOT Analysis"
  );
};
export const addReceiptofAssessorFeedbackReportData = async (req, res) => {
  await createDocument(
    req,
    res,
    ReceiptofAssessorFeedbackReport,
    "Self-review and SWOT Analysis"
  );
};
/////7
export const addCRM_PreperationProposalData = async (req, res) => {
  await createDocument(
    req,
    res,
    CRM_PreperationProposal,
    "Curriculum Review Proposal"
  );
};
export const addCRM_EndorsementatKulliyyahData = async (req, res) => {
  await createDocument(
    req,
    res,
    CRM_EndorsementatKulliyyah,
    "Curriculum Review Proposal"
  );
};
export const addCRM_ReviewByKCA1Data = async (req, res) => {
  await createDocument(
    req,
    res,
    CRM_ReviewByKCA1,
    "Curriculum Review Proposal"
  );
};
export const addEndorsementatAQAC_DCMData = async (req, res) => {
  await createDocument(
    req,
    res,
    EndorsementatAQAC_DCM,
    "Curriculum Review Proposal"
  );
};
export const addRevisionofCRMData = async (req, res) => {
  await createDocument(req, res, RevisionofCRM, "Curriculum Review Proposal");
};

export const addCRM_ReviewByKCA2Data = async (req, res) => {
  await createDocument(
    req,
    res,
    CRM_ReviewByKCA2,
    "Curriculum Review Proposal"
  );
};
export const addCRM_EndorsementatSenateData = async (req, res) => {
  await createDocument(
    req,
    res,
    CRM_EndorsementatSenate,
    "Curriculum Review Proposal"
  );
};
export const addCRM_ProposalData = async (req, res) => {
  await createDocument(req, res, CRM_Proposal, "Curriculum Review Proposal");
};

///// 8
export const addPreparationofDokumenSemakan = async (req, res) => {
  await createDocument(
    req,
    res,
    PreparationofDokumenSemakan,
    "Dokumen Semakan"
  );
};

export const addDokumenReviewbyKCA = async (req, res) => {
  await createDocument(req, res, DokumenReviewbyKCA, "Dokumen Semakan");
};

export const addEndorsementatJKPT = async (req, res) => {
  await createDocument(req, res, EndorsementatJKPT, "Dokumen Semakan");
};
