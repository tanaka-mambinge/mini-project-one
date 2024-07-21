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
  data: Property[];
}

const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
  }).then(async (res) => {
    if (res.status === 200) {
      const data: ApiResponse = await res.json();

      const transformedData: TProperty[] = data.data.map((property) => {
        return {
          id: property.id,
          title: property.title,
          description: property.description,
          status: property.status,
          type: property.type,
          currency: property.currency,
          price: property.price,
          publishedAs: property.publishedAs,
          address: property.address,
          bedrooms: property.bedrooms,
          bathrooms: property.bathrooms,
          propertySize: property.propertySize,
          yearBuilt: property.yearBuilt,
          images: property.images,
        };
      });

      return transformedData;
    } else {
      throw new Error("An error occurred");
    }
  });

export function useSearchProperties(filter: "sale" | "rent") {
  let url = null;

  if (filter === "sale") {
    url = `https://fsboafrica.com/api/properties/for-sale?search=for-sale`;
  }
  if (filter === "rent") {
    url = `https://fsboafrica.com/api/properties/for-sale?search=to-rent`;
  }

  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data: data,
    isLoading,
    error,
  };
}
