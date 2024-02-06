import React from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  external?: boolean;
  underline?: boolean;
  classes?: string;
  light?: boolean;
  children: React.ReactNode;
};

const BaseLink = ({
  href,
  external = false,
  underline = true,
  classes = '',
  light = false,
  children,
}: Props) => {
  const BASE_CLASSES = light ? 'hover:text-green-950' : 'hover:text-green-600';
  const all_classes = `${BASE_CLASSES} ${underline && 'underline'} ${classes}`;
  const linkAttributes = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <Link href={href} className={`${all_classes}`} {...linkAttributes}>
      {children}
    </Link>
  );
};

export default BaseLink;
