'use client';
import Image from 'next/image';
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { motion } from 'framer-motion';
import interactionPlugin from '@fullcalendar/interaction';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@heroui/modal";


const events = [
  {
    title: 'Vacunación Animales',
    date: '2025-04-10',
    allDay: true,
    extendedProps: {
      campaignUrl: 'https://www.ejemplo.com/campana-vacunacion-animales',
      description: 'Jornada de vacunación para animales domésticos.',
      location: 'Parque Municipal',
    },
    
  },
  {
    title: 'ExpoPatitas',
    date: '2025-03-14',
    extendedProps: {
      campaignUrl: "",
      description: 'Pasarelas de razas icónicas: Perros de todas las razas populares como Dachshund, Beagles, Corgis, Ovejeros, Dálmatas y Chihuahuas, entre otros, deslumbrarán en una pasarela de moda canina.',
      location: 'Centro Comercial Paseo de las Flores',
    }
  },
  {
    title: 'ExpoPatitas',
    date: '2025-03-16',
    extendedProps: {
      campaignUrl: "",
      description: 'ExpoPatitas también ofrece importantes servicios como una campaña de castración (el domingo 16 de marzo a partir de las 7 a.m.) y una jornada de desparasitación a la 1 p.m. Además, habrá un área de adopción de mascotas para quienes quieran adoptar responsablemente',
      location: 'Centro Comercial Paseo de las Flores',
    }
  },
  {
    title: 'ExpoPatitas',
    date: '2025-03-15',
    extendedProps: {
      campaignUrl: "",
      description: 'Actividades para todos: Habrá una convención de salchichas, concursos, y actividades interactivas para disfrutar en grande.',
      location: 'Centro Comercial Paseo de las Flores',
    }
  }
];

//crear modal para mostrar la informacion de cada evento
const EventModal = ({ event, isOpen, onClose }: {
  event: any;
  isOpen: boolean;
  onClose: () => void
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      classNames={{
        closeButton: 'hover:bg-slate-100 hover:text-black focus:bg-slate-100 focus:text-black',
      }}
      size="lg"
      className="bg-white text-black"
    >
      <ModalContent>
        <ModalHeader>{event.title}</ModalHeader>
        <ModalBody>
          <p>{event.extendedProps.description}</p>
          <p>Ubicación: {event.extendedProps.location}</p>
        </ModalBody>
        <ModalFooter>
          {
          event.extendedProps.campaignUrl != "" ?(
              <button
              className="bg-[#B25A28] text-white px-4 py-2 rounded"
              onClick={() => window.open(event.extendedProps.campaignUrl, '_blank')}
            >
              Ver Campaña
            </button>
            ):(
                <p className="text-gray-500">No hay URL disponible</p>
            )
          }

        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default function OrganizationPage() {

  const [selectedProvince, setSelectedProvince] = useState("Todas");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const handleEventClick = (click: any) => {
    setSelectedEvent(click.event);
    setModalOpen(true);
  }


  //crear un modal para mostrar la información de la campaña

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
    className="w-full flex flex-col items-center"
    exit={{ x: 100, opacity: 0 }}
    initial={{ x: -300, opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
      <div className="bg-white text-black max-w-5xl  rounded-lg w-full p-4">
        <div className="w-full w-full mx-auto">
          {/* FullCalendar */}
          <h1 className="text-4xl font-bold mb-6 mt-6 text-center text-[#B25A28]">Calendario de Eventos</h1>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale="es"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,dayGridWeek'
            }}
            eventClick={handleEventClick}
            events={events}
            height="auto"
            contentHeight="auto"
            aspectRatio={1.5}
          />
        </div>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </motion.section>
  );
}