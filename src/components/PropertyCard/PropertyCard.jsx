import React from "react";
import { FaBangladeshiTakaSign, FaBath, FaBed } from "react-icons/fa6";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

const PropertyCard = ({ property }) => {
  const {
    id,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    apartment_img,
    total_bedroom,
    total_washroom
  } = property;

  return (
    <div className="max-w-xl container border-2 p-4 mb-6 rounded-xl shadow-lg transform hover:scale-105">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <a
            rel="noopener noreferrer"
            className="mb-0 capitalize px-4 border rounded-full bg-orange-600 text-white"
          >
            {segment_name}
          </a>
        </div>
        <a
          rel="noopener noreferrer"
          href="#"
          className="mb-0 capitalize px-4 border rounded-full bg-green-600 text-white"
        >
          {status}
        </a>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={apartment_img}
            alt="Photos Coming Soon"
            className="block object-cover object-center w-full rounded-md h-60"
          />
          <div className="flex gap-2 items-center text-md">
          <SlLocationPin />
            <span> {location}</span>
          </div>
        </div>
        {/* Title & Description */}
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold dark:text-default-600">
              {estate_title}
            </h3>
          </a>
          <p className="leading-snug dark:text-gray-600">
            {description.substring(0, 60)}...
          </p>
        </div>
        {/* Bedroom & Washroom */}
        <div className="flex gap-8">
          {/* Bedroom */}
          <div className="flex gap-2 items-center">
            <FaBed className="text-2xl" />
            {total_bedroom}
          </div>
          {/* Washroom */}
          <div className="flex gap-2 items-center">
            <FaBath className="text-2xl" />
            {total_washroom}
          </div>
        </div>
        {/* Facilities */}
        <div className="flex gap-4">
          <div className="border-2 rounded-full px-2.5 py-1 bg-[#23BE0A0D] text-[#23BE0A]">
            <h4>{facilities[0]}</h4>
          </div>
          <div className="border-2 rounded-full px-2.5 py-1 bg-[#23BE0A0D] text-[#23BE0A]">
            <h4>{facilities[1]}</h4>
          </div>
          <div className="border-2 rounded-full px-2.5 py-1 bg-[#23BE0A0D] text-[#23BE0A]">
            <h4>{facilities[2]}</h4>
          </div>
        </div>
        {/* Area & Price */}
        <div className="flex justify-between">
          {/* Price */}
          <div className="flex gap-2 items-center">
          <FaBangladeshiTakaSign className="text-xl"/>
          {price}
          </div>
          {/* Area */}
          <div className="flex gap-2 items-center">
          <PiBuildingApartmentLight className="text-xl"/>
          {area} sq ft
          </div>
        </div>
        <button className="btn btn-success text-white w-full">
          View Property
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
