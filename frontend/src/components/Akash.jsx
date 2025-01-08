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
    <div className="row gy-10 gx-lg-8 gx-xl-12 mb-16 align-items-center">
  <div className="col-lg-7 position-relative">
    <div
      className="shape bg-dot primary rellax w-18 h-18"
      data-rellax-speed={1}
      style={{ top: 0, left: "-1.4rem", zIndex: 0 }}
    />
    <div className="row gx-md-5 gy-5">
      <div className="col-md-6">
        <figure className="rounded mt-md-10 position-relative">
          <img
            src="/home/assets/img/photos/g5.jpg"
            srcSet="/home/assets/img/photos/g5@2x.jpg 2x"
            alt=""
          />
        </figure>
      </div>
      {/*/column */}
      <div className="col-md-6">
        <div className="row gx-md-5 gy-5">
          <div className="col-md-12 order-md-2">
            <figure className="rounded">
              <img
                src="/home/assets/img/photos/g6.jpg"
                srcSet="/home/assets/img/photos/g6@2x.jpg 2x"
                alt=""
              />
            </figure>
          </div>
          {/*/column */}
          <div className="col-md-10">
            <div className="card bg-pale-primary text-center counter-wrapper">
              <div className="card-body py-11">
                <h3
                  className="counter text-nowrap"
                  style={{ visibility: "visible" }}
                >
                  1000000+
                </h3>
                <p className="mb-0">Satisfied Members</p>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/*/column */}
    </div>
    {/*/.row */}
  </div>
  {/*/column */}
  <div className="col-lg-5">
    <h2 className="display-4 mb-8">
      Have an idea? Let's make something great together.
    </h2>
    <div className="d-flex flex-row">
      <div>
        <div className="icon text-primary fs-28 me-6 mt-n1">
          {" "}
          <i className="uil uil-location-pin-alt" />{" "}
        </div>
      </div>
      <div>
        <h5 className="mb-1">Address</h5>
        <address>
          Shivneri Palace F04, Theur Road, Pune,{" "}
          <br className="d-none d-md-block" />
          Maharashtra, India - 412110
        </address>
      </div>
    </div>
    <div className="d-flex flex-row">
      <div>
        <div className="icon text-primary fs-28 me-6 mt-n1">
          {" "}
          <i className="uil uil-phone-volume" />{" "}
        </div>
      </div>
      <div>
        <h5 className="mb-1">Phone</h5>
        <p>
          <a href="tel:+918788053767" className="link-body">
            +91 8788053767
          </a>
        </p>
      </div>
    </div>
    <div className="d-flex flex-row">
      <div>
        <div className="icon text-primary fs-28 me-6 mt-n1">
          {" "}
          <i className="uil uil-envelope" />{" "}
        </div>
      </div>
      <div>
        <h5 className="mb-1">E-mail</h5>
        <p className="mb-0">
          <a href="mailto:support@gplinks.com" className="link-body">
            support@gplinks.com
          </a>
        </p>
      </div>
    </div>
  </div>
  {/*/column */}
</div>

  );
};

export default LocationFilter;
