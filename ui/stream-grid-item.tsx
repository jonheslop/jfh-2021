/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { StreamPhoto } from '@/interfaces/index';
import Link from 'next/link';

type Props = {
  photo: StreamPhoto
};

const StreamGridItem = ({photo, ...props}: Props) => {
  const {id, cloudflareId} = photo;

  return (
    <Link href={`/stream/${id}`} key={id}>
      <img
        alt=""
        id={`image-${id}`}
        src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${cloudflareId}/small`}/>
    </Link>
  );
};

export default StreamGridItem;
