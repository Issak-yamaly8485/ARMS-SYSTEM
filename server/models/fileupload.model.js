import mongoose from "mongoose";

const InstitutionVisitSchema = mongoose.Schema(
  {
    targetDate: {
      type: String,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const FileSchema = mongoose.Schema(
  {
    file: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const EndorsmentSchema = mongoose.Schema(
  {
    targetDate: {
      type: String,
    },
    actualDate: {
      type: String,
    },
    displayName: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const FileandDateSchema = mongoose.Schema(
  {
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    targetDate: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
    displayName: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

/////////////////////////////////////////////////
////////// collection creation /////////////////
/////////////////////////////////////////////////


///////// 1 Board of studies /////////////

const EndorsementOfSenate = mongoose.model(
  "EndorsementOfSenate",
  EndorsmentSchema
);
const AnalysisReport = mongoose.model("AnalysisReport", FileSchema);
///////// 2 Internal and external assessors /////////////

const EndorsementOfSenate2 = mongoose.model(
  "EndorsementOfSenate2",
  EndorsmentSchema
);
const IssuanceOfAppointment2 = mongoose.model(
  "IssuanceOfAppointment2",
  FileandDateSchema
);
const AppointmentDuration2 = mongoose.model(
  "AppointmentDuration2",
  FileandDateSchema
);
///////////////// 3 Survey//////////////////////////

const AlumniSurvey = mongoose.model("Alumni", FileandDateSchema);
const EmployerSurvey = mongoose.model("Employer", FileandDateSchema);
const StudentSurvey = mongoose.model("Student", FileandDateSchema);
const AnalysisReportSurvey = mongoose.model("AnalysisReportSurvey", FileSchema);

/////////////// 4 Benchmarking//////////////////////////

const BenchmarkingAnalysis = mongoose.model("BenchmarkingAnalysis", FileSchema);
const InstitutionVisit = mongoose.model(
  "InstitutionVisit",
  InstitutionVisitSchema
);

////////////// 5 Program Curriculum//////////////////////

const Workshop1 = mongoose.model("Workshop1", FileandDateSchema);

const Workshop2 = mongoose.model("Workshop2", FileandDateSchema);

const Workshop3 = mongoose.model("Workshop3", FileandDateSchema);

/////////////// 6 Self-review and SWOT Analysis////////////////////

const SelfReviewReport = mongoose.model("SelfReviewReport", FileandDateSchema);

const SubmissionOfSelfReviewReport = mongoose.model(
  "SubmissionOfSelfReviewReport",
  FileandDateSchema
);

const assessorFeedbackReport = mongoose.model(
  "AssessorFeedbackReport",
  FileandDateSchema
);

const ReceiptofAssessorFeedbackReport = mongoose.model(
  "ReceiptofAssessorFeedbackReport",
  FileandDateSchema
);

///////////// 7 Curriculum Review Proposal/////////////////
const CRM_PreperationProposal = mongoose.model(
  "CRM_PreperationProposal",
  FileandDateSchema
);

const CRM_EndorsementatKulliyyah = mongoose.model(
  "CRM_EndorsementatKulliyyah",
  FileandDateSchema
);

const CRM_ReviewByKCA1 = mongoose.model("CRM_ReviewByKCA1", FileandDateSchema);

const EndorsementatAQAC_DCM = mongoose.model(
  "EndorsementatAQAC_DCM",
  FileandDateSchema
);

const RevisionofCRM = mongoose.model("RevisionofCRM", FileandDateSchema);
const CRM_ReviewByKCA2 = mongoose.model("CRM_ReviewByKCA2", FileandDateSchema);

const CRM_EndorsementatSenate = mongoose.model(
  "CRM_EndorsementatSenate",
  EndorsmentSchema
);

const CRM_Proposal = mongoose.model("CRM_Proposal", FileSchema);
////////////// 8 Dokumen Semakan/////////////////

const PreparationofDokumenSemakan = mongoose.model(
  "PreparationofDokumenSemakan",
  FileandDateSchema
);

const DokumenReviewbyKCA = mongoose.model(
  "DokumenReviewbyKCA",
  FileandDateSchema
);

const EndorsementatJKPT = mongoose.model("JKPTEndorsement", FileandDateSchema);

/////////////////////////////////////////////////
///////////////// exporting /////////////////////
/////////////////////////////////////////////////
export {
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
};
