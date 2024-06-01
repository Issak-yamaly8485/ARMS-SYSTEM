import express from "express";
import {
  getDokumenSemakanData,
  deleteDokumenSemakanElement,
  DownloadDokumenSemakanFile,
  updatedokumenSemakanRow,
  getdokumenSemakanRow
  ////////////
} from "../../controllers/CRUD.controller.js";

import {
  addPreparationofDokumenSemakan,
  addDokumenReviewbyKCA,
  addEndorsementatJKPT,
} from "../../controllers/fileupload.controller.js";
import upload from "../../utils/upload.js";

//////////////////////////////////////////////
const router = express.Router();
/////////////////////////////////////////////

router.post(
  "/preparationofdokumensemakan",
  upload.single("file"),
  addPreparationofDokumenSemakan
);

router.post("/reviewbykca", upload.single("file"), addDokumenReviewbyKCA);

router.post("/endorsementatjkpt", upload.single("file"), addEndorsementatJKPT);

router.get("/download/:id", DownloadDokumenSemakanFile);
router.get("/:id", getdokumenSemakanRow);
router.get("/", getDokumenSemakanData);


router.delete("/:id", deleteDokumenSemakanElement);
router.put("/:id", updatedokumenSemakanRow);

export default router;
