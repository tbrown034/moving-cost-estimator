import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen bg-slate-200 text-emerald-800">
        <div className="">
          <div className="relative px-3 py-1 my-8 text-sm leading-6 rounded-full text-emerald-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-slate-100">
            Using AI-Powered Tech to Fuel Your Move.{" "}
            <Link href="#" className="font-semibold text-emerald-800">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-6xl font-bold tracking-wide sm:text-6xl">
            ship<span className=" text-emerald-600">It</span>
          </h1>
          <div className="flex justify-center p-4">
            <span
              className="text-6xl material-symbols-outlined text-emerald-800"
              style={{ fontSize: "80px" }}
            >
              move
            </span>
          </div>
          <p className="text-lg leading-8 ">
            Moving is stressful enough. Not knowing how much to bring - and how
            much it will cost - can be a headache. But we'll help carry that
            load now with some AI-powered magic!
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              href="#"
              className="rounded-md bg-emerald-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 hover:text-slate-200 "
            >
              Get started
            </Link>
            <Link
              href="#"
              className="rounded-md text-emerald-800 px-3.5 py-2.5 text-sm font-semibold bg-white shadow-sm hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-80000"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
