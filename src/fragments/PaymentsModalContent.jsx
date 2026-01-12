import { Dot } from "lucide-react";

export default function PaymentsContent() {
  return (
    <>
      <p className="text-slate-700">
      Make everyday transactions simple, fast, and secure.
      Experience seamless digital payments with instant transfers, QR-based payments, and real-time tracking—anytime and anywhere.
      </p>
      <div className="mt-3 rounded-sm bg-slate-50 p-4">
        <h2 className="text-xl">Key Benefits</h2>
        <ul className="gap-2 pt-3">
          <li className="flex items-start gap-3 pt-1">
            <div className="">
            <Dot className="scale-[200%] text-[#7B011E]" />
            </div>
            <p className="leading-relaxed text-slate-700">
            Quick and secure transactions with QR and instant transfer
            </p>
          </li>
          <li className="flex items-start gap-3 pt-2">
            <div className="">
            <Dot className="scale-[200%] text-[#7B011E]" />
            </div>
            <p className="leading-relaxed text-slate-700">
            Easy payment management through a single platform
            </p>
          </li>
          <li className="flex items-start gap-3 pt-2">
            <div className="">
            <Dot className="scale-[200%] text-[#7B011E]" />
            </div>
            <p className="leading-relaxed text-slate-700">
            Reliable digital infrastructure you can trust
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
