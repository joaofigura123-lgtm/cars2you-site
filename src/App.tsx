import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { VehicleShowcase } from "@/components/VehicleShowcase";
import { DownloadApp } from "@/components/DownloadApp";
import { SecurityNotice } from "@/components/SecurityNotice";
import { Footer } from "@/components/Footer";
import { AppModal } from "@/components/AppModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      <Header onOpenModal={open} />
      <main>
        <Hero />
        <VehicleShowcase onOpenModal={open} />
        <section id="como-funciona">
          <Features onOpenModal={open} />
        </section>
        <section id="seguranca">
          <SecurityNotice />
        </section>
        <DownloadApp onOpenModal={open} />
      </main>
      <Footer />
      <AppModal open={modalOpen} onClose={close} />
    </div>
  );
}