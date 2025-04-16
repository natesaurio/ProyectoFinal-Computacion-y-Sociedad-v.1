"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CustomSlider from "@/components/image-slider/imageSlidet";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const mainRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const comingSoonRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<React.MutableRefObject<HTMLDivElement | null> | null>(null);

  const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(ref);
  };

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(mainRef);
    }
  }, []);

  useEffect(() => {
    const sections = [
      { ref: mainRef, id: "main" },
      { ref: sliderRef, id: "slider" },
      { ref: calendarRef, id: "calendar" },
      { ref: comingSoonRef, id: "comingSoon" },
    ]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matchingSection = sections.find(section => section.ref.current === entry.target);
            if (matchingSection) {
              setActiveSection(matchingSection.ref);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  const images = [
    {
      imgURL: "/animalbanner.jpg",
      imgAlt: "Imagen deun gato",
      module: "organizaciones",
      url: "/organizaciones",
    },
    {
      imgURL: "/educationbanner.jpg",
      imgAlt: "banner educativo",
      module: "educacion",
      url: "/recursos-educativos",
    }
  ]

  return (
    <div className="flex flex-col items-center w-full">
      <section ref={mainRef} className=" min-h-screen flex flex-col items-center justify-center  px-6 md:px-8 mx-auto  max-w-3xl ">
        <div className=" relative">
          <Image
            src={"/logo.png"}
            alt="Rescate animal en Costa Rica"
            width={600}
            height={600}
            className="object-contain transition-transform duration-300 "
          />
        </div>
        <h1 className="text-[#B25A28] font-bold text-5xl">Bienvenidos </h1>
        <div className="rounded-full bg-[#F8EDE5] border-2 border-[#B25A28] w-[5rem] h-[5rem] flex items-center justify-center mt-14">
          <FontAwesomeIcon
            icon={faArrowDown}
            className="text-[#B25A28] animate-[bounce_1.2s_infinite] text-4xl  mt-4"
          />
        </div>
      </section>
      <section ref={sliderRef} className="min-h-screen w-full flex items-center justify-center  ">
        <CustomSlider>
          {images.map((image, index) => {
            return (
              <div key={index} className="flex flex-col items-center ">
                <Image
                  fill
                  key={index}
                  src={image.imgURL}
                  alt={image.imgAlt}
                  className=" xl:object-fill object-cover w-full h-full transition-transform duration-300 "
                />
                {image.module && image.module === "organizaciones" && (
                  <>
                    <div className="absolute top-0 left-0 right-0 bg-[#B25A28] bg-opacity-60 text-white text-center p-4">
                      <h2 className="text-2xl font-bold">¡Descubre organizaciones increíbles!</h2>
                      <p className="text-lg">Sé el cambio que transforma la vida de un animal.</p>
                    </div>
                    <div className="flex flex-col items-center absolute bottom-20  bg-[#B25A28] rounded-xl text-white text-center p-4   w-1/2 xl:w-1/6 lg:w-1/4 md:w-1/3">
                      <Link className="flex gap-2 justify-center items-center text-xl w-full" href={image.url}>
                        Ver más
                      </Link>
                    </div>
                  </>
                )}
                {image.module && image.module === "educacion" && (
                  <>
                    <div className="absolute top-0 left-0 right-0 bg-[#B25A28] bg-opacity-60 text-white text-center p-4">
                      <h2 className="text-2xl font-bold">¡Aqui tambien puedes estudiar!</h2>
                      <p className="text-lg">Descubre recursos educativos para  aprender sobre bienestar animal</p>
                    </div>
                    <div className="flex flex-col items-center absolute bottom-20  bg-[#B25A28] rounded-xl text-white text-center p-4  w-1/2 xl:w-1/6 lg:w-1/4 md:w-1/3">
                      <Link className="flex gap-2 justify-center items-center text-xl w-full" href={image.url}>
                        Ver más
                      </Link>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </CustomSlider>
      </section>
      <section ref={calendarRef} className="min-h-screen w-full flex flex-col items-center justify-center mt-10 ">
        <h2 className="text-[#B25A28] font-bold text-5xl text-center">
          ¡Explora nuestro calendario!
        </h2>
        <p className="text-lg text-center text-zinc-700  mt-4">
          Mantente al día con los eventos y actividades que tenemos para ti.
        </p>
        <Link href={"/calendario"} className="flex flex-col items-center">
          <div className=" flex items-center justify-center  rounded-full py-3 px-6 bg-[#F8EDE5] border-2 border-[#B25A28] w-auto h-auto flex items-center justify-center mt-14">
            <p className="text-[#B25A28] xl:text-5xl lg:text-4xl md:text-3xl text-2xl ">
              Ir al Calendario
            </p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-[#B25A28] animate-[bounce_1.2s_infinite] xl:text-5xl lg:text-4xl md:text-3xl text-2xl  ml-2"
            />
          </div>
        </Link>
      </section >
      <section ref={comingSoonRef} className="min-h-screen w-full py-16 bg-gradient-to-b from-white to-[#F8EDE5] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <Image
            width={600}
            height={600}
            className="self-center xl:w-1/6 lg:w-1/4 md:w-1/3 w-1/2 mb-4"
            alt="Próximamente"
            src={'/cathammer.png'}
          />
          <h2 className="text-[#B25A28] font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            ¡Próximamente! 🚀
          </h2>
          <p className="text-lg md:text-xl text-zinc-700 mb-8">
            Estamos trabajando en emocionantes nuevas características que pronto estarán disponibles para mejorar tu experiencia. ¡Mantente atento a las novedades!
          </p>

        </div>
      </section>
      {activeSection === sliderRef ? (
        null
      ) : (
        <div className="hidden lg:flex text-[#B25A28]  fixed top-1/2 transform -translate-y-1/2 right-4 flex-col space-y-4">
          {[
            { label: 'Inicio', ref: mainRef },
            { label: 'Servicio', ref: sliderRef },
            { label: 'Calendario', ref: calendarRef },
            { label: 'Proximamente', ref: comingSoonRef }
          ].map((section) => (
            <div key={section.label}>
                <button
                key={section.label}
                onClick={() => scrollToSection(section.ref)}
                className={`flex items-center space-x-2 transform transition-transform hover:scale-110 p-1 ${activeSection === section.ref.current ? 'text-main-orange' : ""} focus:outline-none`}
                aria-label={`Scroll to ${section.label}`}
                >
                <h3 className="text-md font-medium">{section.label}</h3>
                </button>
            </div>
          ))}
        </div>
      )}
    </div >
  );
}
