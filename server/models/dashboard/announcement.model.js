import express from "express";
import mongoose from "mongoose";

const announcementSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const AnnouncementSchema = mongoose.model("Announcement", announcementSchema);

export { AnnouncementSchema };
