'use client';
import { Card, CardHeader, CardBody } from '@heroui/card';
import Image from 'next/image';
import { useState } from 'react';

// Datos de las organizaciones
const organizations = [
  {
    title: "AHPPA",
    subtitle: "Refugio De Animales Costa Rica",
    category: "Heredia",
    imageUrl: "/AHPPA.PNG"
  },
  {
    title: "Wildlife Rescue Center",
    subtitle: "Zoave",
    category: "Alajuela",
    imageUrl: "/zoave.PNG"
  },
  {
    title: "ANPA",
    subtitle: "Asociación Nacional Protectora de Animales",
    category: "San José",
    imageUrl: "/ANPA.jpg"
  },
  {
    title: "Animales de Asís",
    subtitle: "Santuario",
    category: "Heredia",
    imageUrl: "/asis.png"
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
    <div className='flex flex-col items-center'>
      <h1 className="text-4xl font-bold mb-8 text-gray-800 transition-all hover:text-blue-600">Organizaciones</h1>
      
      {/* Filtro por provincia */}
      <div className="mb-8">
        <select
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {provinces.map(province => (
            <option key={province} value={province}>{province}</option>
          ))}
        </select>
      </div>

      {/* Mostrar organizaciones filtradas */}
      <div className='flex flex-col justify-center items-center gap-8 min-h-screen'>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className='flex flex-col sm:flex-row justify-center items-center gap-4'>
            {row.map((org, orgIndex) => (
              <CardOrganization 
                key={`${rowIndex}-${orgIndex}`}
                title={org.title}
                subtitle={org.subtitle}
                category={org.category}
                imageUrl={org.imageUrl}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CardOrganization({ 
  title = "Frontend Radio", 
  subtitle = "12 Tracks", 
  category = "Daily Mix", 
  imageUrl = "https://heroui.com/images/hero-card-complete.jpeg" 
}) {
  return (
    <Card className="py-4 w-[300px] flex flex-col">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{category}</p>
        <small className="text-default-500">{subtitle}</small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex-1 flex flex-col">
        <div className="w-full h-[200px] relative rounded-xl overflow-hidden flex items-center justify-center bg-card">
          <Image
            alt={title}
            src={imageUrl}
            fill
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
            }}
            className="rounded-xl"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      </CardBody>
    </Card>
  );
}