import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/users.model.js";

const isAdmin = asyncHandler(async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token)
  console.log(req.user);
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).send("Access forbidden. Admin access required.");
  }
});

export { isAdmin };
