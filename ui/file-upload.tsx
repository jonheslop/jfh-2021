<<<<<<< HEAD
'use client';
=======
/* eslint-disable @next/next/no-img-element */
"use client"
>>>>>>> 038d0c5 (Get width/height when adding an image)

import React, { ChangeEvent, useState } from 'react';
import { Exif, pickExif } from '@/interfaces/index';
import exifr from 'exifr';
import Heading from './heading';

const FileUpload = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [file, setFile] = useState<File>();
  const [exif, setExif] = useState<Exif>();
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      const rawExif = await exifr.parse(e.target.files[0]);
      const customExif = pickExif(rawExif);
      setExif(customExif);
    }
  };

  function formatBytes(bytes: number, decimals = 2) {
      if (!+bytes) return '0 Bytes'

      const k = 1024
      const dm = decimals < 0 ? 0 : decimals
      const sizes = ['Bytes', 'KB', 'MB']

      const i = Math.floor(Math.log(bytes) / Math.log(k))

      return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
  }


  const preview = (file: File) => {
    const url = URL.createObjectURL(file);
    const image = new Image()
    image.src = url;
    image.onload = function () {
      setWidth(image.width);
      setHeight(image.height);
    }
    return (
      <img src={url} alt="Upload preview" />
    )
  }

  return (
    <form className="space-y-4" action="/api/stream" method="post" encType="multipart/form-data">
      <label className="block text-lg text-gray-500" htmlFor="file">Add image</label>
      <input type="file"
             accept="image/*"
             multiple={false}
             required
             onChange={handleFileChange}
             name="file"
             id="file"
             className="p-16 border-dashed bg-gray-50 border border-gray-300 rounded" />
      <input type="hidden" name="exif" value={JSON.stringify(exif || {})}/>
      <input type="hidden" name="width" value={width}/>
      <input type="hidden" name="height" value={height}/>
      <button type="submit"
              disabled={isUploading}
              className="bg-emerald-600 px-4 py-2 rounded text-white flex items-center disabled:bg-gray-600">
        {isUploading ? "Uploading" : "Upload to Cloudflare"}
      </button>
      {file !== undefined && (
        <div className="pt-4 grid grid-cols-2 gap-8">
          {preview(file)}
          <div>
            <Heading level="h4" classes="mb-2">Preview</Heading>
            <p><span className="text-gray-500">Name:</span> {file.name}</p>
            <p><span className="text-gray-500">Width:</span> {width}px</p>
            <p><span className="text-gray-500">Height:</span> {height}px</p>
            <p><span className="text-gray-500">Size:</span> {formatBytes(file.size)}</p>
          </div>
        </div>
      )}
    </form>
  );
};

export default FileUpload;
