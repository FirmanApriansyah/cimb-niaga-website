import { Dot } from "lucide-react";

export default function DepositsContent() {
  return (
    <>
      <p className="text-slate-700">
      Grow your wealth with confidence through our secure deposit solutions.
      Enjoy competitive fixed returns, flexible tenures, and peace of mind knowing your funds are protected while they grow steadily over time.
      </p>
      <div className="mt-3 rounded-sm bg-slate-50 p-4">
        <h2 className="text-xl">Key Benefits</h2>
        <ul className="gap-2 pt-3">
          <li className="flex items-start gap-3 pt-1">
            <div className="">
            <Dot className="scale-[200%] text-[#7B011E]" />
            </div>
            <p className="leading-relaxed text-slate-700">
            Attractive fixed interest rates with predictable return
            </p>
          </li>
          <li className="flex items-start gap-3 pt-2">
            <div className="">
            <Dot className="scale-[200%] text-[#7B011E]" />
            </div>
            <p className="leading-relaxed text-slate-700">
            Flexible deposit terms tailored to your financial goals
            </p>
          </li>
          <li className="flex items-start gap-3 pt-2">
            <div className="">
            <Dot className="scale-[200%] text-[#7B011E]" />
            </div>
            <p className="leading-relaxed text-slate-700">
            Safe and reliable investment backed by trusted banking services
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
