"use client";
import { TProperty } from "@/types/property";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";
import PropertyCard from "./PropertyCard";

type Props = { properties: TProperty[] };

function PropertySlider({ properties }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 3);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 3);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.slice(currentIndex, currentIndex + 3).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          className="rounded-full bg-white border border-red-600 p-2"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <ArrowLeft size="20px" className="text-red-600" />
        </button>
        <button
          className="rounded-full bg-white border border-red-600 p-2"
          onClick={handleNext}
          disabled={currentIndex >= properties.length - 3}
        >
          <ArrowRight size="20px" className="text-red-600" />
        </button>
      </div>
    </>
  );
}

export default PropertySlider;
