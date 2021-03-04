import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center w-full p-8 md:p-16 text-xs md:text-sm justify-between">
      <section className="space-x-6 mt-4 sm:mt-0">
        <Link external href="https://github.com/jonheslop">Github</Link>
        <Link external href="https://twitter.com/jonheslop">Twitter</Link>
        <Link external href="https://instagram.com/jonheslop">Instagram</Link>
        <Link external href="https://vsco.co/jonheslop/">VSCO</Link>
        <Link external href="https://last.fm/user/jonheslop">Last.fm</Link>
      </section>
      <section className="space-x-6 mt-4 sm:mt-0">
        <Link href="mailto:jon@jonheslop.com">Email</Link>
        <Link href="/colophon">Colophon</Link>
      </section>
    </footer>
  );
};

export default Footer;
