import { Dot } from "lucide-react";

export default function SavingsContent() {
  return (
    <>
      <p className="text-slate-700">
        Save securely with our premium savings account, offering competitive
        interest rates and the flexibility to access your funds whenever you
        need them. Build your financial future with confidence.
      </p>
      <div className="mt-3 rounded-sm bg-slate-50 p-4">
        <h2 className="text-xl">Key Benefits</h2>
        <ul className="gap-2 pt-3">
          <li className="flex items-start gap-3 pt-1">
            <div className="">
            <Dot className="scale-[200%] text-[#7B011E]" />
            </div>
            <p className="leading-relaxed text-slate-700">
              Competitive interest rates that help your money grow
            </p>
          </li>
          <li className="flex items-start gap-3 pt-2">
            <div className="">
            <Dot className="scale-[200%] text-[#7B011E]" />
            </div>
            <p className="leading-relaxed text-slate-700">
              Flexible withdrawals with no hidden penalties
            </p>
          </li>
          <li className="flex items-start gap-3 pt-2">
            <div className="">
            <Dot className="scale-[200%] text-[#7B011E]" />
            </div>
            <p className="leading-relaxed text-slate-700">
              Secure and reliable banking you can trust
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
