import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* spacer */}
      <div className="h-16"></div>

      {/* footer */}
      <div className="bg-blue-950 text-white p-4">
        <div className="flex justify-between container mx-auto flex-col md:flex-row gap-4">
          <div>&copy; {currentYear} Sold.co.zw. All rights reserved.</div>

          <div className="flex gap-2 flex-col md:flex-row">
            <Link href="" className="text-white">
              Privacy Policy
            </Link>

            <Link href="" className="text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
