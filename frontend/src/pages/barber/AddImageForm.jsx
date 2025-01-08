import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import axios from "axios";
import { useBarberAuthStore } from "../../store/useBarberAuthStore";

const AddImageForm = ({ isOpen, onClose }) => {
  const [images, setImages] = useState([]);
  const formRef = useRef(null);
  const { addShopInfo,isAddingShopInfo } = useBarberAuthStore();

  useEffect(() => {
    if (isOpen) {
      gsap.to(formRef.current, { opacity: 1, y: 0, duration: 0.5 });
    } else {
      gsap.to(formRef.current, { opacity: 0, y: "-100%", duration: 0.5 });
    }
  }, [isOpen]);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    images.forEach((image) => formData.append('shopimages', image));

    try {
      await addShopInfo(formData);
      onClose();
    } catch (error) {
      console.error("Error uploading images", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      ref={formRef}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md space-y-4 max-w-sm w-full"
      >
        <h2 className="text-xl font-semibold">Add Image</h2>
        <div>
          <label className="block text-gray-700">Images</label>
          <input
            type="file"
            className="mt-1 p-2 border rounded w-full"
            onChange={handleImageChange}
            multiple
            required
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            {isAddingShopInfo ? 'Uploading...' : 'Add Images'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddImageForm;
