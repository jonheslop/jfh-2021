import React from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  external?: boolean;
  underline?: boolean;
  classes?: string;
  children: React.ReactNode;
};

const BASE_CLASSES = 'hover:text-green-600';

const BaseLink = ({href, external = false, underline = true, classes = '', children}: Props) => {
  const all_classes = `${BASE_CLASSES} ${underline && 'underline'} ${classes}`;
  const linkAttributes = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  return (
    <Link href={href} className={`${all_classes}`} {...linkAttributes}>
      { children }
    </Link>
  );
};

export default BaseLink;
