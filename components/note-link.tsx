import React from 'react';
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
      <Link key={data.slug} href={`/posts/${data.slug}`} underline={false}>
        <Heading level="h3" classes="underline">{data.title}</Heading>
        <p className="mt-1 text-xl md:text-lg lg:text-xl text-gray-500"><DateFormatter dateString={data.date}/></p>
      </Link>
    </li>
  );
};

export default NoteLinkItem;
