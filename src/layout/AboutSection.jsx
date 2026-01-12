/* eslint-disable no-unused-vars */
import "@google/model-viewer";
import creditCard from "../assets/credit_card.glb";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection( { id }) {
  return (
    <section id={id} className="bg-[#F5F1E6] pt-35 w-full pb-32 ">
      <div className="container">
      {/* Title */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut"}}
        viewport={{ once: true, amount: 0.4 }}
      >
      <div className="pb-8 text-center md:pb-12 lg:pb-16">
        <h1 className="text-4xl font-extrabold text-[#7B011E] md:text-5xl lg:text-6xl">
          About Us
        </h1>
        <h3 className="pt-2 text-base font-bold text-[#7B011E] md:pt-3 md:text-xl lg:text-2xl">
          Your Trusted Partner in Modern Banking
        </h3>
        <div className="mx-auto mt-5 h-0.75 w-30 bg-[linear-gradient(to_right,transparent,rgba(139,69,19,0.3),rgba(139,69,19,0.8),rgba(139,69,19,0.3),transparent)] blur-[0.5px] lg:h-1 lg:w-50" />
      </div>
      </motion.div>
      

      {/* Card */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
      <div className="grid grid-cols-1 px-6 gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl bg-linear-to-br from-[#79011d] to-[#5a0015] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)] md:p-5 lg:p-6">
          <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl">
            CIMB <span className="">NIAGA</span>
          </h1>
          <p className="text-md pt-3 text-white md:pt-4 md:text-base lg:pt-5 lg:text-lg xl:pt-6 xl:text-xl">
            CIMB Niaga is a leading bank in Indonesia, offering modern and
            secure banking services through digital innovation and a strong
            branch network to support customers' financial needs, growth, and
            long-term goals.
          </p>
        </div>
        <div className="rounded-xl bg-linear-to-br from-[#79011d] to-[#5a0015] shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
          <model-viewer
            src={creditCard}
            auto-rotate
            camera-orbit="65deg 100deg 20m"
            camera-controls
            className="h-62.5 w-full lg:h-75"
          />
        </div>
      </div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
      <div className="grid grid-cols-1 px-6 gap-4 py-4 md:grid-cols-2">
        <div className="w-full rounded-xl bg-linear-to-br from-[#79011d] to-[#5a0015] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
          <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Digital Banking
          </h1>
          <p className="text-md pt-3 text-white md:pt-4 md:text-base lg:pt-5 lg:text-lg xl:text-xl">
            Seamless digital services designed to make banking easier, faster,
            and more secure anytime, anywhere.
          </p>
        </div>
        <div className="w-full rounded-xl bg-linear-to-br from-[#79011d] to-[#5a0015] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
          <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Financial Solutions
          </h1>
          <p className="text-md pt-3 text-white md:pt-4 md:text-base lg:pt-5 lg:text-lg xl:text-xl">
            Comprehensive financial products tailored to personal, business, and
            corporate needs.
          </p>
        </div>
      </div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
      <div className="grid grid-cols-1 px-6 gap-3 xl:grid-cols-[1.1fr_1fr] 2xl:grid-cols-[0.7fr_1fr]">
        <div>
          <div className="w-full rounded-xl bg-linear-to-br from-[#79011d] to-[#5a0015] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <div>
              <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl">
                GROW WITH CONFIDENCE!
              </h1>
              <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl">
                BANK WITH TRUST!
              </h1>
              <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl">
                SUCCEED TOGEHTHER!
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 pt-3 md:grid-cols-2 lg:pt-0 xl:pl-1">
          <a
            href="https://www.facebook.com/CIMBIndonesia/?locale=id_ID"
            target="blank_"
            className="inline-flex"
          >
            <div className="group relative flex w-full items-center gap-6 rounded-xl bg-linear-to-br from-[#79011d] to-[#5a0015] p-4 text-2xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] md:gap-3">
              <FaFacebookF />
              <h1 className="text-xl font-semibold text-white">Facebook</h1>
              <ArrowUpRight className="transistion absolute right-5 text-white duration-200 group-hover:translate-x-2 group-hover:-translate-y-1 xl:right-7" />
            </div>
          </a>

          <a
            href="https://www.instagram.com/cimb_niaga/"
            target="blank_"
            className="inline-flex"
          >
            <div className="group relative flex w-full items-center gap-6 rounded-xl bg-linear-to-br from-[#79011d] to-[#5a0015] p-4 text-2xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] md:gap-3">
              <FaInstagram />
              <h1 className="text-xl font-semibold text-white">Instagram</h1>
              <ArrowUpRight className="transistion absolute right-5 text-white duration-200 group-hover:translate-x-2 group-hover:-translate-y-1 xl:right-7" />
            </div>
          </a>

          <a
            href="https://x.com/CIMBNiaga?lang=id"
            target="blank_"
            className="inline-flex"
          >
            <div className="group relative flex w-full items-center gap-6 rounded-xl bg-linear-to-br from-[#79011d] to-[#5a0015] p-4 text-2xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] md:gap-3">
              <FaTwitter />
              <h1 className="text-xl font-semibold text-white">twitter</h1>
              <ArrowUpRight className="transistion absolute right-5 text-white duration-200 group-hover:translate-x-2 group-hover:-translate-y-1 xl:right-7" />
            </div>
          </a>

          <a href="#" target="blank_" className="inline-flex">
            <div className="group relative flex w-full items-center gap-6 rounded-xl bg-linear-to-br from-[#79011d] to-[#5a0015] p-4 text-2xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] md:gap-3">
              <FaWhatsapp />
              <h1 className="text-xl font-semibold text-white">Whatsapp</h1>
              <ArrowUpRight className="transistion absolute right-5 text-white duration-200 group-hover:translate-x-2 group-hover:-translate-y-1 xl:right-7" />
            </div>
          </a>
        </div>
      </div>
      </motion.div>
      </div>
    </section>
  );
}
