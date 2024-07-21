"use client";
import PropertySlider from "@/components/PropertySlider";
import { useGetLatestProperty } from "@/hooks/useGetLatestProperty";

type Props = {};

function PropertiesForRent({}: Props) {
  const { data, error, isLoading } = useGetLatestProperty();

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error loading properties</>;

  return (
    <div>
      <h2 className="text-2xl mb-4">Properties for Rent</h2>

      {data ? (
        <PropertySlider properties={data?.rentalProperties || []} />
      ) : (
        <>Error loading properties</>
      )}
    </div>
  );
}

export default PropertiesForRent;
