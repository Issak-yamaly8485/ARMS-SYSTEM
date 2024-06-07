import mongoose from "mongoose";

const FileSchema = mongoose.Schema(
  {
    templateName: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    filesize: {
        type: String,
        required: true,
      },
    displayName: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
const tcrTemplate = mongoose.model("tcrTemplate", FileSchema);

export { tcrTemplate };
