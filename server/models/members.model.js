import mongoose from "mongoose";

const MembersSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    position: {
      type: String,
    },
    company: {
      type: String,
    },
    mobileno: {
      type: String,
    },
    appointment_issue_date: {
      type: String,
    },
    appointment_start_date: {
      type: String,
    },
    appointment_end_date: {
      type: String,
    },
    email: {
      type: String,
      validate: {
        validator: function (v) {
          return /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    displayName: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const NominationOfBoard = mongoose.model("NominationOfBoard", MembersSchema);
const NominationOfBoard2 = mongoose.model("NominationOfBoard2", MembersSchema);

export { NominationOfBoard, NominationOfBoard2 };
