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
      <Link href={`/stream`} className="fixed inset-0 bg-black/20 backdrop-blur-sm group"><span className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center text-black text-2xl absolute top-4 right-4 group-hover:bg-emerald-600 group-hover:text-white">×</span></Link>
      <div className="fixed inset-4 lg:inset-16 flex items-center justify-center">
        <Link href={`/stream/${photo.id + 1}`} className="self-stretch flex items-center justify-end text-6xl text-white p-4 flex-1 hover:-translate-x-8 transition-all">&larr;</Link>
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
        <Link href={`/stream/${photo.id - 1}`} className="self-stretch flex items-center text-6xl text-white p-4 flex-1 hover:translate-x-8 transition-all">&rarr;</Link>
      </div>
    </>
  )
}

export default StreamOverlay;
