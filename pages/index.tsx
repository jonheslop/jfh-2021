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
    logos: [
      {
        imageURL: "/pusher.svg",
        imageAlt: "The Pusher P logo",
        imageBg: "eggplant",
      }
    ]
  },
  {
    company: "Government Digital Service",
    role: "Senior front end developer on GOV.UK Pay",
    period: "June 2017 - November 2019",
    description:
      "Government Digital Service is part of the Cabinet Office. Our job is digital transformation of government. I worked within Government as a Platform specifically as the front end developer on GOV.UK Pay, which makes it quicker and easier for government services to process payments online.",
    logos: [
      {
        imageURL: "/gov-uk-crown.svg",
        imageAlt: "The GOV.UK crown logo",
        imageBg: "black",
      }
    ]
  },
  {
    company: "DigitasLBi",
    role: "Senior interface developer on Project Helios",
    period: "2016 - May 2017",
    description:
      "Project Helios is the digital mothership of the Renault–Nissan alliance, the engine is currently deployed to 167 markets in 50 languages. I worked in Release Prep, where we oversaw the deployment of new features from any of the fourteen teams that contributed and also built internal tools. The Helios engine is rooted in Adobe Experience Manager CMS linked up with over 1000 different APIs with a BackboneJS front-end.",
    logos: [
      {
        imageURL: "/digitaslbi.svg",
        imageAlt: "The Digitas LBi Unicorn logo",
        imageBg: "red-600",
      }
    ]
  },
  {
    company: "Rapha",
    role: "Front end developer and designer",
    period: "2013 - 2016",
    description:
      "I joined Rapha as the first in-house developer and worked with a small team on a complete replatform moving the website, fulfilment and accounts on to Hybris. I was responsible for designing and building the front end of the website. I also worked with marketing on product releases and campaigns to produce exciting features using Wordpress.",
    logos: [
      {
        imageURL: "/rapha.svg",
        imageAlt: "The Rapha logotype",
        imageBg: "black",
      }
    ]
  },
  {
    company: "Freelance",
    role: "Web developer and designer",
    period: "2010 - 2013",
    description:
      "For a few years I freelanced with several companies and lived in varied locations including Wales, Bristol, Berlin and San Francisco. I mainly worked with my friends, The Hieatts, on various projects for The Do Lectures, The Do Book Company and Hiut Denim. The latter two were new companies and I was involved in all aspects of the business, from building the website to helping to manage inventory and invoices. I worked with other small business too building bespoke themes for mainly Wordpress and Shopify.",
    logos: [
      {
        imageURL: "/dolectures.svg",
        imageAlt: "The Do Lectures logo",
        imageBg: "white",
      },
      {
        imageURL: "/hiutdenim.svg",
        imageAlt: "The Hiut Denim owl logo",
        imageBg: "white",
      },
      {
        imageURL: "/dobookco.svg",
        imageAlt: "The Do Book Co. logo",
        imageBg: "white",
      }
    ]
  },
  {
    company: "howies",
    role: "Head of Web",
    period: "2008 - 2010",
    description:
      "I landed a job with howies right out of university after a summer interning there the year before. I brought a knowledge of the internet and social media to the company and helped grow the online presence of the brand. Being a small company I also helped out with a lot of things, from helping produce photoshoots to design and content for the quarterly catalogues.",
    logos: [
      {
        imageURL: "/howies.svg",
        imageAlt: "The howies logotype",
        imageBg: "white",
      }
    ]
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen tracking-tight">
      <Head>
        <title>Jon Heslop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-1 p-16 grid grid-cols-1 md:grid-cols-page-layout auto-rows-min items-start gap-16 relative">
        <h1 className="text-4xl text-green-600 font-black md:sticky top-16 row-span-full">
          <Link href="/">
            <a className="hover:text-green-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 682.17 682.18" className="rounded-full"><path fill="currentColor" d="M0 0v682.17h682.17V0zm209.68 444.37s0 18.68-18.33 41.45c-21.23 26.36-26 28.59-26 28.59l-28-30.35 19.11-18.09s6.57-7.45 6.57-14.6V273.78l46.72-9.34zm311.48-60.08l-46.73 9.34v-70.08l-54.57 10.91v70.08l-46.73 9.35V276.05l-81.78 16.36v25.71l46.77-9.34v42.04l-46.77 9.3v70.08l-46.66 9.35-.06-182.22 175.27-35v70.09l54.57-10.91v-70.1l46.73-9.34z"></path></svg>

            </a>
          </Link>
        </h1>
        <h2 className="text-4xl md:text-2xl lg:text-4xl font-medium mb-4">Jon Heslop is a designer &&nbsp;developer based in&nbsp;London.</h2>
        <figure className="md:col-start-4">
          <Image
            src="/jon-heslop.jpg"
            alt="A picture of me in a garden chatting."
            width={1280}
            height={848} />
            <figcaption className="font-medium text-xs text-gray-500 text-right">
              Photo by <Link href="https://tomalprice.com/"><a className="hover:underline" target="_blank" rel="noopener noreferrer">Tom Price</a></Link>
            </figcaption>
        </figure>

        <h2 className="md:col-start-2 text-4xl md:text-2xl lg:text-4xl font-medium mb-4 border-b pb-2 md:border-none md:sticky top-16">Work</h2>
        {
          jobs.map((job, i) => <Job key={i} data={job} />)
        }
      </div>

      <Footer />
    </div>
  )
}
