import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { useBarberAuthStore } from "../../store/useBarberAuthStore";

const whenOpenOptions = [
  "Everyday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WhenOpenForm = () => {
  const [selectedDays, setSelectedDays] = useState(["Everyday"]);
  const [opentime, setOpentime] = useState("");
  const [openPeriod, setOpenPeriod] = useState("AM");
  const [closetime, setClosetime] = useState("");
  const [closePeriod, setClosePeriod] = useState("AM");
  const { addShopInfo } = useBarberAuthStore();
  const navigate = useNavigate();

  const handleToggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Selected days:", selectedDays);
    console.log("Open time:", opentime + " " + openPeriod);
    console.log("Close time:", closetime + " " + closePeriod);
    const data = {
      opentime: opentime + " " + openPeriod,
      closetime: closetime + " " + closePeriod,
      whenopen: selectedDays,
    };

    try {
      await addShopInfo(data);
    } catch (error) {
      console.error("Error adding shop time:", error);
    } finally {
      navigate("/home");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-100 rounded-lg w-screen h-screen shadow-lg"
    >
      <h2 className="text-xl font-bold mb-4">Select Days When Open</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {whenOpenOptions.map((day) => (
          <button
            type="button"
            key={day}
            className={`px-4 py-2 rounded-lg border ${
              selectedDays.includes(day)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleToggleDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-lg">Open Time:</label>
        <div className="flex">
          <input
            type="time"
            value={opentime}
            onChange={(e) => setOpentime(e.target.value)}
            className="w-full px-4 py-2 rounded-l-lg border bg-gray-200 text-gray-700"
            required
          />
          <select
            value={openPeriod}
            onChange={(e) => setOpenPeriod(e.target.value)}
            className="px-4 py-2 rounded-r-lg border bg-gray-200 text-gray-700"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-lg">Close Time:</label>
        <div className="flex">
          <input
            type="time"
            value={closetime}
            onChange={(e) => setClosetime(e.target.value)}
            className="w-full px-4 py-2 rounded-l-lg border bg-gray-200 text-gray-700"
            required
          />
          <select
            value={closePeriod}
            onChange={(e) => setClosePeriod(e.target.value)}
            className="px-4 py-2 rounded-r-lg border bg-gray-200 text-gray-700"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="px-6 py-2 w-full mt-6 bg-green-500 text-white bottom-6 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default WhenOpenForm;
