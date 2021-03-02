import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Job from "../components/job";
import Footer from "../components/footer";

const jobs = [
  {
    company: "Pusher",
    role: "Senior front end developer",
    period: "November 2019 - Present",
    description:
      "Pusher makes easy to use APIs that make scalable realtime communication features easy. I’m mainly focused on making sure the dashboard our customers use is easy to use, performant and looks good.",
  },
  {
    company: "Government Digital Service",
    role: "Front end developer on GOV.UK Pay",
    period: "June 2017 - November 2019",
    description:
      "Government Digital Service is part of the Cabinet Office. Our job is digital transformation of government. I worked within Government as a Platform specifically as the front end developer on GOV.UK Pay, which makes it quicker and easier for government services to process payments online.",
  },
  {
    company: "DigitasLBi",
    role: "Interface developer on Project Helios",
    period: "2016 - May 2017",
    description:
      "Project Helios is the digital mothership of the Renault–Nissan alliance, the engine is currently deployed to 167 markets in 50 languages. I worked in Release Prep, where we oversaw the deployment of new features from any of the fourteen teams that contributed and also built internal tools. The Helios engine is rooted in Adobe Experience Manager CMS linked up with over 1000 different APIs with a BackboneJS front-end.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Jon Heslop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-1 p-16 pb-0">
        <header className="grid grid-cols-1 md:grid-cols-page-layout auto-rows-min gap-16">
          <h1 className="text-4xl text-green-600 font-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 682.17 682.18" className="rounded-full"><path fill="currentColor" d="M0 0v682.17h682.17V0zm209.68 444.37s0 18.68-18.33 41.45c-21.23 26.36-26 28.59-26 28.59l-28-30.35 19.11-18.09s6.57-7.45 6.57-14.6V273.78l46.72-9.34zm311.48-60.08l-46.73 9.34v-70.08l-54.57 10.91v70.08l-46.73 9.35V276.05l-81.78 16.36v25.71l46.77-9.34v42.04l-46.77 9.3v70.08l-46.66 9.35-.06-182.22 175.27-35v70.09l54.57-10.91v-70.1l46.73-9.34z"></path></svg>
          </h1>
          <section className="max-w-xl lg:max-w-2xl -mt-2">
            <h2 className="text-4xl md:text-2xl lg:text-4xl font-medium mb-4">Jon Heslop is a designer &&nbsp;developer based in&nbsp;London.</h2>
          </section>
          <figure>
            <Image
              src="/jon-heslop.jpg"
              alt="A picture of me in a garden chatting."
              width={1280}
              height={848} />
              <figcaption className="font-medium text-xs text-gray-600 text-right">
                Photo by <Link href="https://tomalprice.com/"><a className="hover:underline" target="_blank" rel="noopener noreferrer">Tom Price</a></Link>
              </figcaption>
          </figure>
        </header>

        <main className="py-16">
          <section className="grid grid-cols-1 md:grid-cols-page-layout auto-rows-min gap-16">
            <h2 className="md:col-start-2 text-4xl md:text-2xl lg:text-4xl font-medium mb-4 border-b pb-2 md:border-none">Work</h2>
            {
              jobs.map((job, i) => <Job key={i} data={job} />)
            }
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}
