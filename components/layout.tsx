import React from 'react';
import Head from 'next/head';
import Logo from './logo';
import Footer from './footer';

type Props = {
  pageTitle: string;
  children: React.ReactNode;
};

const Layout = ({pageTitle, children}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>{pageTitle} - Jon Heslop</title>
        <link rel="preconnect" href="https://cdn.jonheslop.com"/>
        <link
            rel="preload"
            href="https://cdn.jonheslop.com/fonts/soehne-web-buch.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.gif"/>
        <link rel="alternate" href="/feed.xml" type="application/atom+xml" title="Atom 2.0"/>

        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta name="description" content="Jon Heslop is a front end developer based in London."/>
        <meta property="og:url" content="http://jonheslop.com/"/>
        <meta property="og:title" content="Jon Heslop"/>
        <meta property="og:description" content="Jon Heslop is a front end developer based in London."/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="/jon-heslop.jpg"/>
      </Head>

      <div className="flex-1 p-8 md:p-16 grid grid-cols-1 md:grid-cols-page-layout auto-rows-min items-start gap-16 relative w-full">
        <Logo/>
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
