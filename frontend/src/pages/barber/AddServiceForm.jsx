import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useBarberAuthStore } from '../../store/useBarberAuthStore';

const AddServiceForm = ({ isOpen, onClose }) => {
  const [services, setServices] = useState([{ name: '', price: '' }]);
  const formRef = useRef(null);
  const { addShopInfo, isAddingShopInfo } = useBarberAuthStore();

  useEffect(() => {
    if (isOpen) {
      gsap.to(formRef.current, { opacity: 1, y: 0, duration: 0.5 });
    } else {
      gsap.to(formRef.current, { opacity: 0, y: '-100%', duration: 0.5 });
    }
  }, [isOpen]);

  const handleServiceChange = (index, field, value) => {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  const handleAddService = () => {
    setServices([...services, { name: '', price: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addShopInfo({ services });
      onClose();
    } catch (error) {
      console.error('Error uploading services', error);
      // Handle error (e.g., display error message to the user)
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" ref={formRef}>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md space-y-4 max-w-sm w-full">
        <h2 className="text-xl font-semibold">Add Service</h2>
        {services.map((service, index) => (
          <div key={index}>
            <div>
              <label className="block text-gray-700">Service Name</label>
              <input
                type="text"
                className="mt-1 p-2 border rounded w-full"
                value={service.name}
                onChange={(e) => handleServiceChange(index, 'name', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                className="mt-1 p-2 border rounded w-full"
                value={service.price}
                onChange={(e) => handleServiceChange(index, 'price', e.target.value)}
                required
              />
            </div>
          </div>
        ))}
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddService}>
          Add Another Service
        </button>
        <div className="flex justify-end space-x-4">
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded" disabled={isAddingShopInfo}>
            {isAddingShopInfo ? 'Adding...' : 'Add Service'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddServiceForm;

