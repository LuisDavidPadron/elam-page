"use client"; // <--- ¡Añade esta línea al principio de todo!

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { CartaMedia } from "./types/carta.type";

export interface Empresa {
  createdAt: string;
  updatedAt: string;
  title: string;
  orden: number;
  image: CartaMedia;
  enlaceExterno: string;
  id: string;
}

export interface EmpresaPagination {
  docs: Empresa[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

// const empresas = [
//   { id: 1, href: "#", src: GrayRids, srcDark: GrayRidsWhite, alt: "Grayrids" },
//   {
//     id: 2,
//     href: "#",
//     src: LineIcons,
//     srcDark: LineIconsWhite,
//     alt: "Lineicons",
//   },
//   { id: 3, href: "#", src: UiDeck, srcDark: UiDeckWhite, alt: "UIdeck" },
//   { id: 4, href: "#", src: AyroUi, srcDark: AyroUiWhite, alt: "Ayroui" },
//   { id: 5, href: "#", src: GrayRids, srcDark: GrayRidsWhite, alt: "Grayrids" },
//   {
//     id: 6,
//     href: "#",
//     src: LineIcons,
//     srcDark: LineIconsWhite,
//     alt: "Lineicons",
//   },
//   { id: 7, href: "#", src: UiDeck, srcDark: UiDeckWhite, alt: "UIdeck" },
//   { id: 8, href: "#", src: AyroUi, srcDark: AyroUiWhite, alt: "Ayroui" },
//   { id: 9, href: "#", src: GrayRids, srcDark: GrayRidsWhite, alt: "Grayrids" },
//   {
//     id: 10,
//     href: "#",
//     src: LineIcons,
//     srcDark: LineIconsWhite,
//     alt: "Lineicons",
//   },
//   { id: 11, href: "#", src: UiDeck, srcDark: UiDeckWhite, alt: "UIdeck" },
//   { id: 12, href: "#", src: AyroUi, srcDark: AyroUiWhite, alt: "Ayroui" },
//   { id: 13, href: "#", src: GrayRids, srcDark: GrayRidsWhite, alt: "Grayrids" },
//   {
//     id: 14,
//     href: "#",
//     src: LineIcons,
//     srcDark: LineIconsWhite,
//     alt: "Lineicons",
//   },
//   { id: 15, href: "#", src: UiDeck, srcDark: UiDeckWhite, alt: "UIdeck" },
//   { id: 16, href: "#", src: AyroUi, srcDark: AyroUiWhite, alt: "Ayroui" },
//   { id: 17, href: "#", src: GrayRids, srcDark: GrayRidsWhite, alt: "Grayrids" },
//   {
//     id: 18,
//     href: "#",
//     src: LineIcons,
//     srcDark: LineIconsWhite,
//     alt: "Lineicons",
//   },
//   { id: 19, href: "#", src: UiDeck, srcDark: UiDeckWhite, alt: "UIdeck" },
//   { id: 20, href: "#", src: AyroUi, srcDark: AyroUiWhite, alt: "Ayroui" },
//   { id: 21, href: "#", src: GrayRids, srcDark: GrayRidsWhite, alt: "Grayrids" },
//   {
//     id: 22,
//     href: "#",
//     src: LineIcons,
//     srcDark: LineIconsWhite,
//     alt: "Lineicons",
//   },
//   { id: 23, href: "#", src: UiDeck, srcDark: UiDeckWhite, alt: "UIdeck" },
//   { id: 24, href: "#", src: AyroUi, srcDark: AyroUiWhite, alt: "Ayroui" },
// ];

export default function Empresas({ id }: { id?: string }) {
  const [isLoading, setIsLoading] = useState(true);
  
  const [empresas, setEmpresas] = useState<Empresa[] | null>([]);
  
  useEffect(() => {
    setIsLoading(true);
    // Fetch the carta data from the API
    // Adjust the URL as per your API endpoint
    
    fetch(`/api/empresas`)
    .then(async (res) => {
      const raw: EmpresaPagination = await res.json();
      return raw.docs.sort((a, b) => a.orden - b.orden);
    })
    .then(setEmpresas)
    .catch((error) => {
      console.error("Error fetching empresas:", error);
      setEmpresas(null);
    });  
  }, []);

  return (
    <section
      id={id}
      className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 dark:bg-dark"
    >
      <div className="container mx-auto">
        <div
          className="py-5 px-5 relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:color-yellow"
          data-aos="zoom-y-out"
        >
          <div className="-mx-4 my-10 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="mb-6 border-y text-3xl font-bold text-black [border-image:linear-gradient(to_right,transparent,black,transparent)1] md:mb-12 md:text-4xl">
                Trabajamos
                </h2>                
              </div>
            </div>
          </div>
          <Swiper            
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 30 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
              1280: { slidesPerView: 6, spaceBetween: 50 },
            }}
            className="mySwiper p-7"
          >
            {empresas!.map((empresa) => (
              <SwiperSlide
                key={empresa.id}
                className="flex items-center justify-center w-100% h-full"
              >
                <a
                  href={empresa.enlaceExterno}
                  className="flex h-full w-full items-center justify-center py-5 opacity-70 transition hover:opacity-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative h-50 w-50 md:h-24 md:w-24 lg:h-40 lg:w-40">
                    <Image
                      src={
                        empresa.image?.url
                          ? empresa.image?.url.startsWith("http")
                            ? empresa.image?.url
                            : "https://elam-backoffice.vercel.app" + empresa.image?.url
                          : "/fallback.png"
                      }
                      alt={empresa.image.alt || empresa.title}
                      fill // Usar 'fill' en lugar de layout='fill' en versiones más nuevas
                      style={{ objectFit: "contain" }} // Reemplaza objectFit="contain"
                      className="block dark:hidden"
                    />
                    <Image
                      src={
                        empresa.image?.url
                          ? empresa.image?.url.startsWith("http")
                            ? empresa.image?.url
                            : "https://elam-backoffice.vercel.app" + empresa.image?.url
                          : "/fallback.png"
                      }
                      alt={empresa.image.alt || empresa.title}
                      fill
                      style={{ objectFit: "contain" }}
                      className="hidden dark:block"
                    />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
