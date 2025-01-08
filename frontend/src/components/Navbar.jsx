import React from "react";
import { FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import Avatar from "react-avatar";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuthStore } from "../store/useUserAuthStore";
import { useBarberAuthStore } from "../store/useBarberAuthStore";
import { AiOutlineLogin } from "react-icons/ai";

const Navbar = () => {
  const navigate = useNavigate();
  const { authUser, userLogout } = useUserAuthStore();
  const { authBarber, barberLogout } = useBarberAuthStore();

  const handleLogout = async () => {
    if (authUser) {
      await userLogout();
      navigate("user/login");
    } else if (authBarber) {
      await barberLogout();
      navigate("/barber/login");
    }
  };

  const handleProfileClick = () => {
    if (authUser) {
      navigate(`/user/profile`);
    } else if (authBarber) {
      navigate(`/barber/profile/${authBarber._id}`);
    }
  };

  return (
    <nav className="bg-white top-0 sticky z-50 shadow-sm border-1 border-b-black p-4">
      <Toaster />
      <div className="container flex items-center justify-between">
        <Link to={"/home"}>
          <img
            className="w-12"
            src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-barbershop-razor-and-blade-vector-icon-of-barber-shop-and-gentleman-png-image_4755115.png"
            alt=""
          />
        </Link>
        <div className="flex space-x-2 items-center">
          {authBarber || authUser ? (
            <>
              <button
                onClick={handleProfileClick}
                className="text-black hover:text-gray-600 flex items-center"
              >
                <Avatar
                  round={true}
                  size="40"
                  src={
                    authBarber?.profilePic ||
                    authUser?.profilePic ||
                    "/avatar.png"
                  }
                />
              </button>

              <button
                onClick={handleLogout}
                className="text-white w-10 rounded-full bg-black p-2 hover:text-gray-200 justify-center flex items-center"
              >
                <FaSignOutAlt />
              </button>
              <Link
                to={"meetings"}
                className="text-white rounded-md bg-gray-400 p-2 hover:text-gray-200 flex items-center"
              >
                <FaCalendarAlt />
              </Link>
            </>
          ) : (
            <Link
              to={"/user/login"}
              className="text-white rounded-md bg-gray-400 p-2 hover:text-gray-200 flex items-center"
            >
              <AiOutlineLogin />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
