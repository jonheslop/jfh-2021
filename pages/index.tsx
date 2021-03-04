import Image from 'next/image';
import Job from "../components/job";
import Heading from "../components/heading";
import Layout from "../components/layout";
import Link from "../components/link";
import { jobs } from "../content/jobs";

export default function Home() {
  return (
    <Layout pageTitle="Hello">
      <Heading level="h1" classes="mb-4 md:col-span-2 max-w-xl">
        Jon Heslop is a front end developer based in&nbsp;London.
      </Heading>
      <figure className="md:col-start-4">
        <Image
          src="/jon-heslop.jpg"
          alt="A picture of me in a garden chatting."
          width={1280}
          height={848} />
          <figcaption className="text-xs text-gray-500 text-right">
            Photo by <Link href="https://tomalprice.com/" external={true}>Tom Price</Link>
          </figcaption>
      </figure>

      <Heading classes="md:col-start-2 border-b pb-2 md:border-none md:sticky top-16 mb-4">
        Work
      </Heading>
      {
        jobs.map((job, i) => <Job key={i} data={job} />)
      }
    </Layout>
  )
}
