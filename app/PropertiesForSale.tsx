"use client";
import PropertySlider from "@/components/PropertySlider";
import { useGetLatestProperty } from "@/hooks/useGetLatestProperty";

type Props = {};

function PropertiesForSale({}: Props) {
  const { data, error, isLoading } = useGetLatestProperty();
  console.log(data);

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error loading properties</>;

  return (
    <div>
      <h2 className="text-2xl mb-4">Properties for Sale</h2>

      {data ? (
        <PropertySlider properties={data?.saleProperties || []} />
      ) : (
        <>Error loading properties</>
      )}
    </div>
  );
}

export default PropertiesForSale;
