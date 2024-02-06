import React from 'react';
import { headingLevel } from '@/interfaces/index';

type Props = {
  level?: headingLevel;
  classes?: string;
  children: React.ReactNode;
};

const Heading = ({ level = 'h2', classes = '', children, ...props }: Props) => {
  const Tag = level;
  let baseClasses: string;
  switch (level) {
    case 'h1':
      baseClasses = 'text-4xl md:text-3xl lg:text-4xl xl:text-5xl';
      break;
    case 'h4':
      baseClasses = 'text-xl md:text-lg lg:text-xl text-gray-500';
      break;
    default:
      baseClasses = 'text-4xl md:text-2xl lg:text-4xl';
      break;
  }

  return (
    <Tag className={`${baseClasses} ${classes}`} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
