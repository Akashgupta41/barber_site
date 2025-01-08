import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useBarberAuthStore } from "../../store/useBarberAuthStore";
import { Camera } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { FcShop } from "react-icons/fc";
import { IoCutOutline, IoLocationOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { gsap } from "gsap";
import ServicesTable from "../../components/ServicesTable";
import ShopImagesCarousel from "../auth/ShopImagesCarousel";
import Reviews from "../../components/Review";
import WhenOpenCart from "../../components/WhenOpen";
import ScheduleForm from "../../pages/user/ScheduleForm";
import { BiEdit, BiImageAdd, BiSolidAddToQueue } from "react-icons/bi";
import AddImageForm from "./AddImageForm";
import AddServiceForm from "./AddServiceForm";
import WhenOpenForm from "./WhenOpenForm";
import { GiModernCity } from "react-icons/gi";
import { GrLocationPin } from "react-icons/gr";

const BarberProfile = () => {
  const {
    fetchedBarber,
    fetchBarberDetails,
    authBarber,
    updateProfile,
    isUpdatingProfile,
  } = useBarberAuthStore();
  const { barberId } = useParams();

  useEffect(() => {
    if (barberId) {
      fetchBarberDetails(barberId);
    }
  }, [barberId, fetchBarberDetails]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditTimingsOpen, setIsEditTimingsOpen] = useState(false);
  const [isAddImageOpen, setIsAddImageOpen] = useState(false);
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const addServiceRef = useRef(null);
  const addImageRef = useRef(null);
  const editTimingsRef = useRef(null);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleEditTimingsOpen = () => {
    setIsEditTimingsOpen(true);
    gsap.to(editTimingsRef.current, { opacity: 1, y: 0, duration: 0.5 });
  };

  const handleEditTimingsClose = () => {
    gsap.to(editTimingsRef.current, {
      opacity: 0,
      y: "-100%",
      duration: 0.5,
      onComplete: () => setIsEditTimingsOpen(false),
    });
  };

  const handleAddImageOpen = () => {
    setIsAddImageOpen(true);
    gsap.to(addImageRef.current, { opacity: 1, y: 0, duration: 0.5 });
  };

  const handleAddImageClose = () => {
    gsap.to(addImageRef.current, {
      opacity: 0,
      y: "-100%",
      duration: 0.5,
      onComplete: () => setIsAddImageOpen(false),
    });
  };

  const handleAddServiceOpen = () => {
    setIsAddServiceOpen(true);
    gsap.to(addServiceRef.current, { opacity: 1, y: 0, duration: 0.5 });
  };

  const handleAddServiceClose = () => {
    gsap.to(addServiceRef.current, {
      opacity: 0,
      y: "-100%",
      duration: 0.5,
      onComplete: () => setIsAddServiceOpen(false),
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  const isOwner = authBarber && authBarber._id === barberId;

  return (
    <div>
      <div className="flex items-center shadow-lg mt-4 m-2 rounded-md bg-gray-300 ">
        <div className="w-1/3 m-5">
          <div className="relative">
            <div className="avatar">
              <div className="w-24 rounded">
                <img
                  className="object-cover"
                  src={
                    fetchedBarber?.profilePic || selectedImg || "/avatar.png"
                  }
                  alt="Barber Profile"
                />
                <label
                  htmlFor="avatar-upload"
                  className={`
                  absolute bottom-0 right-0 
                  hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  
                  ${
                    isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                  }
                `}
                ></label>
              </div>
            </div>
            {isOwner && (
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                `}
              >
                <Camera className="w-5 h-5 text-base-200" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            )}
          </div>
        </div>
        <div className="p-2 h-full">
          <div className="flex">
            <FcShop className="h-14 border-black border-r mr-2 p-2 bg-gray-500 rounded-md w-14" />
            <h3 className="font-bold text-black text-lg">
              {fetchedBarber?.shop?.shopname}
            </h3>
          </div>
          <div className="flex ml-2 mt-2">
            <FaUser className="h-4 mt-1 text-green-400 w-4" />
            <h3 className="text-gray-600 text-sm ml-2">
              {fetchedBarber?.fullName}
            </h3>
          </div>
        </div>
      </div>
      <div>
        <div className="flex mt-4 rounded m-2 p-4 shadow-md bg-gray-300 justify-evenly items-center">
          <div className="flex items-center">
            <TbWorld color="green" className="h-6 w-6 m-2" />
            <div>
              <p className="text-sm font-bold text-gray-500">State</p>
              <h6 className="font-bold text-xs">
                {fetchedBarber?.shop?.location?.state}
              </h6>
            </div>
          </div>
          <div className="flex items-center">
            <IoLocationOutline color="red" className="h-6 w-6 m-2" />
            <div>
              <p className="text-sm font-bold text-gray-500">District</p>
              <h6 className="font-bold text-xs">
                {fetchedBarber?.shop?.location?.district}
              </h6>
            </div>
          </div>
        </div>
        <div className="flex mt-4 rounded m-2 p-4 shadow-md bg-gray-300 justify-evenly items-center">
          <div className="flex items-center">
            <GiModernCity className="h-6 w-6 m-2" />
            <div>
              <p className="text-sm font-bold text-gray-500">City</p>
              <h6 className="font-bold text-xs">
                {fetchedBarber?.shop?.location?.city}
              </h6>
            </div>
          </div>
          <div className="flex items-center">
            <GrLocationPin className="h-6 w-6 m-2" />
            <div>
              <p className="text-sm font-bold text-gray-500">Landmark</p>
              <h6 className="font-bold text-xs">
                {fetchedBarber?.shop?.location?.landmark}
              </h6>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full justify-end items-center flex pr-4 mt-4">
            {isOwner && (
              <BiSolidAddToQueue size={24} onClick={handleAddServiceOpen} />
            )}
          </div>
          <ServicesTable services={fetchedBarber?.shop?.services} />
        </div>
        <div>
          <div className="w-full flex justify-end ">
            {isOwner && (
              <div className="p-2 rounded-md m-2">
                <BiImageAdd
                  size={24}
                  color="black"
                  onClick={handleAddImageOpen}
                />
              </div>
            )}
          </div>
          <ShopImagesCarousel images={fetchedBarber?.shop?.shopimages} />
        </div>
        <div>
          <div className="w-full flex justify-end ">
            {isOwner && (
              <div className="p-2 rounded-md m-2">
                <BiEdit
                  size={24}
                  color="black"
                  onClick={handleEditTimingsOpen}
                />
              </div>
            )}
          </div>
          <WhenOpenCart
            shopTimings={fetchedBarber?.shop?.whenopen}
            close={fetchedBarber?.shop?.closetime}
            open={fetchedBarber?.shop?.opentime}
          />
        </div>
        <div className="mt-4">
          <Reviews />
        </div>
      </div>
      {!isOwner && (
        <button
          className="fixed bottom-4 right-4 bg-black flex justify-center items-center text-white px-4 py-2 text-sm rounded-lg shadow-lg"
          onClick={handleFormOpen}
        >
          <IoCutOutline size={20} /> <p className="text-md mb-1">+</p>
        </button>
      )}
      <ScheduleForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        barber={fetchedBarber}
      />
      {isOwner && (
        <>
          <AddServiceForm
            ref={addServiceRef}
            isOpen={isAddServiceOpen}
            onClose={handleAddServiceClose}
          />
          <AddImageForm
            ref={addImageRef}
            isOpen={isAddImageOpen}
            onClose={handleAddImageClose}
          />
          <WhenOpenForm
            ref={editTimingsRef}
            isOpen={isEditTimingsOpen}
            onClose={handleEditTimingsClose}
          />
        </>
      )}
    </div>
  );
};

export default BarberProfile;
