import React, { useState } from "react";
import { stateData } from "../../lib/statedata.js";
import { useBarberAuthStore } from "../../store/useBarberAuthStore.js";
import { useNavigate } from "react-router-dom";

const ShopInfo = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [city, setCity] = useState("");
  const [shopname, setShopName] = useState("");
  const [landmark, setLandmark] = useState("");
  const [services, setServices] = useState([{ name: "", price: "" }]);
  const [stateSearch, setStateSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const { addShopInfo } = useBarberAuthStore();
  const navigate = useNavigate();

  const handleServiceChange = (index, field, value) => {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  const handleAddService = () => {
    setServices([...services, { name: "", price: "" }]);
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedDistrict("");
    setStateSearch(state);
    setShowSuggestions(false);
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const filteredStates = stateData.states.filter((state) =>
    state.state.toLowerCase().includes(stateSearch.toLowerCase())
  );

  const filteredDistricts =
    stateData.states.find((state) => state.state === selectedState)
      ?.districts || [];

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      shopname: shopname,
      location: {
        state: selectedState,
        district: selectedDistrict,
        city: city,
        landmark: landmark,
      },
      services: services,
    };

    try {
      await addShopInfo(data);
    } catch (error) {
      console.error("Error adding shop info:", error);
    } finally {
      navigate("/barber/shop-time");
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
          <h3 className="text-lg font-medium mb-2">Enter Shop's Name</h3>
          <input
            required
            value={shopname}
            onChange={(e) => {
              setShopName(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="text"
          />
          <h3 className="text-lg font-medium mb-2">Enter Shop Address</h3>
          <div>
            <input
              required
              className="bg-[#eeeeee] w-full mb-4 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <input
              required
              className="bg-[#eeeeee] w-full mb-4 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Landmark"
              value={landmark}
              onChange={(e) => {
                setLandmark(e.target.value);
              }}
            />
          </div>

          <div className="w-full mb-4 relative">
            <input
              type="text"
              placeholder="Enter State Name"
              className="bg-[#eeeeee] w-full rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              value={stateSearch}
              onChange={(e) => {
                setStateSearch(e.target.value);
                setShowSuggestions(true);
              }}
            />
            {showSuggestions && stateSearch && (
              <div className="absolute bg-white border rounded-lg mt-1 w-full max-h-40 overflow-auto">
                {filteredStates.map((state, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleStateChange(state.state)}
                  >
                    {state.state}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <select
              required
              className="bg-[#eeeeee] w-full mb-4 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              value={selectedDistrict}
              onChange={handleDistrictChange}
              disabled={!selectedState}
            >
              <option value="" disabled>
                Select District
              </option>
              {filteredDistricts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          <h2 className="text-xl font-bold mb-4">Add Services</h2>
          {services.map((service, index) => (
            <div key={index} className="mb-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Service Name"
                  value={service.name}
                  onChange={(e) =>
                    handleServiceChange(index, "name", e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-lg border bg-gray-200 text-gray-700"
                  required
                />
                <input
                  type="number"
                  placeholder="Service Price"
                  value={service.price}
                  onChange={(e) =>
                    handleServiceChange(index, "price", e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-lg border bg-gray-200 text-gray-700"
                  required
                />
              </div>
              {index === services.length - 1 && (
                <button
                  type="button"
                  onClick={handleAddService}
                  className="mt-6 px-4 py-2 w-full bg-blue-500 text-white rounded-lg"
                >
                  Add Another Service
                </button>
              )}
            </div>
          ))}
          <button className="bg-[#111] text-white font-semibold mt-6 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopInfo;
