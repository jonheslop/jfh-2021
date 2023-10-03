/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from "react";
import { Exif, StreamPhoto } from "@/interfaces";
import Link from "next/link";
import ExifList from "./exif-list";

type Props = {
  photo: StreamPhoto,
};

const StreamOverlay = ({photo, ...props}: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const parsedExif: Exif = photo.exif ? JSON.parse(photo.exif?.toString()): {};
  return (
    <>
      <Link href={`/stream`} className="fixed inset-0 bg-black/20 backdrop-blur-sm"/>
      <div className="fixed inset-4 lg:inset-16 flex items-center justify-center pointer-events-none">
        <button className="text-6xl text-white p-4">&larr;</button>
        <div className={`bg-white p-2 lg:p-6 2xl:p-8 pointer-events-auto grid ${isExpanded ? "grid-cols-3" : "grid-cols-1"} gap-2 lg:gap-4 relative w-100 group`}>
          <img
            className="w-auto max-h-[calc(100vh-12rem)] col-span-2 self-center"
            alt=""
            id={`image-${photo.id}`}
            src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/large`}/>

          {
            Object.keys(parsedExif).length !== 0 && <ExifList exif={parsedExif} isExpanded={isExpanded} setExpanded={(bool:boolean) => setIsExpanded(bool)}/>
          }
        </div>
        <button className="text-6xl text-white p-4">&rarr;</button>
      </div>
    </>
  )
}

export default StreamOverlay;
