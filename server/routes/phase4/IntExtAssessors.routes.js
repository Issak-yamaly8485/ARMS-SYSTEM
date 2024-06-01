import express from "express";
import {
  getAssessorsData,
  deleteAssessorsElement,
  DownloadAssessorsFile,
  updateAssessorsRow,
  getAssessorsRow,
} from "../../controllers/CRUD.controller.js";
import upload from "../../utils/upload.js";

import {
  addEndorsementData2,
  addNominationData2,
} from "../../controllers/fileupload.controller.js";
//////////////////////////////////////////////

const router = express.Router();

/////////////////////////////////////////////
router.post("/nominationdata",upload.single("file"), addNominationData2);

router.post("/endorsementdata", upload.single("file"), addEndorsementData2);

router.get("/download/:id", DownloadAssessorsFile);
router.get("/:id", getAssessorsRow);
router.get("/", getAssessorsData);

router.delete("/:id", deleteAssessorsElement);
router.put("/:id", updateAssessorsRow);

export default router;
