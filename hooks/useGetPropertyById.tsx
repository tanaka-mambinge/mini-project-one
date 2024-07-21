import { TProperty } from "@/types/property";
import useSWR from "swr";

interface Property {
  id: number;
  title: string;
  description: string;
  status: string;
  type: string;
  currency: string;
  price: string;
  publishedAs: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  propertySize: string;
  yearBuilt: number;
  images: { filePath: string }[];
}

interface ApiResponse {
  status: string;
  data: Property;
}

const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
  }).then(async (res) => {
    if (res.status === 200) {
      const data: ApiResponse = await res.json();

      const transformedData: TProperty = {
        id: data.data.id,
        title: data.data.title,
        description: data.data.description,
        status: data.data.status,
        type: data.data.type,
        currency: data.data.currency,
        price: data.data.price,
        publishedAs: data.data.publishedAs,
        address: data.data.address,
        bedrooms: data.data.bedrooms,
        bathrooms: data.data.bathrooms,
        propertySize: data.data.propertySize,
        yearBuilt: data.data.yearBuilt,
        images: data.data.images,
      };

      return transformedData;
    } else {
      throw new Error("An error occurred");
    }
  });

export function useGetPropertyById(propertyId: string) {
  const url = propertyId
    ? `https://fsboafrica.com/api/properties/details/${propertyId}`
    : null;
  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data: data,
    isLoading,
    error,
  };
}
