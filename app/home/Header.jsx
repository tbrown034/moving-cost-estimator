"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <section className="flex items-center justify-between px-8 py-4 bg-emerald-800 text-slate-200">
        <div>
          <Link href="/" className="flex ">
            <span
              className="material-symbols-outlined text-slate-100 "
              style={{ fontSize: "40px" }}
            >
              move
            </span>
            <span className="self-center pl-3 text-2xl font-semibold whitespace-nowrap hover:underline hover:underline-offset-8">
              ShipIt
            </span>
          </Link>
        </div>

        <div className="justify-center flex-1 hidden gap-8 sm:flex">
          <Link className="hover:font-semibold focus:font-bold" href="/">
            Home
          </Link>
          <Link
            className="hover:font-semibold focus:font-bold"
            href="/estimator"
          >
            Estimate Your Move
          </Link>
          <Link className="hover:font-semibold focus:font-bold" href="/about">
            About
          </Link>
        </div>
        <Link
          href="/estimator"
          className="hidden p-2 rounded-lg border-1 sm:block border-slate-50 hover:bg-slate-200 hover:text-emerald-900 focus:ring-2 focus:ring-offset-1"
        >
          Get Started
        </Link>
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
                        active
                          ? "bg-emerald-800 text-white"
                          : "text-emerald-900"
                      } group flex rounded-md items-center w-3/5 px-2 py-2 text-sm`}
                    >
                      Home
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/estimator"
                      className={`${
                        active
                          ? "bg-emerald-800 text-white"
                          : "text-emerald-900"
                      } group flex rounded-md items-center w-3/5 px-2 py-2 text-sm`}
                    >
                      Estimate Your Move
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/about"
                      className={`${
                        active
                          ? "bg-emerald-800 text-white"
                          : "text-emerald-900"
                      } group flex rounded-md items-center  w-3/5 px-2 py-2 text-sm`}
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
