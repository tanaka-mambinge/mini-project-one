import { Metadata } from "next";
import Results from "./Results";

type Props = {};

export const metadata: Metadata = {
  title: "Sold.co.zw | Search",
  description:
    "Sold.co.zw is a property listing platform for Zimbabwean properties. Find your next home or investment property here.",
};

function Page({}: Props) {
  return <Results />;
}

export default Page;
