import { Landmark, Briefcase, Camera } from "lucide-react";
import { MdPublic } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#79011D] p-4 pt-14 text-white">
      <div className="container">
        {/* Title */}
        <div className="lg:flex lg:justify-between lg:items-start">
        <div className="lg:w-[50%]">
        <div className="flex items-center gap-2">
          <Landmark size={35} className="text-white" />
          <h1 className="text-2xl md:text-3xl font-bold text-white">CIMB Niaga</h1>
        </div>

        <div>
          <p className="text-white/90 pt-6 leading-relaxed tracking-wide">
            Forward Banking. We are committed to providing you with financial
            solutions that move you forward. Trusted by millions for secure and
            innovative banking.
          </p>
        </div>

        <div className="pt-8 flex gap-6">
          <div className="rounded-full p-4 bg-white/10 w-fit">
            <Briefcase size={25} className="text-white" />
          </div>

          <div className="rounded-full p-4 bg-white/10 w-fit">
            <FaHeadset size={25} className="text-white" />
          </div>
          <div className="rounded-full p-4 bg-white/10 w-fit">
            <Camera size={25} className="text-white" />
          </div>

          <div className="rounded-full p-4 bg-white/10 w-fit">
            <MdPublic size={25} className="text-white" />
          </div>
        </div>
        </div>

        <div>
        <div className="grid pt-12 grid-cols-2 md:grid-cols-3 lg:pt-0 gap-10">
          <div className="grid gap-2">
            <h1 className="text-xl font-semibold pb-3">Company</h1>
            <h3 className="text-white/90">About Us</h3>
            <h3 className="text-white/90">Careers</h3>
            <h3 className="text-white/90">Investor Relations</h3>
            <h3 className="text-white/90">News & Insights</h3>
          </div>

          <div className="grid gap-2">
            <h1 className="text-xl font-semibold pb-3">Support</h1>
            <h3 className="text-white/90">Contact Center</h3>
            <h3 className="text-white/90">Find a Branch</h3>
            <h3 className="text-white/90">Help & FAQs</h3>
            <h3 className="text-white/90">Security Center</h3>
          </div>

          <div className="grid gap-2">
            <h1 className="text-xl font-semibold pb-3">Services</h1>
            <h3 className="text-white/90">Personal Banking</h3>
            <h3 className="text-white/90">Business Bankingh</h3>
            <h3 className="text-white/90">Islamic Banking</h3>
            <h3 className="text-white/90">Credit Cards</h3>
          </div>
        </div>
        </div>
        </div>

        <div className="mt-12 py-8 border-t border-white/20">
          <p className="text-white/70 text-center">
            &copy; {new Date().getFullYear()} CIMB Niaga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
