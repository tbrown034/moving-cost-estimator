"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

export default function Header2() {
  return (
    <nav>
      <section className="flex items-center justify-between px-8 py-4 bg-emerald-800 text-slate-200">
        <div>
          <Link href="/" className="flex hover:text-gray-900 ">
            <span
              className="material-symbols-outlined text-slate-100 "
              style={{ fontSize: "40px" }}
            >
              move
            </span>
            <span className="self-center pl-3 text-2xl font-semibold whitespace-nowrap ">
              ShipIt
            </span>
          </Link>
        </div>

        {/* New div added here */}
        <div className="justify-center flex-1 hidden gap-8 sm:flex">
          <Link href="/">Home</Link>
          <Link href="/build">Build Your Move</Link>
          <Link href="/about">About</Link>
        </div>

        {/* Class modified here */}
        <Menu as="div" className="relative inline-block text-left sm:hidden">
          <Menu.Button
            className="material-symbols-outlined text-slate-100 "
            style={{ fontSize: "40px" }}
          >
            menu
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg bg-slate-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/"
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Home
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/build"
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Build Your Move
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/about"
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flexrounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      About
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </section>
    </nav>
  );
}
