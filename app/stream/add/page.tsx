import React from 'react';
import Heading from '@/ui/heading';
import Link from '@/ui/link';
import FileUpload from '@/ui/file-upload';

const Add = async () => {
  return (
    <>
      <Heading classes="md:sticky top-16">Add to stream</Heading>
      <article className="md:col-start-4 space-y-4 mt-3">
        <FileUpload/>
      </article>
    </>
  );
};

export default Add;
