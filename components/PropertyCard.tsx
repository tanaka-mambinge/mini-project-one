"use client";
import { TProperty } from "@/types/property";
import {
  ArrowsLeftRight,
  At,
  CaretLeft,
  CaretRight,
  Heart,
  PhoneCall,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

type Props = {
  property: TProperty;
  orientation: "horizontal" | "vertical";
  overlay?: "visible" | "hidden";
};

function PropertyCard({
  property,
  orientation = "vertical",
  overlay = "hidden",
}: Props) {
  const [image, setImage] = useState<string>(property.images[0].filePath);

  const handleNext = () => {
    const index = property.images.findIndex((img) => img.filePath === image);
    if (index < property.images.length - 1) {
      setImage(property.images[index + 1].filePath);
    }
  };

  const handlePrev = () => {
    const index = property.images.findIndex((img) => img.filePath === image);
    if (index > 0) {
      setImage(property.images[index - 1].filePath);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white grid grid-cols-3 gap-4">
      <div
        className={`${
          orientation === "vertical" ? "col-span-3" : "col-span-1"
        } relative`}
      >
        <img
          className={`object-cover w-full ${
            orientation === "vertical" ? "h-64" : "h-full"
          }`}
          src={image}
          alt="Sample"
        />

        <div
          className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 flex-col justify-between ${
            overlay == "visible" ? "flex" : "hidden"
          }`}
        >
          {/* details */}
          <div className="flex gap-2 p-2">
            <p className="text-white text-sm bg-gray-800 p-1 px-2 rounded-md">
              Featured
            </p>
            <p className="text-white text-sm bg-red-600 p-1 px-2 rounded-md">
              {property.status}
            </p>
          </div>

          {/* buttons */}
          <div className="flex justify-between p-2">
            <button className="text-white" onClick={handlePrev}>
              <CaretLeft />
            </button>
            <button className="text-white" onClick={handleNext}>
              <CaretRight />
            </button>
          </div>

          {/* actions */}
          <div className="flex gap-2 p-2 justify-between items-center bg-gray-900 bg-opacity-80">
            <p className="text-white">
              {property?.status == "Sale"
                ? `$${property?.price}`
                : `$${property?.price}/mo`}
            </p>

            <div className="flex gap-2 text-white">
              <Link href="" className="rounded-xl p-2 border border-white">
                <ArrowsLeftRight size="20px" />
              </Link>

              <Link href="" className="rounded-xl p-2 border border-white">
                <Heart size="20px" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          orientation === "vertical" ? "col-span-3" : "col-span-2"
        }`}
      >
        <div className="p-4">
          <p className="text-red-700 text-sm">{property.type}</p>
          <h4 className="font-bold text-base mb-2">{property.title}</h4>
          <p className="text-gray-700 text-sm mb-2">{property.address}</p>

          <div className="flex items-center gap-4">
            <p className="text-gray-700 text-sm">Beds: {property.bedrooms}</p>
            <p className="text-gray-700 text-sm">Baths: {property.bathrooms}</p>
            <p className="text-gray-700 text-sm">{property.propertySize}</p>
          </div>
        </div>

        <div className="flex space-x-2 flex-wrap p-4 justify-between items-center">
          <div className="flex space-x-2 text-red-600">
            <Link href="" className="rounded-xl p-2 border border-red-600">
              <WhatsappLogo size="20px" />
            </Link>

            <Link href="" className="rounded-xl p-2 border border-red-600">
              <PhoneCall size="20px" />
            </Link>

            <Link href="" className="rounded-xl p-2 border border-red-600">
              <At size="20px" />
            </Link>
          </div>

          <div className="flex space-x-2">
            <Link
              href={`/property/${property.id}`}
              className="rounded-xl p-2 border border-red-600 text-red-600"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
