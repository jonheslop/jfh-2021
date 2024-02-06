'use client';

import React, { ChangeEvent, useState } from 'react';
import { Exif, pickExif } from '@/interfaces/index';
import exifr from 'exifr';

const FileUpload = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [file, setFile] = useState<File>();
  const [exif, setExif] = useState<Exif>();

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      const rawExif = await exifr.parse(e.target.files[0]);
      const customExif = pickExif(rawExif);
      setExif(customExif);
    }
  };

  return (
    <form
      className="space-y-4"
      action="/api/stream"
      method="post"
      encType="multipart/form-data"
    >
      <label className="block text-lg text-gray-500" htmlFor="file">
        Add image
      </label>
      <input
        type="file"
        accept="image/*"
        multiple={false}
        required
        onChange={handleFileChange}
        name="file"
        id="file"
        className="p-16 border-dashed bg-gray-50 border border-gray-300 rounded"
      />
      <input type="hidden" name="exif" value={JSON.stringify(exif || {})} />
      <button
        type="submit"
        disabled={isUploading}
        className="bg-emerald-600 px-4 py-2 rounded text-white flex items-center disabled:bg-gray-600"
      >
        {isUploading ? 'Uploading' : 'Upload to Cloudflare'}
      </button>
    </form>
  );
};

export default FileUpload;
