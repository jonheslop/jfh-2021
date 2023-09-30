/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {StreamPhoto, GroupedStream, Exif} from '@/interfaces/index';

type Props = {
  photo: StreamPhoto
};

const StreamGridItem = ({photo, ...props}: Props) => {
  const {id, cloudflareId, exif} = photo;
  const parsedExif: Exif = exif ? JSON.parse(exif?.toString()): {};

  return (
    <figure key={id}>
      <img
        alt=""
        id={`image-${id}`}
        src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${cloudflareId}/small`}/>
      
      {Object.keys(parsedExif).length !== 0 && <p>Camera: {parsedExif.Model}</p>}
    </figure>
  );
};

export default StreamGridItem;
