import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'
// import { CaptainDataContext } from '../context/CaptainContext'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

const BarberSignup = () => {
  //   const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");

  //   const { captain, setCaptain } = React.useContext(CaptainDataContext)

  //   const submitHandler = async (e) => {
  //     e.preventDefault()
  //     const captainData = {
  //       fullname: {
  //         firstname: firstName,
  //         lastname: lastName
  //       },
  //       email: email,
  //       password: password,
  //       vehicle: {
  //         color: vehicleColor,
  //         plate: vehiclePlate,
  //         capacity: vehicleCapacity,
  //         vehicleType: vehicleType
  //       }
  //     }

  //     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData)

  //     if (response.status === 201) {
  //       const data = response.data
  //       setCaptain(data.captain)
  //       localStorage.setItem('token', data.token)
  //       navigate('/captain-home')
  //     }

  //     setEmail('')
  //     setFirstName('')
  //     setLastName('')
  //     setPassword('')
  //     setVehicleColor('')
  //     setVehiclePlate('')
  //     setVehicleCapacity('')
  //     setVehicleType('')

  //   }

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />

        <form
          onSubmit={(e) => {
            //   submitHandler(e)
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
            value={fullname}
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
