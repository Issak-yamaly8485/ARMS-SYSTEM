import express from "express";
import {
  getAllBOFData,
  deleteBOFElement,
  DownloadBOFFile,
  updateBOFRow,
  getBOFRow,
} from "../../controllers/CRUD.controller.js";
import upload from "../../utils/upload.js";
import { isAdmin } from "../../middleware/isAdminMiddleware.js";
import {
  addAnalysisData,
  addEndorsementData,
  addNominationData,
} from "../../controllers/fileupload.controller.js";
//////////////////////////////////////////////

const router = express.Router();

/////////////////////////////////////////////
router.post("/nominationdata", upload.single("file"), addNominationData);
router.post("/endorsementdata", upload.single("file"), addEndorsementData);
router.post("/analysisdata", upload.single("file"), addAnalysisData);

router.get("/download/:id", DownloadBOFFile);
router.get("/:id", getBOFRow);
router.get("/", getAllBOFData);

router.delete("/:id", deleteBOFElement);
router.put("/:id", updateBOFRow);

export default router;
