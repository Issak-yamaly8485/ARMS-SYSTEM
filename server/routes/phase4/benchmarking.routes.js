import express from "express";
import {
  deleteBenchmarkingElement,
  getBenchmarkingData,
  DownloadBenchmarkingFile,
  updateBenchmarkingRow,
  getBenchmarkingRow,
} from "../../controllers/CRUD.controller.js";
import upload from "../../utils/upload.js";
import {
  addBenchmarkingAnalysisData,
  addInstitutionVisitData,
} from "../../controllers/fileupload.controller.js";

//////////////////////////////////////////////
const router = express.Router();
/////////////////////////////////////////////

router.post(
  "/benchmarkingdata",
  upload.single("file"),
  addBenchmarkingAnalysisData
);

router.post(
  "/institutionvisitdata",
  upload.single("file"),
  addInstitutionVisitData
);

router.get("/download/:id", DownloadBenchmarkingFile);
router.get("/:id", getBenchmarkingRow);
router.get("/", getBenchmarkingData);


router.delete("/:id", deleteBenchmarkingElement);
router.put("/:id", updateBenchmarkingRow);

export default router;
