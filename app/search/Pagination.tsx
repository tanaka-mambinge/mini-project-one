"use client";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

type Props = {
  nItems: number;
  itemsPerPage: number;
  page: number;
  setPage: (page: number) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
};

function Pagination({
  nItems,
  itemsPerPage,
  page,
  setPage,
  setItemsPerPage,
}: Props) {
  const nPages = Math.ceil(nItems / itemsPerPage);

  const handleNext = () => {
    if (page < nPages) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      {/* // card */}

      <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 flex space-x-4 justify-center items-center">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className=" p-2 rounded-lg border border-red-600 text-red-600"
        >
          <ArrowLeft size="24px" />
        </button>

        <div className="flex justify-center">
          <p>
            Page {page} of {nPages}
          </p>
        </div>

        <button
          onClick={handleNext}
          disabled={page === nPages}
          className="p-2 rounded-lg border border-red-600 text-red-600"
        >
          <ArrowRight size="24px" />
        </button>

        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="p-2 border border-gray-200 rounded-lg"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </>
  );
}

export default Pagination;
