/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MainSectionAboutUs } from "../../components/nosotros/mainSection";
import { OurObjective } from "../../components/nosotros/objetive";

export default function Nosotros() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.section
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            ease: "easeOut",
            type: "Inertia",
            duration: 0.3,
            delay: 0.01,
          },
        }}
        className=""
        exit={{ x: 100, opacity: 0 }}
        initial={{ x: -300, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <MainSectionAboutUs />
      </motion.section >
      <motion.section >
        <OurObjective />
      </motion.section>
      <motion.section >
        <div className="mt-20 min-h-screen flex flex-col items-center justify-center rounded-xl py-12 px-6 md:px-10 mx-auto ">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">

            {/* Imagen con mejoras */}
            <div className="md:w-1/2 mt- md:mt-0 order-1">
              <div className="relative rounded-xl overflow-hidden transition-all duration-500 group">
                <div className="absolute inset-0  to-transparent z-10"></div>
                <Image
                  alt="Futuro ideal para los animales"
                  className="sm:w-[24.2rem] sm:h-[24.2rem] object-cover transform  transition-transform duration-700 ease-out"
                  height={600}
                  src={"/vision.png"}
                  width={800}
                />
     
              </div>
              <div className="mt-8 p-5 bg-[#B25A28]/10 rounded-xl border border-[#B25A28]/20">
                <p className="text-[#B25A28] italic font-medium text-center md:text-left">
                  Visualizamos un país donde el respeto a todas las formas de vida sea el fundamento de nuestra sociedad
                </p>
              </div>
            </div>

            {/* Contenido de Visión mejorado */}
            <div className="md:w-1/2 order-2 ">
              <div className="relative mb-10">
                <h2 className="text-[#B25A28] text-4xl font-bold relative inline-block">
                  Nuestra Visión
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#B25A28]/30 transform translate-y-2"></span>
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-white/70 rounded-xl border border-[#B25A28]/20 hover:bg-white/90 transition-all duration-300">
                  <p className="text-zinc-700 text-lg md:text-xl leading-relaxed md:leading-loose">
                    <span className="text-[#B25A28] font-semibold">Transformar realidades:</span> Ser el puente que conecte a
                    los animales en situación de vulnerabilidad con hogares responsables en Costa Rica.
                  </p>
                </div>

                <div className="p-5 bg-white/70 rounded-xl border border-[#B25A28]/20 hover:bg-white/90 transition-all duration-300">
                  <p className="text-zinc-700 text-lg md:text-xl leading-relaxed md:leading-loose">
                    <span className="text-[#B25A28] font-semibold">Cultura colectiva:</span> Crear una sociedad donde el
                    bienestar animal sea prioridad nacional y cada mascota tenga calidad de vida.
                  </p>
                </div>

                <div className="p-5 bg-white/70 rounded-xl border border-[#B25A28]/20 hover:bg-white/90 transition-all duration-300">
                  <p className="text-zinc-700 text-lg md:text-xl leading-relaxed md:leading-loose">
                    <span className="text-[#B25A28] font-semibold">Ecosistema digital:</span> Plataforma colaborativa que una
                    a refugios, adoptantes y voluntarios en la lucha contra el abandono animal.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>
      <motion.section >
        <div className="mt-20 min-h-screen flex flex-col items-center justify-center rounded-xl py-8 px-6 md:px-10 mx-auto ">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">

            <div className="md:w-1/2">
              <div className="relative mb-8">
                <h2 className="text-[#B25A28] text-4xl font-bold sm:mb-10 relative inline-block">
                  Organizaciones Destacadas
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#B25A28]/30 transform translate-y-2"></span>
                </h2>
              </div>

              <p className="text-zinc-700 text-lg md:text-xl leading-relaxed md:leading-loose text-center md:text-left mt-2">
                Conoce las <strong className="text-[#B25A28] font-semibold">principales organizaciones</strong> de rescate animal en Costa Rica.
                <span className="block mt-2">Nuestra plataforma <strong className="text-[#B25A28]">centraliza información verificada</strong> para facilitar tu conexión con su labor.</span>
              </p>

              <div className="mt-8 space-y-4 bg-white py-2 px-4 rounded-xl border border-[#B25A28]/20">
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#B25A28]/10 rounded-full mt-1">
                    <span className="text-[#B25A28] text-lg">•</span>
                  </div>
                  <p className="text-zinc-700 text-lg md:text-xl flex-1 border-l-2 border-[#B25A28]/20 pl-4 py-1 group-hover:border-[#B25A28]/40 transition-all">
                    Directorio actualizado de refugios certificados
                  </p>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#B25A28]/10 rounded-full mt-1">
                    <span className="text-[#B25A28] text-lg">•</span>
                  </div>
                  <p className="text-zinc-700 text-lg md:text-xl flex-1 border-l-2 border-[#B25A28]/20 pl-4 py-1 group-hover:border-[#B25A28]/40 transition-all">
                    Acceso directo a procesos de adopción y contacto
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative rounded-xl overflow-hidden transition-all duration-500 group">
                <div className="absolute inset-0  z-10"></div>
                <Image
                  alt="Red de organizaciones de rescate"
                  className="sm:w-[30rem] sm:h-[30rem] object-cover transition-transform duration-700 ease-out"
                  height={1000}
                  src={"/organization.png"}
                  width={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section className="w-full  ">
        <div className="mt-20 flex flex-col  min-h-screen items-center justify-center rounded-xl py-8 px-6 md:px-10 mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-8  w-full">

            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative rounded-xl overflow-hidden transition-all duration-500 group">
                <div className="absolute inset-0  z-10"></div>
                <Image
                  alt="Recursos educativos sobre bienestar animal"
                  className="sm:w-[30rem] sm:h-[30rem] object-cover transition-transform duration-700 ease-out"
                  height={600}
                  src={"/education.png"}
                  width={800}
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative mb-8">
                <h2 className="text-[#B25A28] text-4xl font-bold sm:mb-10 relative inline-block">
                  Recursos Educativos
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#B25A28]/30 transform translate-y-2"></span>
                </h2>
              </div>

              <p className="text-zinc-700 text-lg md:text-xl leading-relaxed md:leading-loose text-center md:text-left mt-2">
                Descubre nuestra <strong className="text-[#B25A28] font-semibold">colección exclusiva</strong> de materiales formativos
                para el cuidado animal. <span className="block mt-2">Cada recurso está diseñado para empoderarte con
                  <strong className="text-[#B25A28]"> conocimiento práctico</strong> y actualizado.</span>
              </p>

              <div className="mt-8 space-y-4 bg-white py-2 px-4 rounded-xl border border-[#B25A28]/20">
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#B25A28]/10 rounded-full mt-1">
                    <span className="text-[#B25A28] text-lg">•</span>
                  </div>
                  <p className="text-zinc-700 text-lg md:text-xl flex-1 border-l-2 border-[#B25A28]/20 pl-4 py-1 group-hover:border-[#B25A28]/40 transition-all">
                    Guías completas sobre adopción responsable
                  </p>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#B25A28]/10 rounded-full mt-1">
                    <span className="text-[#B25A28] text-lg">•</span>
                  </div>
                  <p className="text-zinc-700 text-lg md:text-xl flex-1 border-l-2 border-[#B25A28]/20 pl-4 py-1 group-hover:border-[#B25A28]/40 transition-all">
                    Protocolos de salud animal certificados
                  </p>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#B25A28]/10 rounded-full mt-1">
                    <span className="text-[#B25A28] text-lg">•</span>
                  </div>
                  <p className="text-zinc-700 text-lg md:text-xl flex-1 border-l-2 border-[#B25A28]/20 pl-4 py-1 group-hover:border-[#B25A28]/40 transition-all">
                    Video-tutoriales con expertos en etología
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
