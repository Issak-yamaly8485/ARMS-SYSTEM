import express from "express";
import {
  getProgrammeCurriculumData,
  deleteProgrammeCurriculumElement,
  DownloadProgrammeCurriculumFile,
  updateProgrammeCurriculumRow,
  getProgrammeCurriculumRow,
} from "../../controllers/CRUD.controller.js";
import upload from "../../utils/upload.js";
import {
  addWorkshop1Data,
  addWorkshop2Data,
  addWorkshop3Data,
} from "../../controllers/fileupload.controller.js";

//////////////////////////////////////////////
const router = express.Router();
/////////////////////////////////////////////

router.post("/workshop1", upload.single("file"), addWorkshop1Data);
router.post("/workshop2", upload.single("file"), addWorkshop2Data);
router.post("/workshop3", upload.single("file"), addWorkshop3Data);


router.get("/download/:id", DownloadProgrammeCurriculumFile);
router.get("/:id", getProgrammeCurriculumRow);
router.get("/", getProgrammeCurriculumData);


router.put("/:id", updateProgrammeCurriculumRow);
router.delete("/:id", deleteProgrammeCurriculumElement);
export default router;
