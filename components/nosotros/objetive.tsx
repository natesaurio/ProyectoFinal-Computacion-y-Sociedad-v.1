/* eslint-disable prettier/prettier */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const OurObjective = () => {
    return (
        <div className="mt-20 min-h-screen flex flex-col items-center justify-center rounded-xl py-12 px-6 md:px-10 mx-auto ">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">

                {/* Contenido de Misión mejorado */}
                <div className="md:w-1/2">
                    <div className="relative mb-10">
                        <h2 className="text-[#B25A28] text-4xl font-bold relative inline-block">
                            Nuestra Misión
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#B25A28]/30 transform translate-y-2"></span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="p-5 bg-white/70 rounded-xl border border-[#B25A28]/20 hover:bg-white/90 transition-all duration-300">
                            <p className="text-zinc-700 text-lg md:text-xl leading-relaxed md:leading-loose">
                                <span className="text-[#B25A28] font-semibold">Conexiones que transforman:</span> Vincular personas y organizaciones
                                de rescate para promover adopciones responsables en Costa Rica.
                            </p>
                        </div>

                        <div className="p-5 bg-white/70 rounded-xl border border-[#B25A28]/20 hover:bg-white/90 transition-all duration-300">
                            <p className="text-zinc-700 text-lg md:text-xl leading-relaxed md:leading-loose">
                                <span className="text-[#B25A28] font-semibold">Educación continua:</span> Ofrecer un espacio de aprendizaje
                                colaborativo sobre cuidado animal con recursos accesibles.
                            </p>
                        </div>

                        <div className="p-5 bg-white/70 rounded-xl border border-[#B25A28]/20 hover:bg-white/90 transition-all duration-300">
                            <p className="text-zinc-700 text-lg md:text-xl leading-relaxed md:leading-loose">
                                <span className="text-[#B25A28] font-semibold">Comunidad activa:</span> Fomentar la interacción donde usuarios
                                comparten experiencias y apoyan directamente a los refugios.
                            </p>
                        </div>
                    </div>


                </div>

                {/* Imagen con mejoras */}
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <div className="relative rounded-xl overflow-hidden transition-all duration-500 group">
                        <div className="absolute inset-0  to-transparent z-10"></div>
                        <Image
                            alt="Rescate animal en Costa Rica"
                            className="sm:w-[24.5rem] sm:h-[24.5rem] mx-auto object-cover  transition-transform duration-700 ease-out"
                            height={2000}
                            src={"/mision.png"}
                            width={2000}
                        />
        
                    </div>
                    <div className="mt-8 p-5 bg-[#B25A28]/10 rounded-xl border border-[#B25A28]/20">
                        <p className="text-[#B25A28] italic font-medium text-center md:text-left">
                            Trabajamos cada día para construir puentes entre corazones y patas necesitadas
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};