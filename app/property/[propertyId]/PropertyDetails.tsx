"use client";
import Divider from "@/components/Divider";
import { useGetPropertyById } from "@/hooks/useGetPropertyById";
import { Button } from "@headlessui/react";
import {
  EnvelopeSimple,
  FacebookLogo,
  LinkedinLogo,
  PhoneCall,
  WhatsappLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import PropertyImageSelector from "./PropertyImageSelector";

type Props = { propertyId: string };

const socialLinks = [
  {
    title: "Facebook",
    icon: FacebookLogo,
    href: "",
    color: "#1877F2",
  },
  {
    title: "Whatsapp",
    icon: WhatsappLogo,
    href: "",
    color: "#25D366",
  },
  {
    title: "LinkedIn",
    icon: LinkedinLogo,
    href: "",
    color: "#0077B5",
  },
  { title: "X", icon: XLogo, href: "", color: "#000000" },
  {
    title: "Email",
    icon: EnvelopeSimple,
    href: "",
    color: "#333",
  },
];

function PropertyDetails({ propertyId }: Props) {
  const { data, error, isLoading } = useGetPropertyById(propertyId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="col-span-3 flex flex-col space-y-4 lg:col-span-2">
          {/* title and location */}
          <div className="flex justify-between h-24 flex-col lg:flex-row">
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-bold">{data?.title}</h2>
              <p className="text-gray-500">{data?.address}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                {data?.status == "Sale"
                  ? `$${data?.price}`
                  : `$${data?.price}/mo`}
              </h3>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <PropertyImageSelector images={data?.images || []} />
          </div>

          {/* card */}
          <div className="flex flex-col space-y-4 p-4 bg-white rounded-lg shadow-lg border border-gray-200">
            <div>
              <h2 className="text-2xl font-bold">Description</h2>
              <p>
                {data?.description ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quae."}
              </p>
            </div>

            {/* divider */}
            <Divider />

            <div>
              <h2 className="text-2xl font-bold mb-4">Property Details</h2>
              <div className="grid grid-cols-3 gap-4">
                <p>Property ID: {data?.id}</p>
                <p>Property Type: {data?.type}</p>
                <p>Property Status: {data?.status}</p>
                <p>Property Size: {data?.propertySize}</p>
                <p>Year Built: {data?.yearBuilt}</p>
                <p>
                  Property Price:{" "}
                  {data?.status == "Sale"
                    ? `$${data?.price}`
                    : `$${data?.price}/mo`}
                </p>
              </div>
            </div>

            {/* divider */}
            <Divider />

            <div>
              <h2 className="text-2xl font-bold mb-4">Property Features</h2>
              <div className="grid grid-cols-3 gap-4">
                <p>Beds: {data?.bedrooms}</p>
                <p>Baths: {data?.bathrooms}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 flex flex-col space-y-4 lg:col-span-1">
          <div className="h-24">
            <p className="text-lg font-bold">Share on:</p>

            <div className="flex space-x-2 flex-wrap">
              {socialLinks.map((link) => (
                <Link
                  href={link.href}
                  className="rounded-sm p-2"
                  color="red"
                  key={link.title}
                  style={{ backgroundColor: link.color }}
                >
                  <link.icon size="28px" color="white" />
                </Link>
              ))}
            </div>
          </div>

          {/* card */}
          <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
            <img
              src="/assets/images/housing-investment.png"
              alt="Sample"
              className="w-full rounded-lg"
            />

            <div className="p-4 flex flex-col space-y-4 align-center">
              <h2 className="text-2xl font-bold text-center">
                Housing Investment
              </h2>
              <Button className="roundedlg border-red-600 border-2 text-red-600 p-2 flex justify-center align-center">
                <WhatsappLogo size="24px" color="red" />
                <span className="ml-2">Whatsapp agent</span>
              </Button>
              <Button className="roundedlg border-red-600 border-2 text-red-600 p-2 flex justify-center align-center">
                <PhoneCall size="24px" color="red" />
                <span className="ml-2">Call agent</span>
              </Button>
            </div>

            {/* contact form */}

            <div className="flex flex-col space-y-4 p-4">
              <input
                type="text"
                placeholder="First name"
                className="p-2 rounded-lg border border-gray-200"
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-2 rounded-lg border border-gray-200"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded-lg border border-gray-200"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="p-2 rounded-lg border border-gray-200"
              />
              <textarea
                placeholder="Message"
                className="p-2 rounded-lg border border-gray-200"
                rows={4}
              ></textarea>

              <Button
                className="rounded-full bg-red-600 text-white p-2"
                type="submit"
              >
                Send Message
              </Button>

              <p>
                By sending enquiry messages, you agree to Sold.co.zw&apos;s{" "}
                <Link href="" className="text-red-600">
                  Terms & conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;
