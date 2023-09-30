/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Exif, StreamPhoto } from "@/interfaces";
import Link from "next/link";

type Props = {
  photo: StreamPhoto,
};

const StreamOverlay = async ({photo, ...props}: Props) => {
  const parsedExif: Exif = photo.exif ? JSON.parse(photo.exif?.toString()): {};
  return (
    <>
      <Link href="/stream" className="fixed inset-0 bg-black/10 backdrop-blur-sm"/>
      <div className="fixed top-16 left-16 right-16 flex justify-center pointer-events-none">
        <div className="bg-white p-8 rounded-lg pointer-events-auto">
          <img
            className="w-auto max-h-[calc(100vh-12rem)]"
            alt=""
            id={`image-${photo.id}`}
            src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/large`}/>

          {Object.keys(parsedExif).length !== 0 && <p>Camera: {parsedExif.Model}</p>}
        </div>
      </div>
    </>
  )
}

export default StreamOverlay;
