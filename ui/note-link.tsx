import React from 'react';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import Heading from './heading';
import Link from './link';
import DateFormatter from './date';
import { Blog } from 'contentlayer/generated'

type Props = {
  data: Blog;
};

const NoteLinkItem = ({data}: Props) => {
  return (
    <li className="mb-8">
      <Link key={data.slug} href={`/posts/${data.slug}`} underline={false} classes="flex gap-8 justify-between">
        <div>
          <Heading level="h3" classes="underline">
            <Balancer>{data.title}</Balancer>
          </Heading>
          <p className="mt-1 text-xl md:text-lg lg:text-xl text-gray-500"><DateFormatter dateString={data.date}/></p>
        </div>
        {data.coverImage !== undefined && (
          <figure className='w-28'>
            <Image loading="lazy" width={256} height={171} alt="" src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${data.coverImage}/thumb`}/>
          </figure>
        )}
      </Link>
    </li>
  );
};

export default NoteLinkItem;
