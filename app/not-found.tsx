import Image from 'next/image';
import Heading from '@/ui/heading';
import Link from '@/ui/link';

export default function NotFound() {
  return (
    <>
      <article className="text-xl space-y-2 md:col-start-2">
        <header className="mb-8">
          <Heading level="h1">Not Found</Heading>
          <span className="text-gray-500">Error 404</span>
        </header>
        <p>Could not find requested resource</p>
        <p>
          <Link href="/">Go back to the homepage</Link>
        </p>
      </article>
      <Image
        src="https://bukk.it/helpcomputer.gif"
        className="md:col-start-4 md:row-start-1"
        width={500}
        height={375}
        alt="Mulder from X-Files tapping his computer screen"
      />
    </>
  );
}
