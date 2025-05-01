import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Logo01 from "@/public/images/LOGO_ELAM.svg";
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
                src={Logo01}
                height={100}
                width={400}
                alt="Logo 01"
              />
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Tu Cerveza, Tu Ritmo<br className="max-lg:hidden" />
              Descubre el Autoservicio Cervecero
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Simple is a modern website builder powered by AI that changes
                how companies create user interfaces together.
              </p>             
            </div>
          </div>
          {/* Hero image */}          
        </div>
      </div>
    </section>
  );
}
