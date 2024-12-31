import React, { useState } from 'react';
import { stateData } from '../lib/statedata';


const LocationFilter = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict(''); 
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const filteredDistricts = stateData.states.find((state) => state.state === selectedState)?.districts || [];

  

  return (
    <div>
      <div>
        <label>State: </label>
        <select
          required
          className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="" disabled>
            Select State
          </option>
          {stateData.states.map((state, index) => (
            <option key={index} value={state.state}>
              {state.state}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>District: </label>
        <select
          required
          className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
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
      <div>
        <h3>Selected Location:</h3>
        <p>State: {selectedState || 'None'}</p>
        <p>District: {selectedDistrict || 'None'}</p>
      </div>
    </div>
  );
};

export default LocationFilter;
