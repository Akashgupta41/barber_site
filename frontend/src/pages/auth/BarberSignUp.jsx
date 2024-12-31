import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBarberAuthStore } from "../../store/useBarberAuthStore";

const BarberSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const { barberSignUp } = useBarberAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      fullName,
      password,
    };
   
    try {
      await barberSignUp(data);
    } catch (error) {
      console.error("Error adding barber signup:", error);
    } finally {
      navigate("/barber/shop-info");
    }
  };

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3 className="text-lg w-full  font-medium mb-2">
            What's our Barber name
          </h3>

          <input
            required
            className="bg-[#eeeeee] w-full rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
            type="text"
            placeholder="Fullname"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />

          <h3 className="text-lg font-medium mb-2">
            What's our Barber's email
          </h3>
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

          <button
            className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
            type="submit"
          >
            Create Barber's Acount
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/barber/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] mt-6 leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default BarberSignup;
