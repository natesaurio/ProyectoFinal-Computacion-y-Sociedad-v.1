/* eslint-disable prettier/prettier */
"use client"
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export const MainSectionAboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 md:px-8 mx-auto mt-10 max-w-3xl">
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="w-64 h-64 md:w-[40rem] md:h-80 relative">
          <Image
            src={"/logo.png"}
            alt="Rescate animal en Costa Rica"
            fill
            
            className="object-contain transition-transform duration-300 "
          />
        </div>

        <div className="w-full md:w-3/4 text-center space-y-5">
          <p className="text-zinc-700 text-base md:text-lg leading-relaxed">
            En nuestra plataforma, conectamos corazones y salvamos vidas. Únete a la comunidad que impulsa el bienestar animal en Costa Rica: adopta de manera responsable, aprende sobre cuidado animal y apoya a organizaciones de rescate.
          </p>
          <p className="text-zinc-700 text-lg md:text-xl font-medium">
            ¡Juntos podemos hacer la diferencia!
          </p>
          <div className="pt-4">
            <button className="bg-[#B25A28] hover:bg-[#a04b1e] text-white font-medium py-2.5 px-6 rounded-md transition-colors duration-200">
              Conoce más
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}