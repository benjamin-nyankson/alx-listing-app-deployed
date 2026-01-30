import { PropertyProps } from "@/interfaces";
import React from "react";

interface PropertyDetailsProps {
  property: PropertyProps;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  const {
    name,
    address,
    rating,
    category,
    price,
    offers,
    image,
    discount,
  } = property;

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Image */}
      <div>
        <img
          src={image}
          alt={name}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Details */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{name}</h1>

        <p className="text-gray-500">
          {address.city}, {address.state}, {address.country}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-yellow-500 font-semibold">
            ⭐ {rating}
          </span>
          <span className="text-sm text-gray-400">
            ({category.join(", ")})
          </span>
        </div>

        <div className="text-2xl font-bold">
          ${price} <span className="text-sm font-normal text-gray-500">/ night</span>
        </div>

        {discount && (
          <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm">
            {discount} OFF
          </div>
        )}

        {/* Offers */}
        <div className="grid grid-cols-3 gap-4 border-t pt-4">
          <div>
            <p className="text-sm text-gray-500">Beds</p>
            <p className="font-semibold">{offers.bed}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Showers</p>
            <p className="font-semibold">{offers.shower}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Occupants</p>
            <p className="font-semibold">{offers.occupants}</p>
          </div>
        </div>

        <button className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;
