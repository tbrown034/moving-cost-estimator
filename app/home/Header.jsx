"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../public/Images/favicon-32x32.png";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Build Your Estimate", href: "/build", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-emerald-800 text-slate-50">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-slate-50 hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex items-center justify-between flex-1 sm:items-stretch sm:justify-start">
                <Link
                  href="/"
                  className="flex items-center pr-2 sm:pr-4 lg:pr-8"
                >
                  <Image
                    className="hidden w-auto h-8 lg:block"
                    src={logo}
                    alt="Your Company"
                  ></Image>
                  <span className="hidden pl-3 text-2xl font-bold lg:block text-slate-50 whitespace-nowrap">
                    ShipIt
                  </span>
                </Link>

                <div className="hidden sm:flex sm:items-center sm:justify-center sm:flex-1">
                  <div className="flex justify-center space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-slate-300 text-emerald-800"
                            : "text-gray-300   hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  href="build-estimate"
                  className="p-1 border-2 rounded-lg hover:bg-slate-50 hover:text-emerald-800 border-slate-50"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          {/* Mobile Dropdown menu */}

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pb-3 space-y-1 rounded-lg">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-slate-50 w-5/12 text-emerald-800"
                      : "text-gray-300   hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
