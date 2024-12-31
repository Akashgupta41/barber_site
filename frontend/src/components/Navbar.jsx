import React from 'react';
import { FaUser, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
import Avatar from 'react-avatar'
import { Toaster } from "react-hot-toast";

const Navbar = () => {

  return (
    <nav className="bg-black p-4 ">
      <Toaster/>
      <div className="container  flex items-center justify-between">
      <div>
        <img
          className="w-12 "
          src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-barbershop-razor-and-blade-vector-icon-of-barber-shop-and-gentleman-png-image_4755115.png"
          alt=""
        />
      </div>
        <div className="flex space-x-2">
          <a href="/profile" className="text-white hover:text-gray-200 flex items-center">
            <Avatar round={true} size='20' src='https://static.vecteezy.com/system/resources/previews/011/947/163/original/gold-user-icon-free-png.png' />
          </a>
          <a href="/meetings" className="text-white hover:text-gray-200 flex items-center">
            <FaCalendarAlt className="mr-2" /> 
          </a>
          <a href="/logout" className="text-white hover:text-gray-200 flex items-center">
            <FaSignOutAlt className="mr-2" /> 
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

