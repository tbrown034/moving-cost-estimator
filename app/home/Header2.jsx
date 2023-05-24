"use client";
import Link from "next/link";

export default function Header2() {
  return (
    <nav>
      <section className=" bg-emerald-800 text-slate-200">
        <div>
          <Link
            href="/"
            className="flex items-center mb-4 hover:text-gray-900 sm:mb-0 "
          >
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
        <div></div>
        <div></div>
      </section>
    </nav>
  );
}
