import React from 'react';

type Props = {
  count: number;
  heading?: boolean;
  classes?: string;
};

const Loader = ({ count, heading, classes }: Props) => {
  return (
    <div className={`${classes} animate-pulse grid gap-2 md:gap-4 lg:gap-8`}>
      {heading ? (
        <span className="col-span-8">
          <span className="block bg-gray-200 dark:bg-gray-800 w-44 h-8 rounded-xl"></span>
        </span>
      ) : null}
      {[...Array(count)].map(() => (
        <div
          key={crypto.randomUUID()}
          className="bg-gray-200 dark:bg-gray-800 aspect-[2/3]"
        />
      ))}
    </div>
  );
};

export default Loader;
