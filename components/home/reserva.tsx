import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Reserva({ id }: { id?: string }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:py-[120px] dark:bg-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:color-black before:bg-gradient-to-b before:from-transparent before:to-black/10 before:opacity-50 dark:before:to-dark/10"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] color-yellow blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-black [border-image:linear-gradient(to_right,transparent,#cc9c3b,transparent)1] md:mb-12 md:text-4xl">
              Ve a servirte tu cerveza
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="btn group mb-4 w-full bg-linear-to-t color-yellow bg-[length:100%_100%] bg-[bottom] text-black shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="https://wokiapp.com/reservas/elam-beer-garden"
              >
                <span className="relative inline-flex items-center">
                  Reserva{" "}
                  <span className="ml-1 tracking-normal text-black transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}