import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

// import axios from "axios";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");

  //   const { user, setUser } = useContext(UserDataContext);
  //   const navigate = useNavigate();

  //   const submitHandler = async (e) => {

  //     e.preventDefault();

  //     const userData = {
  //       email: email,
  //       password: password,
  //  fullname:fullname
  //     };

  //     const response = await axios.post(
  //       `${import.meta.env.VITE_BASE_URL}/user/login`,
  //       userData
  //     );

  //     if (response.status === 200) {
  //       const data = response.data;
  //       setUser(data.user);
  //       localStorage.setItem("token", data.token);
  //       navigate("/home");
  //     }

  //     setEmail("");
  //     setPassword("");
  //   };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
       
       

        <form
          onSubmit={(e) => {
            // submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">Enter your Full Name</h3>
          <input
            required
            value={fullname}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="Abcd"
          />

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

<h3 className="text-lg font-medium mb-2">Enter your City Name</h3>
          <input
            required
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="abcd"
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
            SignUp
          </button>
        </form>
        <p className="text-center">
          Allready have a acount?{" "}
          <Link to="/user/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/barber/login"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Login as Barber
        </Link>
      </div>
    </div>
  );
};

export default UserSignUp;
