"use client"; // <--- ¡Añade esta línea al principio de todo!

import { useState } from "react";

export default function Faqs({ id }: { id?: string }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-black text-lg font-semibold text-primary">
                Preguntas Frecuentes
              </span>
              <h2 className="text-black mb-4 text-3xl font-bold text-dark sm:text-[40px]/[48px] dark:text-dark">
                Que hago 
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {/* FAQ Items */}
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="w-full px-4 lg:w-1/2 mb-8"
            >
              <div className="rounded-lg color-yellow p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8 dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)]">
                <button
                  className="faq-btn flex w-full text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
                    <svg
                      className={`transform transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mt-1 text-lg font-semibold text-dark dark:text-dark">
                      {faq.question}
                    </h4>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="faq-content pl-[62px]">
                    <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqData = [
  {
    question: "Así de Fácil es Disfrutar",
    answer:
      "Obtén tu tarjeta -> Carga crédito -> Elige tu cerveza -> ¡Sírvete a tu gusto! -> Paga solo por lo que consumes. ¡Tú tienes el control total!",
  },
  {
    question: "Un Mundo de Sabores por Descubrir",
    answer:
      "Contamos con 21 grifos rotativos con lo mejor de la cerveza local e internacional. ¡Siempre hay algo nuevo que probar!",
  },
  {
    question: "Más que Cerveza, una Experiencia Social?",
    answer:
      "Ven con amigos, prueba diferentes estilos, comparte el momento. Organizamos eventos, música en vivo y tenemos opciones deliciosas para acompañar tu cerveza.",
  },  
];