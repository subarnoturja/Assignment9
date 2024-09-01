import React from "react";
import { FaBangladeshiTakaSign, FaBath, FaBed } from "react-icons/fa6";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const propertyIdInt = parseInt(id);
  const property = details.find((property) => property.id == propertyIdInt);

  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={property.apartment_img}
          alt=""
          className="w-full h-60 sm:h-96 dark:bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              {property.estate_title}
            </a>
            <div className="flex justify-between">
              <div>
                <p className="text-md dark:text-gray-600">
                  {property.location}
                </p>
              </div>
              <div>
                <p className="text-md text-lime-600">{property.segment_name}</p>
              </div>
            </div>
          </div>
          <div className="text-lg">
            <p>{property.description}</p>
          </div>
          <div className="flex justify-center gap-6">
            <div className="flex gap-2 items-center">
              <PiBuildingApartmentLight className="text-xl" />
              Area {""}
              {property.area} sq ft
            </div>
            <div className="flex gap-2 items-center">
              <FaBed className="text-2xl" /> Bedroom {""}
              {property.total_bedroom}
            </div>
            <div className="flex gap-2 items-center">
              <FaBath className="text-2xl" /> Washroom {""}
              {property.total_washroom}
            </div>
          </div>
          <div className="flex gap-5">
            <p className="text-md">Facilities:</p>
            <div>
              <h4>{property.facilities[0]}</h4>
            </div>
            <div>
              <h4>{property.facilities[1]}</h4>
            </div>
            <div>
              <h4>{property.facilities[2]}</h4>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <FaBangladeshiTakaSign className="text-2xl" />
              <p className="text-xl">{property.price}</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-xl">{property.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
