'use client';
import { Card, CardHeader, CardBody } from '@heroui/card';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from "framer-motion";
import { CardOrganization } from '@/components/cardOrganization';
// Datos de las organizaciones
const organizations = [
  {
    title: "AHPPA",
    subtitle: "Refugio De Animales Costa Rica",
    category: "Heredia",
    imageUrl: "/AHPPA.PNG",
    url: "https://ahppa.com/es/"
  },
  {
    title: "Wildlife Rescue Center",
    subtitle: "Zoave",
    category: "Alajuela",
    imageUrl: "/zoave.PNG",
    url: "https://www.rescuecenter.com/"
  },
  {
    title: "ANPA",
    subtitle: "Asociación Nacional Protectora de Animales",
    category: "San José",
    imageUrl: "/ANPA.jpg",
    url: "https://anpacostarica.com/"
  },
  {
    title: "Animales de Asís",
    subtitle: "Santuario",
    category: "Heredia",
    imageUrl: "/asis.png",
    url: "https://animalesdeasis.com/"
  },
];

// Lista de provincias
const provinces = [
  "San José",
  "Alajuela",
  "Cartago",
  "Heredia",
  "Guanacaste",
  "Puntarenas",
  "Limón",
  "Todas" // Opción para mostrar todas
];

export default function OrganizationPage() {
  const [selectedProvince, setSelectedProvince] = useState("Todas");

  // Filtrar organizaciones por provincia seleccionada
  const filteredOrganizations = selectedProvince === "Todas"
    ? organizations
    : organizations.filter(org => org.category === selectedProvince);

  // Agrupar organizaciones en filas de 4
  const rows = [];
  for (let i = 0; i < filteredOrganizations.length; i += 4) {
    rows.push(filteredOrganizations.slice(i, i + 4));
  }

  return (
    <motion.div 
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
    exit={{ x: 100, opacity: 0 }}
    initial={{ x: -300, opacity: 0 }}
    transition={{ duration: 0.3 }}
    className='flex flex-col items-center'>
      <h1 className="text-4xl font-bold mb-8  text-[#B25A28] text-4xl font-bold">Organizaciones</h1>

      {/* Mostrar organizaciones filtradas */}
      <div className='flex flex-col justify-center items-center gap-4 min-h-screen '>
        {/* Filtro por provincia */}
        <div className='self-start'>
          <p className="text-lg mb-4 text-gray-600 ">Encuentra organizaciones de bienestar animal en Costa Rica</p>
        </div>
        <div className="mb-4 sm:self-start">
          <select
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="px-4 py-3 text-lg bg-white text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded-lg"
          >
            {provinces.map(province => (
              <option className='' key={province} value={province}>{province}</option>
            ))}
          </select>
        </div>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className='flex flex-col sm:flex-row justify-center items-center gap-4'>
            {row.map((org, orgIndex) => (
              <CardOrganization
                key={`${rowIndex}-${orgIndex}`}
                title={org.title}
                subtitle={org.subtitle}
                category={org.category}
                imageUrl={org.imageUrl}
                url={org.url}
              />
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

