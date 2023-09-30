/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Exif, StreamPhoto } from "@/interfaces";
import Link from "next/link";
import ExifList from "./exif-list";

type Props = {
  photo: StreamPhoto,
};

const StreamOverlay = ({photo, ...props}: Props) => {
  const parsedExif: Exif = photo.exif ? JSON.parse(photo.exif?.toString()): {};
  return (
    <>
      <Link href={`/stream#image-${photo.id}`} className="fixed inset-0 bg-black/10 backdrop-blur-sm"/>
      <div className="fixed inset-4 lg:inset-16 flex items-center justify-center pointer-events-none">
        <div className="bg-white p-2 lg:p-8 rounded-lg pointer-events-auto flex gap-8">
          <img
            className="w-auto max-h-[calc(100vh-12rem)]"
            alt=""
            id={`image-${photo.id}`}
            src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/large`}/>

          {
            Object.keys(parsedExif).length !== 0 && <ExifList exif={parsedExif}/>
          }
        </div>
      </div>
    </>
  )
}

export default StreamOverlay;
