"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col items-center justify-around px-10 py-10 min-h-80vh bg-slate-200 text-emerald-800">
        <Link
          href="/"
          className="flex flex-col items-center justify-center px-8 rounded-full sm:block text-emerald-900 ring-1 ring-emerald-900/10 hover:ring-emerald-900/20 bg-slate-100 hover:bg-slate-50"
        >
          <span>Using AI-Powered Tech to Fuel Your Move.</span>
          <span className="font-bold"> Read More</span>
        </Link>

        <div className="space-y-1 text-center">
          <h1 className="text-6xl font-bold tracking-wide sm:text-6xl">
            ship<span className=" text-emerald-600">It</span>
          </h1>
          <div className="flex justify-center p-4">
            <motion.span
              className="text-6xl material-symbols-outlined text-emerald-800"
              style={{ fontSize: "80px" }}
              whileHover={{ rotate: 360 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
              transition={{ duration: 1 }}
            >
              move
            </motion.span>
          </div>
          <p className="text-2xl leading-8 sm:px-28">
            Moving is stressful enough. But we'll help carry that load now with
            some AI-powered magic!
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              href="#"
              className="rounded-md bg-emerald-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
            >
              Get started
            </Link>
            <Link
              href="#"
              className="rounded-md text-emerald-800 px-3.5 py-2.5 text-sm font-semibold bg-white shadow-sm hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
