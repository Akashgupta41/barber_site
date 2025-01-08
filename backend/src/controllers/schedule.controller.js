import Barber from "../models/barber.model.js";
import ScheduleService from "../models/scheduleservice.model.js";
import User from "../models/user.model.js";

export const scheduleService = async (req, res) => {
  const { _barberId } = req.params;
  const userId = req.user._id;
  const { selectedServices, scheduledTime, scheduledDate, message } = req.body;

  try {
    const barber = await Barber.findById(_barberId);
    const user = await User.findById(userId);

    console.log(barber, user);

    if (!barber || !user) {
      return res.status(404).json({ message: "Barber or User not found" });
    }

    const newSchedule = new ScheduleService({
      barber: _barberId,
      user: userId,
      selectedServices,
      scheduledTime,
      scheduledDate,
      message,
    });

    await newSchedule.save();

    res.status(200).json({
      message: "Service scheduled successfully",
      schedule: newSchedule,
    });
  } catch (error) {
    console.log("Error in Schedule controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getBarberMeatings = async (req, res) => {
  try {
    const barberId = req.barber._id;
    const scheduledServices = await ScheduleService.find({ barber: barberId }).sort({
      scheduledDate: -1,
    });
    if (!scheduledServices.length) {
      return res.status(404).json({ message: "No meetings found" });
    };
   return res.status(200).json({scheduledServices });
  } catch (error) {
    console.log("Error in Schedule controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUserMeatings = async (req, res) => {
  const userId = req.user._id;
  try {
    const scheduledServices = await ScheduleService.find({ user: userId }).sort(
      { scheduledDate: -1 }
    );

    if (!scheduledServices.length) {
      return res.status(404).json({ message: "No scheduled services found" });
    }

    res.status(200).json({ scheduledServices });
  } catch (error) {
    console.log("Error in Schedule controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateMeating = async (req, res) => {
  const { serviceId } = req.params;
  const { isScheduled } = req.body;

  try {
    const scheduleService = await ScheduleService.findById(serviceId);
    if (!scheduleService) {
      return res.status(404).json({ message: "Scheduled service not found" });
    }

    scheduleService.isScheduled = isScheduled || scheduleService.isScheduled;

    await scheduleService.save();

    res.status(200).json({
      message: "Service status updated successfully",
      scheduleService,
    });
  } catch (error) {
    console.log("Error in Schedule controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
