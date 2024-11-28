import React from "react";
import Link from "./link";
import Heading from "./heading";
import Image from "next/image";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="w-full px-2 py-8 md:p-8 lg:p-16 lg:py-32 mt-16 text-xs md:text-sm bg-emerald-600 text-white grid grid-cols-page-layout gap-4 lg:gap-16">
      <Logo mono />
      <figure className="col-start-2 hidden lg:block">
        <div className="border-8 border-white">
          <Image
            className="block mix-blend-luminosity opacity-70 hover:mix-blend-normal hover:opacity-100"
            src="/jon-heslop-2024.jpg"
            alt="A picture of me in a garden chatting."
            width={640}
            height={427}
          />
        </div>
        <figcaption className="text-xs mt-1 -mb-4">
          Self-portrait, Fujifilm X-Pro3, Leica Summilux-M 50 ƒ/1.4{" "}
          <span className="lowercase" style={{ fontVariant: "small-caps" }}>
            ASPH
          </span>
        </figcaption>
      </figure>
      <section className="col-span-4 md:col-start-3 lg:col-start-4 lg:col-span-1 flex flex-col gap-2">
        <Heading level="h2" classes="md:-mt-2">
          About
        </Heading>
        <p className="text-xl max-w-3xl mb-4">
          Jon Heslop is a front end developer based in&nbsp;
          <abbr title="North East London, UK" className="cursor-help">
            Walthamstow
          </abbr>
          . He lives with his wife{" "}
          <Link href="https://www.instagram.com/becgoss/">Rebecca</Link> and
          their dog,{" "}
          <Link href="https://www.instagram.com/maudethebord/">Maude</Link>. He
          enjoys cycling, cooking and hanging out with friends.
        </p>

        <ul className="flex flex-wrap gap-4 mt-auto">
          <h5 className="text-xl md:-ml-9 leading-none">
            ☜ <span className="sr-only">Links out</span>
          </h5>
          <li>
            <Link external light href="https://github.com/jonheslop">
              Github
            </Link>
          </li>
          <li>
            <Link external light href="https://instagram.com/jonheslop">
              Instagram
            </Link>
          </li>
          <li>
            <Link external light href="https://last.fm/user/jonheslop">
              Last.fm
            </Link>
          </li>
          <li>
            <Link external light href="https://letterboxd.com/jonheslop/">
              Letterboxd
            </Link>
          </li>
          <li>
            <Link external light href="https://bsky.app/profile/jonheslop.com">
              Bluesky
            </Link>
          </li>
        </ul>

        <ul className="flex gap-4" role="navigation">
          <h5 className="text-xl md:-ml-9 leading-none">
            ☞ <span className="sr-only">Site meta</span>
          </h5>
          <li>
            <Link light href="/stream">
              Stream
            </Link>
          </li>
          <li>
            <Link light href="/colophon">
              Colophon
            </Link>
          </li>
          <li>
            <Link light href="mailto:jon@jonheslop.com">
              Email
            </Link>
          </li>
          <li>
            <Link light href="/feed.xml">
              Posts RSS
            </Link>
          </li>
          <li>
            <Link light href="/stream/feed.xml">
              Stream RSS
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
