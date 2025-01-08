import mongoose from "mongoose";

const ScheduleServiceSchema = new mongoose.Schema(
  {
    barber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Barber",
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    selectedServices: {
      type: [String],
      required: true,
    },

    scheduledTime: {
      type: String,
      required: true,
    },

    scheduledDate: {
      type: Date,
      required: true,
    },

    isScheduled: {
      type: String,
      enum: ["pending", "accepted", "completed", "cancelled"],
      default: "pending",
    },

    message: {
      type: String,
    },
    
  },
  { timestamps: true }
);

const ScheduleService = mongoose.model(
  "ScheduleService",
  ScheduleServiceSchema
);

export default ScheduleService;
