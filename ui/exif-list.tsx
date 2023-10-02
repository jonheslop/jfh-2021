'use client'

import React, { useState } from "react";
import { Exif } from "@/interfaces";
import { convertToClosestFraction } from "@/lib/helpers";
import DateFormatter from "./date";

type Props = {
  exif: Exif;
}

const ExifList = ({exif}: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  if (!isExpanded) {
    return <button onClick={() => setIsExpanded(true)} className="bg-white/20 rounded-full w-8 h-8 absolute top-6 lg:top-12 right-6 lg:right-12 flex items-center justify-center text-white font-serif italic">i</button>
  }

  return (
    <>
      <ul className="list space-y-2">
        <li><span className="text-gray-500">Camera:</span> <span>{exif.Model}</span></li>
        <li><span className="text-gray-500">Lens:</span> <span>{exif.LensModel}</span></li>
        <li><span className="text-gray-500">Aperture:</span> <span>ƒ {exif.FNumber}</span></li>
        <li><span className="text-gray-500">Exposure:</span> <span>{convertToClosestFraction(exif.ExposureTime)}</span></li>
        <li><span className="text-gray-500">Ev:</span> <span>{exif.ExposureCompensation}</span></li>
        <li><span className="text-gray-500">ISO:</span> <span>{exif.ISO}</span></li>
        <li><span className="text-gray-500">Focal length:</span> <span>{exif.FocalLengthIn35mmFormat}</span></li>
        <li><span className="text-gray-500">Time:</span> <span>{<DateFormatter includeTime dateString={exif.CreateDate} />}</span></li>
      </ul>
      <button onClick={() => setIsExpanded(false)} className="bg-black/10 rounded-full w-8 h-8 flex items-center justify-center text-black shrink-0">×</button>
    </>
  )
}

export default ExifList;

// Could include location but it’s very accurate and so probably not sensible 
// {exif.latitude && exif.longitude && 
// <li><span className="text-gray-500">Location:</span> <span>{exif.latitude?.toFixed(2)}, {exif.longitude?.toFixed(2)}</span></li>}
