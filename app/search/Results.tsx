"use client";
import PropertyCard from "@/components/PropertyCard";
import { useSearchProperties } from "@/hooks/useSearchProperties";
import { List, SquaresFour } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

type Props = {};

function Results({}: Props) {
  const [filter, setFilter] = useState<"sale" | "rent">("sale");
  const [display, setDisplay] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { data, error, isLoading } = useSearchProperties(filter);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as "sale" | "rent");
  };

  useEffect(() => {
    setPage(1);
  }, [filter, itemsPerPage]);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {/* filter */}
      <div className="sm:col-span-1 md:col-span-2 lg:col-span-1">
        {/* card */}
        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col space-y-2">
          <select
            className="p-2 rounded-lg border border-gray-200"
            onChange={handleFilterChange}
          >
            <option value="sale">For Sale</option>
            <option value="rent">For Rent</option>
          </select>

          <input
            type="text"
            placeholder="Suburb, City, Province, Country"
            className="p-2 rounded-lg border border-gray-200 w-full"
          />

          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Min Price"
              className="p-2 rounded-lg border border-gray-200 w-full"
            />

            <input
              type="text"
              placeholder="Max Price"
              className="p-2 rounded-lg border border-gray-200 w-full"
            />

            <input
              type="text"
              placeholder="Min Beds"
              className="p-2 rounded-lg border border-gray-200 w-full"
            />

            <input
              type="text"
              placeholder="Max Beds"
              className="p-2 rounded-lg border border-gray-200 w-full"
            />
          </div>
        </div>
      </div>

      {/* property list */}
      <div className="sm:col-span-1 md:col-span-2 lg:col-span-3 flex flex-col space-y-4">
        {/* results card */}
        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 flex justify-between items-center">
          <p>Sort by:</p>
          <p>Results: {data?.length}</p>

          <div className="flex space-x-2">
            <button
              className="rounded-md border-red-600 border text-red-600 p-2"
              onClick={() => setDisplay("grid")}
            >
              <SquaresFour size="20px" />
            </button>

            <button
              className="rounded-md border-red-600 border text-red-600 p-2"
              onClick={() => setDisplay("list")}
            >
              <List size="20px" />
            </button>
          </div>
        </div>

        {/* properties */}
        {display === "grid" ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data
              ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  orientation="vertical"
                  overlay="visible"
                />
              ))}
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            {data
              ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  orientation="horizontal"
                  overlay="visible"
                />
              ))}
          </div>
        )}

        {/* pagination */}
        <Pagination
          nItems={data?.length || 0}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default Results;
