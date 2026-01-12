/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function HeroSection({ id }) {
  return (
    <section
      id={id}
      className="bg-[#7B011E]  w-full pt-25 pb-8 md:pt-28 lg:pt-10 lg:pb-0 2xl:pt-0"
    >
      <div className="container">
      <div className="grid relative min-h-screen grid-cols-1 lg:grid-cols-2 items-center gap-2">

      <div className="absolute inset-0 overflow-hidden ">
        <div className="bg-gradient-radial absolute inset-0 animate-pulse from-white/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float absolute top-[20%] left-[10%] h-16 w-16 rounded-full bg-white/10 md:h-20 md:w-20"></div>
          <div className="animate-float-delayed absolute top-[60%] left-[80%] h-12 w-12 rounded-full bg-white/10 md:h-16 md:w-16"></div>
          <div className="animate-float-slow absolute top-[70%] left-[20%] h-20 w-20 rounded-2xl bg-white/5 md:h-24 md:w-24"></div>
        </div>
      </div>

        <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
        duration: 1,
        ease: "easeOut"
          }}>
        <div className="relative z-10 flex w-full justify-center">
          <div className="bg- w-full md:max-w-187.5 lg:w-[85%]">
            <div className="flex gap-2 pl-2 md:gap-4">
              <div>
                <div className="h-3 w-6 skew-x-30 bg-red-300 md:h-4 md:w-8"></div>
                <div className="h-3 w-6 -skew-x-30 bg-red-500 md:h-4 md:w-8"></div>
              </div>
              <h1 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
                CIMB Niaga
              </h1>
            </div>

            <div className="pt-3 md:pt-4">
              <h1 className="max-w-full text-3xl leading-tight font-semibold text-white md:text-4xl md:leading-snug lg:max-w-[95%] lg:text-5xl lg:leading-15 2xl:text-6xl 2xl:leading-18">
                Modern Banking Solutions for Your Future
              </h1>
            </div>

            <div className="pt-3 md:pt-4">
              <p className="max-w-full text-base leading-6 text-white md:text-lg md:leading-7 lg:max-w-[80%] lg:text-xl lg:leading-8">
                Enjoy the convenience of digital banking with comprehensive
                features, guaranteed security, and 24/7 service. Achieve your
                financial goals with CIMB Niaga.
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-full grid-cols-1 gap-4 pt-8 md:mt-1 md:gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
              <div className="group">
                <a
                  href="#"
                  className="block transform rounded-md bg-[#F5F1E6] px-6 py-3 text-center text-sm font-bold text-red-700 shadow-md transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl md:px-8 md:py-4 md:text-base"
                >
                  Open an Account
                </a>
              </div>
              <div className="group">
                <a
                  href=""
                  className="block transform rounded-md border border-[#F5F1E6] px-6 py-3 text-center text-sm font-bold text-white shadow-md outline-1 transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#F5F1E6] group-hover:text-red-700 group-hover:shadow-xl md:px-8 md:py-4 md:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        </motion.div>

        <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
        duration: 1,
        ease: "easeOut"
          }}>
        <div className="relative z-10 mx-auto flex w-full justify-center pt-8 pb-5 md:pt-10 lg:pt-0 lg:pb-0">
          <div className="animate-float relative w-full max-w-[320px] rounded-2xl bg-[#F5F1E6] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] md:max-w-125 md:p-8 lg:w-137.5 lg:p-10">
            <div className="h-40 w-full rounded-xl bg-[#7B011E] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] md:h-48 md:p-7 lg:h-52 lg:p-8">
              <div className="h-8 w-10 rounded-md bg-yellow-500 md:h-9 md:w-11 lg:h-10 lg:w-12.5"></div>
              <div className="mt-6 flex items-center gap-2 md:mt-8 md:gap-3 lg:mt-10">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#F5F1E6] md:h-2 md:w-2"
                  ></div>
                ))}
                <div className="ml-3 flex gap-2 md:ml-4 md:gap-3 lg:ml-5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-[#F5F1E6] md:h-2 md:w-2"
                    ></div>
                  ))}
                </div>
                <div className="ml-3 flex gap-2 md:ml-4 md:gap-3 lg:ml-5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-[#F5F1E6] md:h-2 md:w-2"
                    ></div>
                  ))}
                </div>
                <h1 className="ml-2 text-lg font-semibold tracking-[0.15em] text-white md:ml-3 md:text-xl md:tracking-[0.2em] lg:text-2xl">
                  4567
                </h1>
              </div>
              <div className="mt-2 flex justify-between leading-3">
                <div>
                  <p className="text-xs text-white md:text-sm">CARD HOLDER</p>
                  <p className="text-xs font-semibold text-white md:text-sm">
                    YOU ARE A CUSTOMER
                  </p>
                </div>
                <div>
                  <p className="text-right text-xs text-white md:text-sm">
                    VALID THRU
                  </p>
                  <p className="text-right text-xs font-semibold text-white md:text-sm">
                    12/28
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="mt-6 rounded-xl bg-white p-3 shadow-[0_4px_15px_rgba(0,0,0,0.1)] md:mt-8 md:p-4">
                <h1 className="text-2xl font-bold text-red-700 md:text-3xl">
                  15+
                </h1>
                <p className="pt-1 text-xs font-semibold text-slate-400 md:text-sm">
                  Million Customers
                </p>
              </div>
              <div className="mt-6 rounded-xl bg-white p-3 shadow-[0_4px_15px_rgba(0,0,0,0.1)] md:mt-8 md:p-4">
                <h1 className="text-2xl font-bold text-red-700 md:text-3xl">
                  500+
                </h1>
                <p className="pt-1 text-xs font-semibold text-slate-400 md:text-sm">
                  Branches
                </p>
              </div>
              <div className="rounded-xl bg-white p-3 shadow-[0_4px_15px_rgba(0,0,0,0.1)] md:p-4">
                <h1 className="text-2xl font-bold text-red-700 md:text-3xl">
                  24/7
                </h1>
                <p className="pt-1 text-xs font-semibold text-slate-400 md:text-sm">
                  Services
                </p>
              </div>
              <div className="rounded-xl bg-white p-3 shadow-[0_4px_15px_rgba(0,0,0,0.1)] md:p-4">
                <h1 className="text-2xl font-bold text-red-700 md:text-3xl">
                  99.9%
                </h1>
                <p className="pt-1 text-xs font-semibold text-slate-400 md:text-sm">
                  Uptime
                </p>
              </div>
            </div>
          </div>
        </div>
        </motion.div>

      </div>
      </div>
    </section>
  );
}
