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
  data: {
    latestPropertiesForSale: Property[];
    latestPropertiesToRent: Property[];
  };
}

interface Response {
  saleProperties: TProperty[];
  rentalProperties: TProperty[];
}

const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
  }).then(async (res) => {
    if (res.status === 200) {
      const data: ApiResponse = await res.json();

      const transformedData: Response = {
        saleProperties: data.data.latestPropertiesForSale.map((property) => ({
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
        })),
        rentalProperties: data.data.latestPropertiesToRent.map((property) => ({
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
        })),
      };

      return transformedData;
    } else {
      throw new Error("An error occurred");
    }
  });

export function useGetLatestProperty() {
  const { data, error, isLoading } = useSWR(
    `https://fsboafrica.com/api/properties/latest`,
    fetcher
  );

  return {
    data: data,
    isLoading,
    error,
  };
}
