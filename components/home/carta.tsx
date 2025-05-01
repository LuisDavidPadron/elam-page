import Image from "next/image";

import Foto01 from "@/public/images/portfolio-01/image-01.jpg";
import Foto02 from "@/public/images/portfolio-01/image-02.jpg";
import Foto03 from "@/public/images/portfolio-01/image-03.jpg";
import Foto04 from "@/public/images/portfolio-01/image-04.jpg";
import Foto05 from "@/public/images/portfolio-01/image-05.jpg";
import Foto06 from "@/public/images/portfolio-01/image-06.jpg";

const portfolioItems = [
  { id: 1, src: Foto01, category: "Branding", title: "Branding Design" },
  { id: 2, src: Foto02, category: "Design", title: "Creative Design" },
  { id: 3, src: Foto03, category: "Marketing", title: "Marketing Strategy" },
  { id: 4, src: Foto04, category: "Development", title: "Web Development" },
  { id: 5, src: Foto05, category: "Branding", title: "Logo Design" },
  { id: 6, src: Foto06, category: "Design", title: "UI/UX Design" },
];

export default function Carta({ id }: { id?: string }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark sm:text-4xl md:text-[40px]">
                Nuestra Carta
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {portfolioItems.map((item) => (
            <div key={item.id} className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="relative mb-12">
                <div className="overflow-hidden rounded-[10px]">
                  <Image className="w-full" src={item.src} alt={item.title} />
                </div>
                <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white px-3 py-[34px] text-center shadow-portfolio dark:bg-dark-2 dark:shadow-box-dark">
                  <span className="mb-2 block text-sm font-medium text-primary">
                    {item.category}
                  </span>
                  <h3 className="mb-5 text-xl font-bold text-dark dark:text-black">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}