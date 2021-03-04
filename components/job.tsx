import Image from 'next/image';
import { Job } from "../interfaces";
import Heading from "./heading";
import Link from "./link";

type Props = {
  data: Job
}

export default function WorkItem({data}: Props) {
  return (
    <>
      <figure className="md:col-start-3 place-self-start md:justify-self-end flex md:block -mb-8 md:mb-0">
        { data.logos.map((logo, i) => (
          <div key={i} className={`bg-${logo.imageBg} ${logo.imageBg === "white" ? 'border': ''} rounded-full p-3 mr-4 md:mr-0 md:mb-4`} style={{fontSize: 0}}>
            <Image
              src={logo.imageURL}
              alt={logo.imageAlt}
              width={48}
              height={48} />
          </div>
        ))
        }
      </figure>
      <div className="md:col-start-4 mb-16 md:mb-32">
        <header className="mb-16">
          <Heading level="h3">{ data.company }</Heading>
          <Heading level="h4">{ data.role }, { data.period }</Heading>
        </header>
        <p className="text-xl md:text-lg lg:text-xl leading-normal max-w-3xl">
          { data.description }
        </p>
        { data.blogPosts &&
          <>
            <Heading level="h4" classes="mt-8 mb-2">Blog posts</Heading>
              <ul className="space-y-2">
                {
                  data.blogPosts.map(({href, label}, i) => (
                    <li key={i} className="text-sm max-w-xs">
                      <Link href={href} external={true}>
                        {label}
                      </Link>
                    </li>
                  ))
                }
            </ul>
          </>
        }
      </div>
    </>
  )
}
