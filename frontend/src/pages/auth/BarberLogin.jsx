import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBarberAuthStore } from "../../store/useBarberAuthStore";

const BarberLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { BarberLogin } = useBarberAuthStore();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    const data = {
      email,
      password,
    };
    BarberLogin(data);
    navigate("/home");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?{" "}
          <Link to="/barber/signup" className="text-blue-600">
            Register as a Barber
          </Link>
        </p>
        <div className="mt-14">
          <Link
            to="/user/signup"
            className="bg-[#b47210] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BarberLogin;
