import Image from "next/image";
import Stripes from "@/public/images/image.png";

export default function BannerElam({ id }: { id?: string }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:py-[120px] dark:bg-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:color-black before:bg-gradient-to-b before:from-transparent before:to-black/10 before:opacity-50 dark:before:to-dark/10"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          
          <div className="px-4 py-4 md:px-4 md:py-4">            
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div className="relative">
                <Image
                  className="mx-auto"
                  src={Stripes}
                  alt="Stripes"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}