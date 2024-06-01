import express from "express";
import {
  getSelfSWOTData,
  deleteselfswotElement,
  DownloadSelfSWOTFile,
  updateSelfSWOTRow,
  getSelfSWOTRow,
} from "../../controllers/CRUD.controller.js";
import upload from "../../utils/upload.js";
import {
  addSelfReviewReportData,
  addReceiptofAssessorFeedbackReportData,
  addSubmissionOfSelfReviewReportData,
  addassessorFeedbackReportData,
} from "../../controllers/fileupload.controller.js";

//////////////////////////////////////////////
const router = express.Router();
/////////////////////////////////////////////

router.post(
  "/selfreviewreport",
  upload.single("file"),
  addSelfReviewReportData
);

router.post(
  "/submissionofselfreviewreport",
  upload.single("file"),
  addSubmissionOfSelfReviewReportData
);

router.post(
  "/assessorfeedbackreport",
  upload.single("file"),
  addassessorFeedbackReportData
);

router.post(
  "/receiptofassessorfeedback",
  upload.single("file"),
  addReceiptofAssessorFeedbackReportData
);

router.get("/download/:id", DownloadSelfSWOTFile);
router.get("/:id", getSelfSWOTRow);
router.get("/", getSelfSWOTData);

router.delete("/:id", deleteselfswotElement);
router.put("/:id", updateSelfSWOTRow);

export default router;
