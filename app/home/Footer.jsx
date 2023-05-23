import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Images/favicon-32x32.png";
export default function Footer() {
  return (
    <>
      <footer className="bg-emerald-800 text-slate-100 ">
        <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 text-gray-300 sm:mb-0 hover:text-white"
            >
              <Image src={logo} alt="logo"></Image>
              <span className="self-center pl-3 text-2xl font-semibold whitespace-nowrap ">
                ShipIt
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-mediumsm:mb-0">
              <li>
                <Link
                  href="/about"
                  className="mr-4 text-gray-300 hover:text-white md:mr-6 "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="mr-4 text-gray-300 hover:text-white md:mr-6"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="mr-4 text-gray-300 hover:text-white md:mr-6 "
                >
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm sm:text-center">
            © 2023{" "}
            <Link href="/" className="text-gray-300 hover:text-white">
              ShipIt™
            </Link>{" "}
            All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
