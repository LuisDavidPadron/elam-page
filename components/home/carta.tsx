
import Image from "next/image";

const images = [
  '/images/portfolio-01/image-01.jpg',
  "/images/portfolio-01/image-02.jpg",
  "/images/portfolio-01/image-03.jpg",
  "/images/portfolio-01/image-04.jpg",
  "/images/portfolio-01/image-05.jpg",
  "/images/portfolio-01/image-06.jpg",
];

// import Foto01 from "@/public/images/portfolio-01/image-01.jpg";
// import Foto02 from "@/public/images/portfolio-01/image-02.jpg";
// import Foto03 from "@/public/images/portfolio-01/image-03.jpg";
// import Foto04 from "@/public/images/portfolio-01/image-04.jpg";
// import Foto05 from "@/public/images/portfolio-01/image-05.jpg";
// import Foto06 from "@/public/images/portfolio-01/image-06.jpg";

// const portfolioItems = [
//   { id: 1, src: Foto01, category: "Branding", title: "Branding Design" },
//   { id: 2, src: Foto02, category: "Design", title: "Creative Design" },
//   { id: 3, src: Foto03, category: "Marketing", title: "Marketing Strategy" },
//   { id: 4, src: Foto04, category: "Development", title: "Web Development" },
//   { id: 5, src: Foto05, category: "Branding", title: "Logo Design" },
//   { id: 6, src: Foto06, category: "Design", title: "UI/UX Design" },
// ];


// const images = [
//   {
//     id: "rtwFive",
//     style: { transform: "translate(-170%, -25%) rotate(8deg)" },
//     src: "../images/portfolio-01/image-03.jpg",
//     alt: "",
//   },
//   {
//     id: "rtwFour",
//     style: { transform: "translate(-110%, 15%) rotate(-10deg)" },
//     src: "/images/portfolio-01/image-04.jpg",
//     alt: "",
//   },
//   {
//     id: "rtwThree",
//     style: { transform: "translate(60%, -15%) rotate(-4deg)" },
//     src: "../images/portfolio-01/image-03.jpg",
//     alt: "",
//   },
//   {
//     id: "rtwTwo",
//     style: { transform: "translate(25%, 50%) rotate(8deg)" },
//     src: "/images/portfolio-01/image-04.jpg",
//     alt: "",
//   },
//   {
//     id: "rtwOne",
//     style: { transform: "translate(-50%, -95%) rotate(-5deg)" },
//     src: "/images/portfolio-01/image-05.jpg",
//     alt: "",
//   },
// ];

export default function Carta({ id }: { id?: string }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark">
      <div className="max-w-6xl mx-auto">        
        {/* Animate the entire gallery as one block */}
        <div
          className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="200"
          data-aos-once="true"
        >
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Imagen ${i + 1}`}
                width={600}
                height={400}
                className="w-full h-auto hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// export default function Carta({ id }: { id?: string }) {
//   return (
//     <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark">
//       <div className="container mx-auto">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div className="mx-auto mb-[60px] max-w-[510px] text-center">
//               <h2 className="text-white mb-3 text-3xl font-bold leading-[1.208] text-dark sm:text-4xl md:text-[40px]">
//                 Nuestra Carta
//               </h2>
//               <p className="text-white text-base text-body-color dark:text-dark-6">
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="-mx-4 flex flex-wrap">
//           {portfolioItems.map((item) => (
//             <div key={item.id} className="w-full px-4 md:w-1/2 xl:w-1/3">
//               <div className="relative mb-12">
//                 <div className="overflow-hidden rounded-[10px]">
//                   <Image className="w-full" src={item.src} alt={item.title} />
//                 </div>
//                 <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white px-3 py-[34px] text-center shadow-portfolio dark:bg-dark-2 dark:shadow-box-dark">
//                   <span className="mb-2 block text-sm font-medium text-primary">
//                     {item.category}
//                   </span>
//                   <h3 className="mb-5 text-xl font-bold text-dark text-white">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// export default function Carta({ id }: { id?: string }) {
//   return (
//     <section id={id} className="hidden md:block relative">
//       <div className="flex justify-center w-full demo-image">
//         <div className="gallery-wrapper w-full h-full relative pt-20">
//           {images.map((img) => (
//             <div key={img.id} id={img.id} style={img.style}>
//               <img
//                 alt={img.alt}
//                 loading="lazy"                
//                 decoding="async"
//                 className="object-cover w-full h-full"
//                 style={{ color: "transparent", width: "30%", height: "30%" }}
//                 src={img.src}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="absolute left-24 bottom-24 flex items-center">
//         <h2 className="textGradient w-fit">Ride the wave</h2>
//         <button className="green-btn ml-8 mt-3">
//           <a href="/gallery">Gallery</a>
//         </button>
//         <audio
//           src="here/www.riverhostelvalencia.com/sounds/galleryPreview-sound.mp3"
//           preload="auto"
//         ></audio>
//       </div>
//     </section>
//   );
// }