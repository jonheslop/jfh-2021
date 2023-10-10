import React from 'react';
import { StreamPhoto } from '@/interfaces/index';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  photo: StreamPhoto;
};

const StreamGridItem = ({ photo, ...props }: Props) => {
  const { id, cloudflareId, width, height } = photo;

  return (
    <Link href={`/stream/${id}`} key={id}>
      <Image
        alt=""
        id={`image-${id}`}
        width={width}
        height={height}
        src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${cloudflareId}/stream`}
      />
    </Link>
  );
};

export default StreamGridItem;
