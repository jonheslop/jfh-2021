import React from 'react';
import Image from 'next/image';
import {NoteLink} from '@/interfaces/index';
import Heading from './heading';
import Link from './link';
import DateFormatter from './date';

type Props = {
  data: NoteLink;
};

const NoteLinkItem = ({data}: Props) => {
  return (
    <li className="mb-8">
      <Link key={data.slug} href={`/posts/${data.slug}`} underline={false} classes="flex gap-8 justify-between">
        <div>
          <Heading level="h3" classes="underline">{data.title}</Heading>
          <p className="mt-1 text-xl md:text-lg lg:text-xl text-gray-500"><DateFormatter dateString={data.date}/></p>
        </div>
        {data.coverImage !== undefined && (
          <figure className='w-28'>
            <Image width={256} height={171} alt="" src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${data.coverImage}/thumb`}/>
          </figure>
        )}
      </Link>
    </li>
  );
};

export default NoteLinkItem;
