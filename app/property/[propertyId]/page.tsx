import { Metadata } from "next";
import PropertyDetails from "./PropertyDetails";

type Props = {
  params: { propertyId: string };
};

export const metadata: Metadata = {
  title: "Sold.co.zw | Property",
  description:
    "Sold.co.zw is a property listing platform for Zimbabwean properties. Find your next home or investment property here.",
};

function Page({ params }: Props) {
  return <PropertyDetails propertyId={params.propertyId} />;
}

export default Page;
