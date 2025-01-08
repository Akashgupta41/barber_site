import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuthStore } from "../../store/useUserAuthStore";
import { stateData } from "../../lib/statedata";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [stateSearch, setStateSearch] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { userSignUp } = useUserAuthStore();
  const navigate = useNavigate();

  const handleStateChange = (state) => {
    setState(state);
    setStateSearch(state);
    setShowSuggestions(false);
  };

  const filteredStates = stateData.states.filter((stateObj) =>
    stateObj.state.toLowerCase().includes(stateSearch.toLowerCase())
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email,
      state,
      password,
      fullName,
    };

    try {
      await userSignUp(data);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">Enter your Full Name</h3>
          <input
            required
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="text"
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

          <h3 className="text-lg font-medium mb-2">Enter your State Name</h3>
          <div className="w-full mb-7 relative">
            <input
              type="text"
              placeholder="Enter State Name"
              className="bg-[#eeeeee] w-full rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              value={stateSearch}
              onChange={(e) => {
                setStateSearch(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
            />
            {showSuggestions && stateSearch && (
              <div className="absolute bg-white border rounded-lg mt-1 w-full max-h-40 overflow-auto">
                {filteredStates.map((stateObj, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleStateChange(stateObj.state)}
                  >
                    {stateObj.state}
                  </div>
                ))}
              </div>
            )}
          </div>

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
          Already have an account?{" "}
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
