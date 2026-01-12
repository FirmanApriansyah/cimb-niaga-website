import {
  PiPiggyBankFill,
  PiTrendUpFill,
  PiHandCoinsFill,
  PiQrCodeFill,
} from "react-icons/pi";
import FeatureCard from "../components/FeatureCard";
import SavingsContent from "../fragments/SavingsModalContent";
import DepositsContent from "../fragments/DepositsModalContent";
import LoansContent from "../fragments/LoansModalContent";
import PaymentsContent from "../fragments/PaymentsModalContent";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ServicesSection({ onOpenModal, id }) {
  const [index, setIndex] = useState(0);

  return (
    <section id={id} className="relative overflow-hidden bg-[#F5F1E6] pt-16 w-full pb-32">
      <div className="container">
      {/* Title */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}>
      <div className="pb-8 text-center md:pb-12 lg:pb-16">
        <h1 className="text-4xl font-extrabold text-[#7B011E] md:text-5xl lg:text-6xl">
          Our Services
        </h1>
        <h3 className="mx-auto pt-4 text-base font-semibold text-[#7B011E] md:px-6 md:text-xl lg:w-[80%] lg:text-2xl">
          Banking solutions designed for your lifestyle, bringing trust,
          security, and ease to your financial journey.
        </h3>
        <div className="mx-auto mt-5 h-0.75 w-30 bg-linear-to-r from-transparent via-red-800 to-transparent blur-[0.5px] lg:h-1 lg:w-50" />
      </div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
      <div className="mb-8 hidden justify-center gap-4 lg:flex">
        <button
          onClick={() => setIndex(0)}
          disabled={index === 0}
          className="rounded-full border-3 border-[#7B011E] px-5 py-2 text-sm font-medium text-[#7B011E] disabled:opacity-40"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => setIndex(1)}
          disabled={index === 1}
          className="rounded-full border bg-[#7B011E] px-5 py-2 text-sm font-medium text-white disabled:opacity-40"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="lg:overflow-hidden">
      <div
        className="transition-transform slider-track duration-500 ease-in-out lg:flex"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {/* Slide 1 */}
        <div className="mb-4 grid w-full  grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:mb-0 lg:shrink-0 lg:px-6">
          {/* Card Savings */}
          <FeatureCard
            title="Savings"
            icon={<PiPiggyBankFill size={35} className="text-white" />}
            modalTitle="Savings"
            modalContent={<SavingsContent />}
            onOpenModal={onOpenModal}
          >
            Secure your future with competitive interest rates and flexible
            withdrawal options tailored to your needs.
          </FeatureCard>
          {/* Card Deposits */}
          <FeatureCard
            title="Deposits"
            icon={<PiTrendUpFill size={35} className="text-white" />}
            modalTitle="Deposits"
            modalContent={<DepositsContent />}
            onOpenModal={onOpenModal}
          >
            Grow your wealth steadily with our high-yield fixed deposit plans
            offering guaranteed returns.
          </FeatureCard>
        </div>

        {/* Slide 2 */}
        <div className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:shrink-0 lg:px-6">
          {/* Card Loans */}
          <FeatureCard
            title="Loans"
            icon={<PiHandCoinsFill size={35} className="text-white" />}
            modalTitle="Loans"
            modalContent={<LoansContent />}
            onOpenModal={onOpenModal}
          >
            Realize your dreams with fast approval personal, home, and auto
            loans with friendly terms
          </FeatureCard>
          {/* Card Digital Payments */}
          <FeatureCard
            title="Digital Payments"
            icon={<PiQrCodeFill size={35} className="text-white" />}
            modalTitle="Digital Payments"
            modalContent={<PaymentsContent />}
            onOpenModal={onOpenModal}
          >
            Experience seamless transactions with QRIS and instant transfers
            anytime, anywhere.
          </FeatureCard>
        </div>
      </div>
      </div>
      </motion.div>
      </div>
    </section>
  );
}
