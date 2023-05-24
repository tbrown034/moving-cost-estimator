"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HowTo() {
  return (
    <>
      <section className="flex flex-col items-center gap-6 py-10 px-14 min-h-vh bg-slate-200 text-emerald-800">
        <div className="space-y-4 text-center">
          <h1 className="text-6xl font-bold tracking-wide sm:text-6xl">
            Estimate<span className=" text-emerald-600">It</span> and ship
            <span className=" text-emerald-600">It</span>
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
              calculate
            </motion.span>
          </div>
          <p className="text-2xl leading-8 ">
            Simply enter all the applicable fields, including what you plan to
            bring, how many of each unit, what size and more. The more inputs
            you give, the better the AI can craft a good estimate. For more
            information see our{" "}
            <Link
              href="/about"
              className="underline underline-offset-4 hover:font-semibold "
            >
              privacy and disclosure policies
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
