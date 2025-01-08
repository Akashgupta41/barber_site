import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useMeatingStore } from "../../store/useMeatingStore";
// const servicesList = [
//   "Haircut", "Shave", "Beard Trim", "Hair Coloring", "Facial", "Manicure", "Pedicure", "Massage", "Hair Wash", "Waxing"
// ];

const ScheduleForm = ({ isOpen, onClose, barber }) => {
  const [selectedServices, setSelectedServices] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [message, setMessage] = useState("");

  const { scheduleMeating } = useMeatingStore();

  useEffect(() => {
    if (isOpen) {
      gsap.to(".schedule-form", { opacity: 1, y: 0, duration: 0.5 });
    } else {
      gsap.to(".schedule-form", { opacity: 0, y: "100%", duration: 0.5 });
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    scheduleMeating(
      { selectedServices, scheduledDate, scheduledTime, message },
      barber?._id
    );
    console.log({ selectedServices, scheduledTime, scheduledDate, message });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 schedule-form opacity-0">
      <form
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold">Schedule Service</h2>
        <div>
          <label className="block text-gray-700">Enter Service Name</label>
          <input
            className="mt-1 p-2 border rounded w-full"
            value={selectedServices}
            onChange={(e) => setSelectedServices(e.target.value)}
            required
            type="text"
          />
   
        </div>
        <div>
          <label className="block text-gray-700">Scheduled Date</label>
          <input
            type="date"
            className="mt-1 p-2 border rounded w-full"
            value={scheduledDate}
            onChange={(e) => setScheduledDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Scheduled Time</label>
          <input
            type="time"
            className="mt-1 p-2 border rounded w-full"
            value={scheduledTime}
            onChange={(e) => setScheduledTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            className="mt-1 p-2 border rounded w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Schedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleForm;
