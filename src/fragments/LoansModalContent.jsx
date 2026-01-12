import { Dot } from "lucide-react";

export default function LoansContent() {
  return (
    <>
      <p className="text-slate-700">
      Turn your plans into reality with our flexible loan solutions.
      Whether for personal needs, a home, or a vehicle, our loans offer fast approval, transparent terms, and competitive rates designed to support your ambitions.
      </p>
      <div className="mt-3 rounded-sm bg-slate-50 p-4">
        <h2 className="text-xl">Key Benefits</h2>
        <ul className="gap-2 pt-3">
          <li className="flex items-start gap-3 pt-1">
            <div className="">
            <Dot className="scale-[200%] text-[#7B011E]" />
            </div>
            <div className="">
            <p className="leading-relaxed text-slate-700">
            Competitive interest rates with clear repayment plans
            </p>
            </div>
          </li>
          <li className="flex items-start gap-3 pt-2">
            <div className="">
            <Dot className="scale-[200%] text-[#7B011E]" />
            </div>
            <div className="">
            <p className="leading-relaxed text-slate-700">
            Fast and simple application process
            </p>
            </div>
          </li>
          <li className="flex items-start gap-3 pt-2">
            <div className="">
            <Dot className="scale-[200%] text-[#7B011E]" />
            </div>
            <p className="leading-relaxed text-slate-700">
            Flexible loan options to suit different financial needs
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
