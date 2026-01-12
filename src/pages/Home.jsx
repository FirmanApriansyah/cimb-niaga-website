import { useState } from "react";
import ModalCard from "../components/ModalCard";
import Navbar from "../components/Navbar";
import AboutSection from "../layout/AboutSection";
import HeroSection from "../layout/HeroSection";
import ServicesSection from "../layout/ServiceSection";
import ContactSection from "../layout/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (modalData) => {
    setActiveModal(modalData);
    setIsModalOpen(true);
    // Trigger animation after component mounts
    setTimeout(() => setShowModal(true), 10);
  };

  const closeModal = () => {
    setShowModal(false);
    // Wait for exit animation before removing from DOM
    setTimeout(() => {
      setIsModalOpen(false);
      setActiveModal(null);
    }, 700); // Match transition duration
  };

  return (
    <>
      <Navbar />
      <HeroSection id="Home" />
      <AboutSection id="About" />
      <ServicesSection id="Services" onOpenModal={openModal} />
      <ContactSection id="Contact" />
      <Footer />
      {isModalOpen && (
        <ModalCard
          learnCard={showModal}
          onClose={closeModal}
          title={activeModal?.title}
          content={activeModal?.content}
        />
      )}
    </>
  );
}
