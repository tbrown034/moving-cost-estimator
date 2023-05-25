"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Contact from "./contact";
import Image from "next/image";
import trevor from "../../public/Images/Trevor12.JPG";

export default function Page() {
  return (
    <>
      <section className="flex flex-col items-center gap-6 py-10 px-14 min-h-vh bg-slate-200 text-emerald-800">
        <div className="space-y-4 text-center">
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
          <p className="text-2xl leading-8 ">
            ShipIt is an innovative project designed to make moving easier.
            Using advanced AI technologies, we simplify the process of planning,
            organizing and managing your move.
          </p>
        </div>

        <div className="mt-10 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-wide sm:text-4xl">
            How It <span className=" text-emerald-600">Works</span>
          </h2>
          <p className="text-2xl leading-8 ">
            ShipIt uses AI to estimate your moving needs based on a few simple
            questions. This advanced system adapts and learns, providing more
            accurate results the more you use it. No need to stress, let our
            AI-powered tech do the heavy lifting!
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-10 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-wide sm:text-4xl">
            About <span className=" text-emerald-600">Me</span>
          </h2>
          <Image
            className="rounded-full"
            src={trevor}
            alt="Rounded avatar"
            width={150}
            height={150}
          ></Image>
          <p className="text-2xl leading-8 ">
            Hi, I'm{" "}
            <Link
              className="font-semibold hover:font-bold hover:underline"
              href="https://helloimtrevor.com/"
            >
              Trevor Brown!
            </Link>
            After almost two decades as an investigative journalist, I'm moving
            into the coding world. And as a technology enthusiast with a passion
            for simplifying everyday tasks, I created ShipIt to revolutionize
            the moving industry. My aim is to harness the power of AI to provide
            stress-free moving experiences for everyone.
          </p>
        </div>

        <div className="mt-10 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-wide sm:text-4xl">
            Privacy <span className=" text-emerald-600">Policy</span>
          </h2>
          <p className="text-xl italic leading-8 ">
            At ShipIt, we value your privacy and are committed to maintaining
            the trust and confidence of our users. We will never sell, rent or
            trade your personal information to other companies for marketing
            purposes. <br></br>
            <br></br>We use the information you provide to facilitate the moving
            process and enhance your experience. Our advanced AI technologies
            are designed to securely process and protect your data.
          </p>
        </div>

        <div className="mt-10 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-wide sm:text-4xl">
            Standard <span className=" text-emerald-600">Disclosure</span>
          </h2>
          <p className="text-xl italic leading-8 ">
            The information, estimates, and recommendations ("Information")
            provided by Moving Cost Estimator are for general information,
            research, and entertainment purposes only. While we endeavor to keep
            the information up to date and correct, we make no representations
            or warranties of any kind, express or implied, about the
            completeness, accuracy, reliability, suitability, or availability
            with respect to the information contained on the website for any
            purpose. Any reliance you place on such information is therefore
            strictly at your own risk.<br></br>
            <br></br> The information does not constitute advice, an offer, an
            invitation to offer, a proposal, or an invitation to enter into a
            legally binding contract. In no event will we be liable for any loss
            or damage including without limitation, indirect or consequential
            loss or damage, or any loss or damage whatsoever arising from, out
            of, or in connection with the use of this website and the
            information contained therein. <br></br>
            <br></br> Please seek the advice of professionals, as appropriate,
            regarding the evaluation of any specific information, estimate, or
            content on this website. Moving Cost Estimator is not responsible
            for, and expressly disclaims all liability for, damages of any kind
            arising out of use, reference to, or reliance on any information
            contained within the site. By using this website, you agree to the
            terms of this disclaimer.
          </p>
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
      <Contact />
    </>
  );
}
