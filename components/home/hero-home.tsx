import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import { HeroDTO } from "./types/hero.type";

export default function HeroHome({ id, hero }: { id?: string, hero?: HeroDTO }) {    
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
                src={process.env.API_URL ?? 'https://elam-backoffice.vercel.app' + hero?.image?.url!}
                height={100}
                width={hero?.image?.width!}
                alt={hero?.image?.alt!}
              />
            <h1
              className="mt-10 text-black mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,black,transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              {hero?.headline}<br className="max-lg:hidden text-black" />
              {hero?.subheadline}
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-black"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {hero?.copy}
              </p>             
            </div>
          </div>
          {/* Hero image */}          
        </div>
      </div>
    </section>
  );
}
