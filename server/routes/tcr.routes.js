import express from "express";
import multer from "multer";
import {
  getAllTemplates,
  getTemplateById,
  addTemplate,
  deleteTemplateById,
} from "../controllers/tcr.controller.js";

import { protect } from "../middleware/authMiddleware.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/templates");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/tcr", getAllTemplates);

router.delete("/tcr/:id", deleteTemplateById);
router.get("/tcr/:id", getTemplateById);

router.post("/tcr", upload.single("file"), addTemplate);
export default router;
