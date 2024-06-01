import mongoose from "mongoose";

const timelineSchema = mongoose.Schema(
  {
    endDate: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    scopeName: {
      type: String,
      required: true,
    },
    mainDataID:{
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const TimelineSchema = mongoose.model("Timeline", timelineSchema);

export { TimelineSchema };
