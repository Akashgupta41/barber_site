import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="w-full bg-cover bg-center bg-[url(https://i.pinimg.com/originals/91/d6/03/91d6037c183ccc9644cdd59a70857524.jpg)] h-screen pt-8  flex justify-between flex-col bg-red-400">
        <img
          className="w-16 ml-8"
          src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-barbershop-razor-and-blade-vector-icon-of-barber-shop-and-gentleman-png-image_4755115.png"
          alt=""
        />
        <div className="bg-white pb-20 py-4 px-4">
          <h2 className="text-2xl text-center font-bold">
            Get Started with Barber Found
          </h2>
          <a
            to={"/login"}
            className=" flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </a>
        </div>
      </div>
    </div>
  );
};

export default Start;
