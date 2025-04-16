
'use client';
import { Card, CardHeader, CardBody } from '@heroui/card';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from "framer-motion";

export function CardOrganization({
    title = "Frontend Radio",
    subtitle = "12 Tracks",
    category = "Daily Mix",
    imageUrl = "https://heroui.com/images/hero-card-complete.jpeg",
    url = "https://heroui.com",
  }) {
    return (
      <Card className="py-4 xl:w-[18rem] md:w-[13rem] sm:w-[10.5rem] h-[350px]  w-full flex flex-col bg-white text-black hover:scale-105 transition-all duration-300 ease-in-out shadow-lg rounded-lg border border-gray-200 hover:shadow-xl">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
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
        </CardHeader>
        <Link
          href={`${url}`}
        >
          <CardBody className="overflow-visible py-2 flex-1 flex flex-col">
            <p className="text-tiny uppercase font-bold">{category}</p>
            <small className="text-default-500">{subtitle}</small>
            <h4 className="font-bold text-large text-xl text-[#B25A28]">{title}</h4>
          </CardBody>
        </Link>
      </Card>
    );
  }