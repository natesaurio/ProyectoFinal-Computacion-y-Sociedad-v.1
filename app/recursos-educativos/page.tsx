"use client";
import { faArrowDown, faArrowUp, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable prettier/prettier */
import { Card, CardHeader, CardBody } from '@heroui/card';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from "framer-motion";
// Datos de los recursos educativos
const educationalResources = [
    {
        title: "Medidas para proteger a animales en peligro de extinción",
        subtitle: "Guía práctica para la protección de especies en peligro de extinción",
        category: "Primeros pasos",
        type: "text",
        whatFullResource: true,
        content: `
            <ol>
                <li>Reforesta bosques y espacios naturales para proteger ecosistemas</li>
                <li>Reduce la contaminación y elige alternativas ecológicas</li>
                <li>Respeta las áreas protegidas y su biodiversidad</li>
                <li>Combate el mascotismo exótico y la caza furtiva</li>
                <li>Evita productos fabricados con especies en peligro</li>
                <li>Participa como voluntario en organizaciones protectoras</li>
                <li>Apoya económicamente programas de conservación</li>
            </ol>
    `,
        link: "https://www.esneca.lat/blog/medidas-proteger-animales-peligro-extincion/"
    },
    {
        title: "Guia de Primeros Auxilios para Mascotas",
        type: "pdf",
        subtitle: "Qué hacer en caso de emergencia con mascotas o animales callejeros",
        category: "Salud",
        content: `
        <p class="mb-2">Descarga la guía de primeros auxilios para mascotas:</p>
    `,
        whatFullResource: false,
        link: "https://ebusiness.avma.org/files/productdownloads/LR_COM_ClientBroch_FirstAidSpanish_051616.pdf"
    },
    {
        title: "Bienestar animal básico",
        type: "pdf",
        subtitle: "Principios fundamentales para el cuidado de animales",
        category: "Educación",
        whatFullResource: false,
        content: `
        <div class="space-y-3">
          <p class="font-medium text-gray-800">La Asamblea Legislativa de la República de Costa Rica decreta:</p>
          <p class="font-bold text-[#B25A28]">Ley N° 7451</p>
          <div class="mt-4 space-y-2 pl-4 border-l-4 border-[#B25A28]">
            <p class="font-medium">La familia y las instituciones educativas fomentarán en niños y jóvenes:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Conciencia de que el maltrato animal lesiona la dignidad humana</li>
              <li>Respeto por todos los seres vivos</li>
              <li>Compasión por los animales que sufren</li>
              <li>Conocimiento de las normas de protección animal</li>
            </ul>
          </div>
        </div>
      `,
        link: "https://vinv.ucr.ac.cr/sites/default/files/files/ley_bienestar-animales%207451.pdf"
    },
    {
        title: "Recursos educativos digitales",
        subtitle: "Material de aprendizaje sobre protección animal",
        type: "text",
        whatFullResource: false,
        category: "Materiales",
        content: `
          <div class="space-y-3">
            <p class="text-gray-700 font-medium">Enlaces a recursos educativos confiables:</p>
            <ul class="space-y-2.5">
              <li class="flex items-start">
                <span class="inline-block h-1.5 w-1.5 mt-2 mr-2 bg-[#B25A28] rounded-full flex-shrink-0"></span>
                <a href="https://www.worldanimalprotection.org/" 
                   class="text-[#B25A28] hover:text-[#8c451f] font-medium hover:underline transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  Protección Animal Mundial
                </a>
              </li>
              <li class="flex items-start">
                <span class="inline-block h-1.5 w-1.5 mt-2 mr-2 bg-[#B25A28] rounded-full flex-shrink-0"></span>
                <a href="https://www.hsi.org/" 
                   class="text-[#B25A28] hover:text-[#8c451f] font-medium hover:underline transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  Humane Society International
                </a>
              </li>
              <li class="flex items-start">
                <span class="inline-block h-1.5 w-1.5 mt-2 mr-2 bg-[#B25A28] rounded-full flex-shrink-0"></span>
                <a href="https://fawe.org/es/recursos/" 
                   class="text-[#B25A28] hover:text-[#8c451f] font-medium hover:underline transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  FAWE - Recursos educativos
                </a>
              </li>
              <li class="flex items-start">
                <span class="inline-block h-1.5 w-1.5 mt-2 mr-2 bg-[#B25A28] rounded-full flex-shrink-0"></span>
                <a href="https://education.nationalgeographic.org/" 
                   class="text-[#B25A28] hover:text-[#8c451f] font-medium hover:underline transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  National Geographic - Recursos sobre animales
                </a>
              </li>
            </ul>
          </div>
        `,
        link: "https://www.animal-ethics.org/material-educativo/"
    },
    {
        title: "Bienestar Animal-Introduccion y Conceptos",
        subtitle: "Material de aprendizaje sobre protección animal",
        type: "video",
        category: "Primeros pasos",
        whatFullResource: true,
        content: `
        <p>Enlace a un video educativo :</p>
        <iframe className="rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/DQ8HB-fhVE0" title="Bienestar Animal-Introduccion y Conceptos" frameBorder="0" allowFullScreen></iframe>
    `,
        link: "https://www.youtube.com/watch?v=DQ8HB-fhVE0"
    }
];

// Categorías de recursos
const resourceCategories = [
    "Primeros pasos",
    "Salud",
    "Educación",
    "Materiales",
    "Todos"
];

export default function EducationalResources() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCardExpand = (index: any) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    const filteredResources = selectedCategory === "Todos"
        ? educationalResources
        : educationalResources.filter(resource => resource.category === selectedCategory);

    return (
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
            className="container mx-auto px-4 py-8"
            exit={{ x: 100, opacity: 0 }}
            initial={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className="text-4xl text-[#B25A28] font-bold text-center mb-20">Recursos Educativos</h1>

            {/* Filtros por categoría */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {resourceCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full ${selectedCategory === category
                            ? 'bg-[#B25A28]  text-white'
                            : 'bg-gray-200 text-zinc-700 hover:bg-gray-300'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Cards de recursos educativos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource, index) => (
                    <Card
                        key={index}
                        className="hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-white text-black border border-gray-100 rounded-lg overflow-hidden"
                    >
                        <CardHeader className="pb-3 px-6 pt-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-xl text-[#B25A28] font-bold tracking-tight">{resource.title}</h2>
                                    <p className="text-gray-600 text-sm mt-1">{resource.subtitle}</p>
                                </div>
                            </div>
                            <span className="inline-block bg-[#B25A28] bg-opacity-15 text-[#B25A28] font-medium text-xs px-3 py-1 rounded-full mt-3">
                                {resource.category}
                            </span>
                        </CardHeader>

                        <CardBody className="flex-grow px-6 py-2">
                            <div
                                className={`prose text-gray-700 text-sm leading-relaxed ${expandedCard === index ? '' : 'line-clamp-4'}`}
                                dangerouslySetInnerHTML={{ __html: resource.content }}
                            />
                            {resource.type === "pdf" && (
                                <Link href={resource.link}>
                                    <FontAwesomeIcon size='xl' icon={faFilePdf} className='bg-red-600 shadow-xl w-[4rem] text-white px-3 py-1 rounded-lg' />
                                </Link>
                            )}
                            <div className="mt-4">
                                {expandedCard !== index ? (
                                    <button
                                        onClick={() => toggleCardExpand(index)}
                                        className="flex items-center justify-center gap-1.5 text-white bg-[#B25A28] hover:bg-[#9a4b23] transition-colors w-full md:w-auto px-4 py-2 rounded-lg text-sm font-medium"
                                    >
                                        Leer más
                                        <FontAwesomeIcon icon={faArrowDown} className="text-xs" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => toggleCardExpand(index)}
                                        className="flex items-center justify-center gap-1.5 text-white bg-[#9a4b23] hover:bg-[#823e1d] transition-colors w-full md:w-auto px-4 py-2 rounded-lg text-sm font-medium"
                                    >
                                        Mostrar menos
                                        <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
                                    </button>
                                )}
                            </div>
                        </CardBody>

                        {
                            resource.whatFullResource && (
                                <div className="px-6 pb-5 pt-2">
                                    <a
                                        href={resource.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center group text-[#B25A28] hover:text-[#823e1d] text-sm font-medium transition-colors"
                                    >
                                        Ver recurso completo
                                        <svg
                                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            )
                        }
                    </Card>
                ))}
            </div>
        </motion.section>
    );
}