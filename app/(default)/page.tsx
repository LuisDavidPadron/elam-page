export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};
import Image from "next/image";
import Hero from "@/components/home/hero-home";
import Reserva from "@/components/home/reserva";
import QuienesSomos from "@/components/home/quienes-somos";
import Carta from "@/components/home/carta";
import Contacto from "@/components/home/contacto";
import Empresas from "@/components/home/empresas";
import Faqs from "@/components/home/faq";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import PatronExtendido1 from "@/public/images/patron expandido 3-01.svg";
import PatronExtendido from "@/public/images/patron_expandido.svg";

export default function Home() {
  return (
    <>
      {/* Full background wrapper */}
      <div className="relative w-full">
        {/* Full background image */}
        <Image
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src={PatronExtendido}
          alt="Background Pattern"
          layout="fill" // Ensures the image fills the entire container
        />
        {/* Page content */}
        <Header />
        <Hero id="principal" />
        <QuienesSomos id="quienes-somos" />
        <Faqs id="faqs" />
        {/* <Contacto id="contacto" /> */}
        <Carta id="carta" />
        <Reserva id="reserva" />
        <Empresas id="empresas" />
        <Footer border={true} />
      </div>
    </>
  );
}