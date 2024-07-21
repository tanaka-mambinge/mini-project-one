import {
  Buildings,
  HouseLine,
  MoneyWavy,
} from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";
import HeroSection from "./HeroSection";
import PropertiesForRent from "./PropertiesForRent";
import PropertiesForSale from "./PropertiesForSale";

const IconCard = ({
  title,
  description,
  icon,
  buttonText,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center gap-4">
        <div className="p-4 rounded-full text-red-600">{icon}</div>
        <h3 className="text-center text-xl">{title}</h3>
      </div>

      <div className="flex flex-col gap-2">
        <p
          className="text-sm
        "
        >
          {description}
        </p>
        <button className="rounded-lg p-2 mt-2 border border-red-600 text-red-600 px-4">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const IconCardList = [
  {
    title: "Buy a Property",
    description:
      "Find your place with an immersive photo experience and most listings, including things you won't find anywhere else.",
    icon: <HouseLine size="64px" />,
    buttonText: "Browse Properties for Sale",
  },
  {
    title: "Sell a Property",
    description:
      "Find your place with an immersive photo experience and most listings, including things you won't find anywhere else.",
    icon: <MoneyWavy size="64px" />,
    buttonText: "See your options",
  },
  {
    title: "Rent a Home",
    description:
      "Find your place with an immersive photo experience and most listings, including things you won't find anywhere else.",
    icon: <Buildings size="64px" />,
    buttonText: "Find Rentals",
  },
];

export const metadata: Metadata = {
  title: "Sold.co.zw | Home",
  description:
    "Sold.co.zw is a property listing platform for Zimbabwean properties. Find your next home or investment property here.",
};

export default function Home() {
  return (
    <>
      {/* hero section */}
      <HeroSection />

      {/* Sale Properties */}
      <div className="bg-gray-100 p-4">
        <div className="container mx-auto">
          <PropertiesForSale />
        </div>
      </div>

      {/* Rent Properties */}
      <div className="p-4 my-4">
        <div className="container mx-auto">
          <PropertiesForRent />
        </div>
      </div>

      {/* Other cards */}
      <div className="bg-gray-100 p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IconCardList.map((card, index) => (
              <IconCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
