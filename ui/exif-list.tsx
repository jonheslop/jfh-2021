'use client'

import React, { useState } from "react";
import { Exif } from "@/interfaces";
import { convertToClosestFraction } from "@/lib/helpers";
import DateFormatter from "./date";
import Heading from "./heading";

type Props = {
  exif: Exif;
  isExpanded: boolean;
  setExpanded: Function;
}

const ExifList = ({exif, isExpanded, setExpanded}: Props) => {

  if (!isExpanded) {
    return <button title="Show photo exif data" onClick={() => setExpanded(true)} className="bg-white/20 rounded-full w-8 h-8 absolute top-6 lg:top-8 right-6 lg:right-8 flex items-center justify-center font-serif italic group-hover:bg-emerald-600 bg-blend-multiply">i</button>
  }

  return (
    <div className="relative">
      <Heading level="h4" classes="mb-4">Exif</Heading>
      <ul className="list space-y-2 text-sm">
        <li><span className="text-gray-500">Camera:</span> <span>{exif.Model}</span></li>
        <li><span className="text-gray-500">Lens:</span> <span>{exif.LensModel}</span></li>
        <li><span className="text-gray-500">Aperture:</span> <span>ƒ {exif.FNumber}</span></li>
        <li><span className="text-gray-500">Exposure:</span> <span>{convertToClosestFraction(exif.ExposureTime)}</span></li>
        <li><span className="text-gray-500">Ev:</span> <span>{exif.ExposureCompensation}</span></li>
        <li><span className="text-gray-500">ISO:</span> <span>{exif.ISO}</span></li>
        <li><span className="text-gray-500">Focal length:</span> <span>{exif.FocalLengthIn35mmFormat}</span></li>
        <li><span className="text-gray-500">Time:</span> <span>{<DateFormatter includeTime dateString={exif.CreateDate} />}</span></li>
      </ul>
      <button onClick={() => setExpanded(false)} className="bg-black/10 rounded-full w-8 h-8 flex items-center justify-center text-black absolute top-0 right-0 hover:bg-emerald-600 hover:text-white">×</button>
    </div>
  )
}

export default ExifList;

// Could include location but it’s very accurate and so probably not sensible 
// {exif.latitude && exif.longitude && 
// <li><span className="text-gray-500">Location:</span> <span>{exif.latitude?.toFixed(2)}, {exif.longitude?.toFixed(2)}</span></li>}
