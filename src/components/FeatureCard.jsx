import { ArrowRight } from "lucide-react";

export default function FeatureCard({
  title,
  icon,
  children,
  modalTitle,
  modalContent,
  onOpenModal,
}) {
  
  const handleOpenModal = () => {
    if (onOpenModal) {
      onOpenModal({
        title: modalTitle,
        content: modalContent,
      });
    }
  };

  return (
    <div className="rounded-xl bg-linear-to-br from-[#79011d] to-[#5a0015] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)] lg:shadow-none">
      <div className="w-fit rounded-xl bg-white/20 p-3 lg:scale-110">
        {icon}
      </div>
      <h1 className="pt-6 text-2xl font-bold text-white lg:text-3xl">
        {title}
      </h1>
      <p className="pt-4 text-base font-thin text-white lg:text-xl">
        {children}
      </p>
      <div className="pt-10">
        <button
          onClick={handleOpenModal}
          className="text-base flex gap-3 justify-center items-center text-white lg:text-xl"
        >
          <span>Learn more</span>
          <ArrowRight size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
}

