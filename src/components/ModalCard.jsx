import { X } from "lucide-react";

export default function ModalCard({ learnCard, onClose, title, content }) {
  return (
    <div
      className={`fixed inset-0 z-9999 flex transform items-center justify-center transition-all duration-700 ease-in-out ${learnCard ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black transition-opacity duration-700 ease-in-out ${learnCard ? "opacity-50" : "opacity-0"}`}
      />

      {/* Modal Content */}
      <div
        className={`relative w-[85%] max-w-md rounded-xl bg-white p-6 transition-all duration-700 ease-in-out ${learnCard ? "translate-x-0" : "translate-y-2"}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 transition-colors hover:text-slate-700"
        >
          <X size={25} />
        </button>
        <h2 className="text-3xl text-black">{title}</h2>
        <div className="mt-4">{content}</div>
      </div>
    </div>
  );
}
