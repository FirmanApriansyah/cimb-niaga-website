import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <div className="flex gap-3">
          <button onClick={() => setOpen(!open)} className="z-50 lg:hidden">
            {open ? (
              <X size={28} className="md:h-8 md:w-8" />
            ) : (
              <Menu size={28} className="md:h-8 md:w-8" />
            )}
          </button>

          <div className="flex items-center md:pl-3 lg:pl-8 xl:pl-15">
            <div className="">
              <div className="h-3 w-6 skew-x-30 bg-red-600 md:h-4 md:w-8"></div>
              <div className="h-3 w-6 -skew-x-30 bg-red-800 md:h-4 md:w-8"></div>
            </div>
            <h1 className="pl-2 text-lg font-semibold md:pl-3 md:text-2xl lg:text-3xl">
              {" "}
              <span className="text-red-600">CIMB</span> NIAGA
            </h1>
          </div>
        </div>

        <div className="hidden gap-4 md:gap-5 lg:flex lg:gap-8">
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("Home");
            }}
            href="#"
            className="relative text-base text-black after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full md:text-lg"
          >
            Home
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("About");
            }}
            href="#"
            className="relative text-base text-black after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full md:text-lg"
          >
            About us
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("Services");
            }}
            href="#"
            className="relative text-base text-black after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full md:text-lg"
          >
            Services
          </a>
          <a
          onClick={(e) => {
              e.preventDefault();
              scrollToSection("Contact");
            }}
            href="#"
            className="relative text-base text-black after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full md:text-lg"
          >
            Contact us
          </a>
        </div>

        <div
          className={`fixed top-full left-0 flex w-full transform flex-col gap-3 bg-white p-4 text-center shadow-md backdrop-blur-xl transition-all duration-700 md:gap-4 md:p-5 ${open ? "-translate-y-1 opacity-100" : "-translate-y-full opacity-0"} lg:hidden`}
        >
          <a onClick={(e) => {
              e.preventDefault();
              scrollToSection("Home");
              setOpen(false);
            }}
            href="#" className="text-sm text-black md:text-lg">
            Home
          </a>
          <a onClick={(e) => {
              e.preventDefault();
              scrollToSection("About");
              setOpen(false);
            }}
            href="#" className="text-sm text-black md:text-lg">
            About us
          </a>
          <a onClick={(e) => {
              e.preventDefault();
              scrollToSection("Services");
              setOpen(false);
            }}
            href="#" className="text-sm text-black md:text-lg">
            Services
          </a>
          <a onClick={(e) => {
              e.preventDefault();
              scrollToSection("Contact");
              setOpen(false);
            }}
            href="#" className="text-sm text-black md:text-lg">
            Contact us
          </a>
        </div>

        <div className="group z-50">
          <Link
            to="/download"
            className="md:text-base rounded-md bg-[#7B011E] px-4 py-2 text-sm font-semibold text-white shadow-md group-hover:opacity-80 lg:px-8 lg:py-3"
          >
            <span className="lg:hidden">Download</span>
            <span className="hidden lg:inline">Download CIMB NIAGA</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
