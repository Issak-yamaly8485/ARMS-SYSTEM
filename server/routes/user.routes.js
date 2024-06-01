import express from "express";
import multer from "multer";

import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAdmins,
  deleteAdminById,
  addAdmin,
  updateUserProfileImage,
} from "../controllers/user.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/profilepics");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", logoutUser);
router.post("/addadmin", addAdmin);

router.get("/profile", getUserProfile);
router.get("/admins", getAdmins);

router.put("/profile", upload.single("profilePic"), updateUserProfile);
router.put("/image/:id", upload.single("profilePic"), updateUserProfileImage);

router.delete("/admins/:id", deleteAdminById);

export default router;
