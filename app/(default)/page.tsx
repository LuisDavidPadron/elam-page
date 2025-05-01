export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/home/hero-home";
import Reserva from "@/components/home/reserva";
import QuienesSomos from "@/components/home/quienes-somos";
import Carta from "@/components/home/carta";
import Contacto from "@/components/home/contacto";
import Empresas from "@/components/home/empresas";
import Faqs from "@/components/home/faq";

export default function Home() {
  return (
    <>      
      <Hero id="principal"/>
      <QuienesSomos id="quienes-somos" />
      <Faqs id="faqs"/>
      <Contacto id="contacto" />      
      <Carta id="carta" />
      <Reserva id="reserva" />
      <Empresas id="empresas" />
    </>
  );
}
