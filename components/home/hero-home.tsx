import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Logo01 from "@/public/images/LOGO_ELAM.svg";
import Logo from "@/public/images/LOGO_NEGRO.svg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome({ id }: { id?: string }) {
  return (
    <section id={id} className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="text-center">
              <Image
                className="mx-auto relative"
                src={Logo}
                height={100}
                width={400}
                alt="Logo 01"
              />
            <h1
              className="mt-10 text-black mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,black,transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Tu Cerveza, Tu Ritmo<br className="max-lg:hidden text-black" />
              Descubre el Autoservicio Cervecero
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-black"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                 Explora una increíble variedad de cervezas artesanales, sírvete exactamente lo que quieras, 
                cuando quieras y ¡sin esperas! Una experiencia única, divertida y totalmente bajo tu control te espera.            
              </p>             
            </div>
          </div>
          {/* Hero image */}          
        </div>
      </div>
    </section>
  );
}
