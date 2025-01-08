import React from "react";
import Avatar from "react-avatar";
import "tailwindcss/tailwind.css";
import { useBarberAuthStore } from "../store/useBarberAuthStore";
import { useUserAuthStore } from "../store/useUserAuthStore";
import { FaRegFaceDizzy } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProfileSuggestions = () => {
  const { authUser } = useUserAuthStore();
  const { barbers } = useBarberAuthStore();
  const navigate = useNavigate();

  const suggestedBarbers = barbers.filter(
    (barber) =>
      barber.shop.location.state.toLowerCase() === authUser.state.toLowerCase()
  );

  const handleProfileClick = (barberId) => {
    navigate(`/barber/profile/${barberId}`);
  };

  return (
    <div className="w-full ">
      <h2 className="text-xl font-bold mb-4">Suggestions for You</h2>
      <div className="flex overflow-x-auto w-full space-x-4">
        {suggestedBarbers.length > 0 ? (
          suggestedBarbers.map((barber) => (
            <div
              key={barber._id}
              className="flex-shrink-0 flex-col items-center justify-center flex w-48 h-60 bg-white rounded-lg shadow-xl m-4"
              onClick={() => handleProfileClick(barber._id)}
            >
              <Avatar
                src={barber.profilePic}
                name={barber.fullName}
                size="50"
                round={true}
                className="mb-4"
              />
              <h3 className="text-md font-semibold text-center">{barber.shop.shopname}</h3>
              <p className="text-sm text-gray-500 text-center">
                {barber.shop.location.state}, {barber.shop.location.city}, {barber.shop.location.district}
              </p>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center w-full flex-col border-1 border border-black p-6 rounded-lg">
            <h3 className="text-red-900 font-bold mb-2 mt-4">No suggestions for you!</h3>
            <FaRegFaceDizzy color="red" size={30} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSuggestions;
