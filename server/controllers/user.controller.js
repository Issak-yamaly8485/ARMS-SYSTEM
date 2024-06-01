import asyncHandler from "express-async-handler";
import User from "../models/users.model.js";
import generateToken from "../utils/generateToken.js";
import fs from "fs";
// AUTH-- POST /api/users/auth
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      country: user.country,
      role: user.role,
      maritalStatus: user.maritalStatus,
      identityCardOrPassportNo: user.identityCardOrPassportNo,
      gender: user.gender,
      address: user.address,
      birthday: user.birthday,
      religion: user.religion,
      mobile: user.mobile,
      profilePic: user.profilePic,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
// AUTH-- POST /api/users/register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    country: "",
    maritalStatus: "unspecified",
    identityCardOrPassportNo: "",
    gender: "unspecified",
    address: "",
    birthday: "",
    religion: "",
    mobile: "",
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      country: user.country,
      maritalStatus: user.maritalStatus,
      identityCardOrPassportNo: user.identityCardOrPassportNo,
      gender: user.gender,
      address: user.address,
      birthday: user.birthday,
      religion: user.religion,
      mobile: user.mobile,
      role: user.role,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// AUTH-- POST /api/users/auth
const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

// AUTH-- get /api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      country: user.country,
      maritalStatus: user.maritalStatus,
      identityCardOrPassportNo: user.identityCardOrPassportNo,
      gender: user.gender,
      address: user.address,
      birthday: user.birthday,
      religion: user.religion,
      mobile: user.mobile,
      profilePic: user.profilePic,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// AUTH-- put /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body._id);

  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  if (req.file) {
    // Handle profile picture upload
    user.profilePic = req.file.path;
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.country = req.body.country || user.country;
  user.maritalStatus = req.body.maritalStatus || user.maritalStatus;
  user.identityCardOrPassportNo =
    req.body.identityCardOrPassportNo || user.identityCardOrPassportNo;
  user.gender = req.body.gender || user.gender;
  user.address = req.body.address || user.address;
  user.birthday = req.body.birthday || user.birthday;
  user.religion = req.body.religion || user.religion;
  user.mobile = req.body.mobile || user.mobile;

  try {
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      country: updatedUser.country,
      maritalStatus: updatedUser.maritalStatus,
      identityCardOrPassportNo: updatedUser.identityCardOrPassportNo,
      gender: updatedUser.gender,
      address: updatedUser.address,
      birthday: updatedUser.birthday,
      religion: updatedUser.religion,
      mobile: updatedUser.mobile,
      profilePic: user.profilePic,
    });
  } catch (error) {
    res.status(500).json({ error: "Could not update user profile" });
  }
});

const updateUserProfileImage = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (req.file) {
      // If user has an existing profile picture, delete it
      if (user.profilePic) {
        fs.unlinkSync(user.profilePic);
      }

      // Handle profile picture upload
      user.profilePic = req.file.path;

      // Save the updated user object
      await user.save();

      return res.json({
        message: "Profile picture updated successfully",
        profilePic: user.profilePic,
      });
    } else {
      return res.status(400).json({ error: "No file uploaded" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Could not update profile picture" });
  }
});

const getAdmins = asyncHandler(async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" });
    res.json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: errorMessage });
  }
});

const deleteAdminById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

const addAdmin = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Create a new user
    const user = await User.create({
      name,
      email,
      password, // Remember to hash the password before saving it
      role: "admin",
      country: "",
      maritalStatus: "unspecified",
      identityCardOrPassportNo: "",
      gender: "unspecified",
      address: "",
      birthday: "",
      religion: "",
      mobile: "",
    });

    res.status(201).json({ message: "Admin created successfully", user });
  } catch (error) {
    console.error("Error adding admin:", error);
    res.status(500).json({ message: "Failed to add admin" });
  }
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAdmins,
  deleteAdminById,
  addAdmin,
  updateUserProfileImage,
};
