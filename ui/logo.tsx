import React from 'react';
import Link from 'next/link';

type Props = {
  mono?: boolean;
};

const Logo = ({ mono = false }: Props) => {
  return (
    <h1
      className={`text-4xl ${
        mono ? 'text-white' : 'text-green-600'
      } md:sticky top-16 row-span-full`}
    >
      <Link
        href="/"
        className={`${mono ? 'hover:text-green-100' : 'hover:text-green-800'}`}
        title="JFH Logo - click to go to homepage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          viewBox="0 0 682.17 682.18"
          className="rounded-full"
        >
          <title>JFH Logo</title>
          <path
            fill="currentColor"
            d="M0 0v682.17h682.17V0zm209.68 444.37s0 18.68-18.33 41.45c-21.23 26.36-26 28.59-26 28.59l-28-30.35 19.11-18.09s6.57-7.45 6.57-14.6V273.78l46.72-9.34zm311.48-60.08l-46.73 9.34v-70.08l-54.57 10.91v70.08l-46.73 9.35V276.05l-81.78 16.36v25.71l46.77-9.34v42.04l-46.77 9.3v70.08l-46.66 9.35-.06-182.22 175.27-35v70.09l54.57-10.91v-70.1l46.73-9.34z"
          />
        </svg>
      </Link>
    </h1>
  );
};

export default Logo;
