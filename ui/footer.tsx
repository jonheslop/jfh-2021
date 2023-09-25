import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center w-full px-2 py-8 md:p-8 lg:p-16 text-xs md:text-sm justify-between">
      <section className="flex flex-wrap space-x-6 space-x-reverse mt-4 sm:mt-0 pb-2 border-b sm:pb-0 sm:border-none">
        <Link external classes="my-2 lg:my-0 mr-6" href="https://github.com/jonheslop">Github</Link>
        <Link external classes="my-2 lg:my-0" href="https://instagram.com/jonheslop">Instagram</Link>
        <Link external classes="my-2 lg:my-0" href="https://last.fm/user/jonheslop">Last.fm</Link>
        <Link external classes="my-2 lg:my-0" href="https://letterboxd.com/jonheslop/">Letterboxd</Link>
        <Link external classes="my-2 lg:my-0" href="https://twitter.com/jonheslop">Twitter</Link>
        <Link external classes="my-2 lg:my-0" href="https://vsco.co/jonheslop/">VSCO</Link>
      </section>
      <section className="space-x-6 mt-4 sm:mt-0">
        <Link href="/feed.xml">RSS</Link>
        <Link href="mailto:jon@jonheslop.com">Email</Link>
        <Link href="/colophon">Colophon</Link>
      </section>
    </footer>
  );
};

export default Footer;
