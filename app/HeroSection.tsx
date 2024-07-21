"use client";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {};

function HeroSection({}: Props) {
  const [buttonGroup, setButtonGroup] = useState<"buy" | "rent">("buy");
  const router = useRouter();

  return (
    <div className="relative">
      <img
        src="https://fsboafrica.com/images/listing-1-6.jpg"
        className="w-full h-96 object-cover"
        alt="hero image"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-start">
        {/* button group */}
        <div className="flex gap-2 rounded-full bg-white p-1">
          <button
            className={`rounded-full px-2 py-1 ${
              buttonGroup === "buy"
                ? "bg-red-600 text-white"
                : "bg-white text-gray-600"
            } `}
            onClick={() => setButtonGroup("buy")}
          >
            For Sale
          </button>
          <button
            className={`rounded-full px-2 py-1 ${
              buttonGroup === "rent"
                ? "bg-red-600 text-white"
                : "bg-white text-gray-600"
            } `}
            onClick={() => setButtonGroup("rent")}
          >
            To Rent
          </button>
        </div>

        <div className="shadow-md p-4 bg-white rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <input
              type="text"
              placeholder="Suburb, City, Province, Country"
              className="p-2 rounded-lg border border-gray-200 w-full col-span-1 lg:col-span-4"
            />
            <button
              className="bg-red-600 text-white rounded-lg p-2 w-24 flex justify-center items-center gap-2 col-span-1 lg:col-span-1 w-full"
              onClick={() => router.push("/search")}
            >
              <MagnifyingGlass size="24px" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
