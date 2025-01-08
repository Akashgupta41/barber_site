import React from "react";
import { useBarberAuthStore } from '../store/useBarberAuthStore';

const statuses = ["pending", "accepted", "completed", "cancelled"];

const Meeting = ({ id, scheduledTime, scheduledDate, selectedServices, isScheduled, createdAt, message, onStatusChange }) => {
  const { authBarber } = useBarberAuthStore();

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    onStatusChange(id, newStatus);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-lg font-semibold">{selectedServices.join(', ')}</h4>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-sm text-gray-500">{scheduledTime}</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-sm text-gray-500">{new Date(scheduledDate).toLocaleDateString()}</span>
      </div>
      <div className="flex items-center mb-2">
        {authBarber ? (
          <div className="flex items-center">
            <label className="text-sm mr-2">Status:</label>
            <select
              className="mt-1 p-1 border rounded-full"
              value={isScheduled}
              onChange={handleStatusChange}
            >
              {statuses.map((status) => (
                <option key={status}  value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <span className={`text-sm ${isScheduled === "accepted" || isScheduled === "completed" ? "text-green-500" : isScheduled === "pending" ? "text-yellow-500" : "text-red-500"}`}>
            Status: {isScheduled}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500">Created: {new Date(createdAt).toLocaleDateString()}</p>
      {message && (
        <p className="text-sm text-gray-500">Message: {message}</p>
      )}
    </div>
  );
};

export default Meeting;
