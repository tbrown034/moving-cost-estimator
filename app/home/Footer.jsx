import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className=" text-slate-100 bg-emerald-800">
        <div className="w-full max-w-screen-xl p-10 mx-auto md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0 ">
              <span
                className="material-symbols-outlined text-slate-100 "
                style={{ fontSize: "40px" }}
              >
                move
              </span>
              <span className="self-center pl-3 text-2xl font-semibold whitespace-nowrap hover:underline hover:underline-offset-8 ">
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
                  EstimateIt
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="mr-4 text-gray-300 hover:text-white md:mr-6 "
                >
                  Privacy Policy
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
