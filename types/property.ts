export type TProperty = {
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
};
