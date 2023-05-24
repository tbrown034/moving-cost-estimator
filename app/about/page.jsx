"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic goes here
  };
  return (
    <>
      <section className="flex flex-col items-center justify-around gap-4 px-10 py-10 min-h-vh bg-slate-200 text-emerald-800">
        <div className="space-y-1 text-center">
          <h1 className="text-6xl font-bold tracking-wide sm:text-6xl">
            About <span className=" text-emerald-600">shipIt</span>
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
              info
            </motion.span>
          </div>
          <p className="text-2xl leading-8 sm:px-28">
            ShipIt is an innovative project designed to make moving easier.
            Using advanced AI technologies, we simplify the process of planning,
            organizing and managing your move.
          </p>
        </div>

        <div className="mt-10 space-y-1 text-center">
          <h2 className="text-4xl font-bold tracking-wide sm:text-4xl">
            How It <span className=" text-emerald-600">Works</span>
          </h2>
          <p className="text-2xl leading-8 sm:px-28">
            ShipIt uses AI to estimate your moving needs based on a few simple
            questions. This advanced system adapts and learns, providing more
            accurate results the more you use it. No need to stress, let our
            AI-powered tech do the heavy lifting!
          </p>
        </div>

        <div className="mt-10 space-y-1 text-center">
          <h2 className="text-4xl font-bold tracking-wide sm:text-4xl">
            Privacy <span className=" text-emerald-600">Policy</span>
          </h2>
          <p className="text-2xl leading-8 sm:px-28">
            At ShipIt, we value your privacy and are committed to maintaining
            the trust and confidence of our users. We will never sell, rent or
            trade your personal information to other companies for marketing
            purposes. We use the information you provide to facilitate the
            moving process and enhance your experience. Our advanced AI
            technologies are designed to securely process and protect your data.
          </p>
        </div>

        <div className="mt-10 space-y-1 text-center">
          <h2 className="text-4xl font-bold tracking-wide sm:text-4xl">
            About <span className=" text-emerald-600">Me</span>
          </h2>
          <p className="text-2xl leading-8 sm:px-28">
            As a technology enthusiast with a passion for simplifying everyday
            tasks, I created ShipIt to revolutionize the moving industry. My aim
            is to harness the power of AI to provide stress-free moving
            experiences for everyone.
          </p>
        </div>
        <div className="mt-10 space-y-1 text-center">
          <h2 className="text-4xl font-bold tracking-wide sm:text-4xl">
            Contact <span className=" text-emerald-600">Us</span>
          </h2>
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="name"
                >
                  Name
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="email"
                >
                  Email
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="px-4 py-2 font-bold text-white rounded shadow bg-emerald-800 hover:bg-emerald-600 focus:shadow-outline focus:outline-none"
                  type="submit"
                >
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>

        <div>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-emerald-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
            >
              Back to Home
            </Link>
            <Link
              href="/estimator"
              className="rounded-md text-emerald-800 px-3.5 py-2.5 text-sm font-semibold bg-white shadow-sm hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
            >
              Start Your Move
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
