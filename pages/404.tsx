import React from 'react';
import Heading from '../components/heading';
import Layout from '../components/layout';

const Custom404 = () => {
  return (
    <Layout pageTitle="Hello">
      <header className="mb-4 md:col-span-2 max-w-xl">
        <Heading level="h4">
          Error 404
        </Heading>
        <Heading level="h1" classes="mb-16">
          Page not found
        </Heading>
        <p className="text-xl md:text-lg lg:text-xl leading-normal max-w-3xl">
          Sorry the page you are looking for isn’t here anymore. Either I have moved something that used to be here. Or you went rogue and made up a URL.
        </p>
        <p className="text-xl md:text-lg lg:text-xl mt-16">
          ¯_(⊙_ʖ⊙)_/¯
        </p>
      </header>
    </Layout>
  )
}

export default Custom404
