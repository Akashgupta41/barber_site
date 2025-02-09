import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import Avatar from "react-avatar";
import { FaAngleDown, FaMapMarkerAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ProfileSuggestions from "../components/SuggestionBarber";
import { useBarberAuthStore } from "../store/useBarberAuthStore";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBarber, setFilteredBarber] = useState([]);
  const searchPanelRef = useRef(null);
  const { barbers } = useBarberAuthStore();
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setIsSearchOpen(true);
    gsap.to(searchPanelRef.current, { y: 0, duration: 1, ease: "power3.out" });
  };

  const handleCloseSearch = () => {
    gsap.to(searchPanelRef.current, {
      y: "100%",
      duration: 1,
      ease: "power3.in",
      onComplete: () => setIsSearchOpen(false),
    });
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredBarber([]);
    } else {
      const results = barbers.filter((barber) => {
        const { state, district, city, landmark } = barber.shop.location;

        return (
          barber.fullName.toLowerCase().includes(query.toLowerCase()) ||
          state.toLowerCase().includes(query.toLowerCase()) ||
          district.toLowerCase().includes(query.toLowerCase()) ||
          city.toLowerCase().includes(query.toLowerCase()) ||
          landmark.toLowerCase().includes(query.toLowerCase())
        );
      });
      setFilteredBarber(results);
    }
  };

  const handleProfileClick = (barberId) => {
    navigate(`/barber/profile/${barberId}`);
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center rounded-b-md"
      style={{
        backgroundImage:
          "url(https://wallpaperaccess.com/full/8088679.gif)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
      <div className="relative flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-center p-4 text-4xl font-bold mb-4">
          FIND YOUR NEAREST BARBER.
        </h1>
        <img
          width={80}
          src="https://www.pngall.com/wp-content/uploads/9/Location-Symbol-PNG-Free-Download.png"
          alt=""
        />
      </div>
      <div className="absolute bottom-32 w-full p-5 mx-auto">
        <div className="relative w-full items-center flex justify-center max-w-md mx-auto mt-10">
          <input
            type="text"
            placeholder="Enter location..."
            onClick={handleSearchClick}
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      {isSearchOpen && (
        <div
          ref={searchPanelRef}
          className="fixed inset-0 bg-white z-50 flex flex-col p-4 overflow-y-auto"
          style={{ transform: "translateY(100%)" }}
        >
          <button
            onClick={handleCloseSearch}
            className="text-black top-0 p-2 ml-2"
          >
            <FaAngleDown size={24} />
          </button>
          <div className="relative w-full max-w-md mx-auto mt-10">
            <input
              type="text"
              placeholder="Enter location or Shopname"
              onChange={handleSearch}
              value={searchQuery}
              className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex flex-col m-2 space-y-4">
            {filteredBarber.length > 0 ? (
              filteredBarber.map((barber) => (
                <div
                  key={barber._id}
                  onClick={() => handleProfileClick(barber._id)}
                  className="flex justify-center items-center p-2 pl-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <div className="w-full">
                    <Avatar
                      src={barber.profilePic}
                      name={barber.fullName}
                      size="50"
                      round={true}
                      className="mr-4"
                    />
                    <span className="text-lg">{barber.shop.shopname}</span>
                    <div className="w-full p-2 m-1 flex items-start justify-center">
                      <span className="pr-1">
                        <FaLocationDot />
                      </span>
                      <p className="text-xs ">
                        {barber.shop.location.state},
                        {barber.shop.location.district}
                        {barber.shop.location.city},
                        {barber.shop.location.landmark}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center mt-4">No Barber Found</p>
            )}
          </div>
          <ProfileSuggestions />
        </div>
      )}
    </div>
  );
};

export default Home;
