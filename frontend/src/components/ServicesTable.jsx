import React from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
// const services = [
//   { name: "Haircut", price: "$25" },
//   { name: "Shave", price: "$15" },
//   { name: "Beard Trim", price: "$20" },
//   { name: "Hair Coloring", price: "$40" },
//   { name: "Facial", price: "$30" },
//   { name: "Manicure", price: "$25" },
//   { name: "Pedicure", price: "$30" },
//   { name: "Massage", price: "$50" },
//   { name: "Hair Wash", price: "$10" },
//   { name: "Waxing", price: "$35" },
// ];

const ServicesTable = ({services}) => {
  return (
    <div className="container  mx-auto p-4">

      <div className="overflow-x-auto shadow-md  rounded-md">
        <table className="min-w-full  bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="px-6 py-3">Service Name</th>
              <th className="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {services?.map((service, index) => (
              <tr key={index} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} border-t`}>
                <td className="px-6 py-3">{service.name}</td>
                <td className="px-6 py-3">{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesTable;
