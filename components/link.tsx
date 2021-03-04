import React from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  external?: boolean;
  children: React.ReactNode;
};

const BaseLink = ({href, external = false, children}: Props) => {
  const linkAttributes = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  return (
    <Link href={href}>
      <a className="underline hover:text-green-600" {...linkAttributes}>
        { children }
      </a>
    </Link>
  );
};

export default BaseLink;
