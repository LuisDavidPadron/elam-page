
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
import { HeroDTO, RawHeroBlock } from "@/components/home/types/hero.type";
import { mapHero } from "@/components/home/lib/hero.mapper";
import { mapQuienesSomos, QuienesSomosDTO } from "@/components/home/lib/quienes.mapper";
import { QuienesSomosBlock } from "@/components/home/types/quienes.type";

export async function getHome() : Promise< HeroDTO > {
  // Replace with your actual API call
   const res = await fetch('https://elam-backoffice.vercel.app/api/pages/684a4444aebcfd6ad3b3a21d', {
    next: { revalidate: 60 }, // ISR: revalida cada 60 segundos
  });
  const raw: RawHeroBlock = await res.json();
  const hero = mapHero(raw);
  
  return hero;
}

export async function getQuienesSomos() : Promise< QuienesSomosDTO > {
  // Replace with your actual API call
   const res = await fetch('https://elam-backoffice.vercel.app/api/pages/684a5271928dcfd7b78ef7ad', {
    next: { revalidate: 60 }, // ISR: revalida cada 60 segundos
  });
  const raw: QuienesSomosBlock = await res.json();
  const quienesSomos = mapQuienesSomos(raw);
  
  return quienesSomos;
}

export default async function Home() {   

  // The hero prop can be used to pass data to the Hero component if needed
  const [hero, quienesSomos] = await Promise.all([getHome(), getQuienesSomos()])
  
  return (
    <>      
      <div className="relative w-full color-yellow">          
        <Header />
        <Hero id="principal" hero={hero}/>
        <QuienesSomos id="quienes-somos" quienesSomos={quienesSomos}/>
        <Carta id="carta" />
        <Faqs id="faqs" />        
        <Contacto id="contacto" />        
        <Reserva id="reserva" />
        <Empresas id="empresas" />
        <Footer border={true} />
      </div>
    </>
  );
}