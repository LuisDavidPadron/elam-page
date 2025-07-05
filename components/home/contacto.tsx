"use client"
// This file is part of the Elam Beer Garden project. 
import React, { useState, useRef } from "react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Image from "next/image";
import Stripes from "../../public/images/image.png"; // Adjust the path and filename as needed

export default function Contacto({ id }: { id?: string }) {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {    
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) return;

    setIsLoading(true);

    const captcha = await executeRecaptcha("submit");

    // Validación simple
    if (!form.nombre || !form.email || !form.mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        nombre: form.nombre,
        email: form.email,
        mensaje: form.mensaje,
        captcha: captcha,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow" as RequestRedirect
    };

    fetch("https://www.elambeergarden.cl/api/send-mail", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        alert("Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.");
        setForm({
          nombre: "",
          email: "",
          mensaje: "",
        });

        setIsLoading(false);
      })
      .catch((error) =>{
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 py-10 dark:bg-dark">
      <div className="max-w-6xl mx-auto">        
        {/* <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:w-1/2 xl:w-6/12">
          <div className="mb-12 max-w-[570px] lg:mb-0">  
              <Image
                className="mx-auto"
                src={Stripes}
                alt="Stripes"
                width={600}
                height={400}
              />                                                
          </div>
        </div> */}
        <div className="w-full">
          <h2 className="mx-auto text-black mb-4 text-3xl font-bold text-center sm:text-[40px]/[48px] dark:text-dark">
            Escribenos te responderemos a la brevedad
          </h2>          
          <div className="relative rounded-lg color-yellow p-8 shadow-lg sm:p-12 dark:bg-dark-2">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  name="nombre"
                  autoComplete="name"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  disabled={isLoading}
                  className="w-full rounded-sm border border-stroke px-[14px] py-3 text-base color-yellow outline-hidden focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-black"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  disabled={isLoading}
                  onChange={handleChange}
                  placeholder="Correo Electrónico"
                  className="w-full rounded-sm border border-stroke px-[14px] py-3 text-base color-yellow outline-hidden focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                />
              </div>
              <div className="mb-6">
                <textarea
                  rows={6}
                  name="mensaje"
                  placeholder="Mensaje"
                  value={form.mensaje}
                  disabled={isLoading}
                  onChange={handleChange}
                  className="w-full resize-none rounded-sm border border-stroke px-[14px] py-3 text-base color-yellow outline-hidden focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="cursor-pointer w-full rounded-sm border border-primary bg-primary p-3 text-black transition hover:bg-primary/90"
              >
                {isLoading ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>             
          </div>
        </div>
      </div>
    </section>
  );
}
