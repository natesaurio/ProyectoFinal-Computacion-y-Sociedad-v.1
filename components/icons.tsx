import * as React from "react";
import Image from "next/image";
import { IconSvgProps } from "@/types";

export const Logo =({
  width = 539, 
  height = 310,
}) =>{
  return(
    <Image src="/logo.png" className="w-24" width={539} height={310} alt="pageLogo"/>
  )
}

