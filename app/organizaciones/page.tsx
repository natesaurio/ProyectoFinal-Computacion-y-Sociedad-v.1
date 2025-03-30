import {Card, CardHeader, CardBody} from '@heroui/card'
import Image from 'next/image';  

export default function OrganizationPage(){
  return (
    <div className='flex flex-col items-center'>
      <h1 className="text-black font-semibold text-4xl">Organizaciones</h1>
      <div className='flex flex-col justify-center items-center gap-8 min-h-screen'>
        {/* Primera fila */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
          <CardOrganization 
            title="React Developers" 
            subtitle="15 Miembros" 
            category="Tecnología"
            imageUrl="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <CardOrganization 
            title="Diseño UX/UI" 
            subtitle="8 Proyectos" 
            category="Diseño"
            imageUrl="https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <CardOrganization 
            title="Marketing Digital" 
            subtitle="20 Campañas" 
            category="Negocios"
            imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <CardOrganization 
            title="Data Science" 
            subtitle="10 Analistas" 
            category="Ciencia"
            imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
        
        {/* Segunda fila */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
          <CardOrganization 
            title="Startup Founders" 
            subtitle="5 Emprendedores" 
            category="Negocios"
            imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <CardOrganization 
            title="IA Research" 
            subtitle="3 Papers" 
            category="Ciencia"
            imageUrl="https://images.unsplash.com/photo-1677442135136-760c813a743e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80"
          />
          <CardOrganization 
            title="Mobile Devs" 
            subtitle="7 Aplicaciones" 
            category="Tecnología"
            imageUrl="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <CardOrganization 
            title="DevOps Team" 
            subtitle="4 Sistemas" 
            category="Infraestructura"
            imageUrl="https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
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
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{category}</p>
        <small className="text-default-500">{subtitle}</small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imageUrl}
          width={270}
          height={270}
        />
      </CardBody>
    </Card>
  );
}
