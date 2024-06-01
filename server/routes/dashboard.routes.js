import express from "express";
import multer from "multer";
import {
  addAnnouncement,
  deleteAnnouncementById,
  getAllAnnouncements,
  getAllTimeline,
} from "../controllers/dashboard.controllers.js";
const router = express.Router();

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Route to add a new announcement with image upload
router.post("/announcements", upload.single("image"), addAnnouncement);
router.get("/announcements", getAllAnnouncements);
router.delete("/announcements/:id", deleteAnnouncementById);

router.get("/timeline", getAllTimeline);

export default router;
