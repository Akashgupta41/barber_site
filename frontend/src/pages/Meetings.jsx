import React, { useState, useEffect } from "react";
import { useBarberAuthStore } from "../store/useBarberAuthStore";
import { useUserAuthStore } from "../store/useUserAuthStore";
import { useMeatingStore } from "../store/useMeatingStore";
import Meeting from "./Meeting";

// Dummy data following the ScheduleService schema
const statuses = ["pending", "accepted", "completed", "cancelled"];

const statusColors = {
  pending: "bg-yellow-200",
  accepted: "bg-blue-200",
  completed: "bg-green-200",
  cancelled: "bg-red-200",
};

const Meetings = () => {
  const { authBarber } = useBarberAuthStore();
  const { getMeatings, meetings, updateMeatings } = useMeatingStore();
  const { authUser } = useUserAuthStore();

  useEffect(() => {
    const isBarber = authBarber ? true : false;
    getMeatings(isBarber); 
  }, [authBarber, authUser, getMeatings]);

  const handleStatusChange = (id, newStatus) => {
    updateMeatings({ isScheduled: newStatus }, id);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {statuses.map((status) => (
        <div key={status}>
          <h2 className={`text-sm p-3 flex justify-center items-center ${statusColors[status]} rounded-full font-semibold mb-4`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </h2>
          {meetings
            ?.filter((meeting) => meeting.isScheduled === status)
            .map((meeting) => (
              <Meeting
                key={meeting._id}
                id={meeting._id}
                scheduledTime={meeting.scheduledTime}
                scheduledDate={meeting.scheduledDate}
                selectedServices={meeting.selectedServices}
                isScheduled={meeting.isScheduled}
                createdAt={meeting.createdAt}
                message={meeting.message}
                onStatusChange={handleStatusChange}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default Meetings;
