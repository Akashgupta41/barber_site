import React from "react";

// const shopTimings = [
//   { day: "Sunday", open: "10:00 AM", close: "06:00 PM" },
//   { day: "Monday", open: "09:00 AM", close: "08:00 PM" },
//   { day: "Tuesday", open: "09:00 AM", close: "08:00 PM" },
//   { day: "Wednesday", open: "09:00 AM", close: "08:00 PM" },
//   { day: "Thursday", open: "09:00 AM", close: "08:00 PM" },
//   { day: "Friday", open: "09:00 AM", close: "08:00 PM" },
//   { day: "Saturday", open: "09:00 AM", close: "08:00 PM" },
// ];

const WhenOpenCart = ({ shopTimings, close, open }) => {
  return (
    <div className="max-w-md mx-auto p-4  bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold  mb-4">Shop Timings</h2>
      <table className="w-full rounded-md text-left table-fixed">
        <thead>
          <tr>
            <th className="w-1/3 p-2 text-sm bg-gray-200">Day</th>
            <th className="w-1/3 p-2 text-sm bg-gray-200">Open</th>
            <th className="w-1/3 p-2 text-sm bg-gray-200">Close</th>
          </tr>
        </thead>
        <tbody>
          {shopTimings?.map((timing, index) => (
            <tr key={index} className="border-t">
              <td className="p-2 text-sm">{timing}</td>
              <td className="p-2 text-sm">{open}</td>
              <td className="p-2 text-sm">{close}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WhenOpenCart;
