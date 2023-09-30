/* eslint-disable @next/next/no-img-element */
import React from "react";
import { StreamPhoto } from "@/interfaces";

type Props = {
  photo: StreamPhoto,
};

const StreamOverlay = async ({photo, ...props}: Props) => {
  console.log(photo)
  return (
    <>
      <div className="fixed inset-0 bg-black/10 backdrop-blur-sm"/>
      <div className="bg-white p-8 rounded-lg fixed top-48 left-16 right-16">
        <img
          alt=""
          id={`image-${photo.id}`}
          src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/large`}/>
      </div>
    </>
  )
}

export default StreamOverlay;
