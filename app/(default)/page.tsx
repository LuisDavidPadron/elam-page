
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
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


export default function Home() {   
  return (
    <>
      {/* Full background wrapper */}
      <div className="relative w-full color-yellow">
        {/* Full background image */}
        {/* <Image
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src={PatronExtendido}
          alt="Background Pattern"
          layout="fill" // Ensures the image fills the entire container
        /> */}
        {/* Page content */}        
        <Header />
        <Hero id="principal" />
        <QuienesSomos id="quienes-somos" />
        <Carta id="carta" />
        <Faqs id="faqs" />
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA || "6LddRVUrAAAAAC9OL6maOBD_dzEO6sJtH8E-A6pe"}>
          <Contacto id="contacto" />
        </GoogleReCaptchaProvider>
        <Reserva id="reserva" />
        <Empresas id="empresas" />
        <Footer border={true} />
      </div>
    </>
  );
}