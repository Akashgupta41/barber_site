import React from "react";
import Avatar from "react-avatar";
import "tailwindcss/tailwind.css";

const ProfileSuggestions = () => {
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      profilePic: "https://via.placeholder.com/50",
    },
    { id: 2, name: "Bob Smith", profilePic: "https://via.placeholder.com/50" },
    {
      id: 3,
      name: "Charlie Brown",
      profilePic: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "David Williams",
      profilePic: "https://via.placeholder.com/50",
    },
    { id: 5, name: "Eve White", profilePic: "https://via.placeholder.com/50" },
    // Add more users as needed
  ];

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">Suggestions for You</h2>
      <div className="flex overflow-x-auto space-x-4">
        {users.map((user) => (
          <div
            key={user.id}
            className=" flex-col items-center justify-center flex w-48 p-4 bg-white rounded-lg shadow-lg"
          >
            <Avatar
              src={user.profilePic}
              name={user.name}
              size="30"
              round={true}
              className="mb-4"
            />
            <h3 className="text-xs  font-semibold">{user.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSuggestions;
