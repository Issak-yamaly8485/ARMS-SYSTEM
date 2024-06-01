import express from "express";
import {
  getSurveyData,
  deletesurveyElement,
  DownloadSurveyFile,
  updateSelfSWOTRow,
  getSurveyRow,
} from "../../controllers/CRUD.controller.js";

import {
  addAlumniSurveyData,
  addEmployerSurveyData,
  addStudentSurveyData,
  addAnalysisReportData,
} from "../../controllers/fileupload.controller.js";
import upload from "../../utils/upload.js";

//////////////////////////////////////////////
const router = express.Router();
/////////////////////////////////////////////

router.post("/alumnidata", upload.single("file"), addAlumniSurveyData);

router.post("/employerdata", upload.single("file"), addEmployerSurveyData);

router.post("/studentdata", upload.single("file"), addStudentSurveyData);

router.post("/analysisdata", upload.single("file"), addAnalysisReportData);

router.get("/download/:id", DownloadSurveyFile);
router.get("/:id", getSurveyRow);
router.get("/", getSurveyData);

router.delete("/:id", deletesurveyElement);
router.put("/:id", updateSelfSWOTRow);

export default router;
