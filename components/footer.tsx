import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center w-full p-8 md:p-16 text-xs md:text-sm justify-between">
      <section className="flex flex-wrap space-x-6 space-x-reverse mt-4 sm:mt-0 pb-2 border-b sm:pb-0 sm:border-none">
        <Link classes="my-2 lg:my-0 mr-6" external href="https://github.com/jonheslop">Github</Link>
        <Link classes="my-2 lg:my-0" external href="https://instagram.com/jonheslop">Instagram</Link>
        <Link classes="my-2 lg:my-0" external href="https://keybase.io/jonheslop">Keybase</Link>
        <Link classes="my-2 lg:my-0" external href="https://last.fm/user/jonheslop">Last.fm</Link>
        <Link classes="my-2 lg:my-0" external href="https://letterboxd.com/jonheslop/">Letterboxd</Link>
        <Link classes="my-2 lg:my-0" external href="https://twitter.com/jonheslop">Twitter</Link>
        <Link classes="my-2 lg:my-0" external href="https://vsco.co/jonheslop/">VSCO</Link>
      </section>
      <section className="space-x-6 mt-4 sm:mt-0">
        <Link href="mailto:jon@jonheslop.com">Email</Link>
        <Link href="/colophon">Colophon</Link>
      </section>
    </footer>
  );
};

export default Footer;
