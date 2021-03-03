import Image from 'next/image';
import { Job } from "../interfaces";

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
      <div className="md:col-start-4 mb-32">
        <header className="mb-16">
          <h2 className="font-medium text-4xl md:text-2xl lg:text-4xl">{ data.company }</h2>
          <h3 className="font-medium text-xl md:text-lg lg:text-xl text-gray-500">{ data.role }, { data.period }</h3>
        </header>
        <p className="font-medium text-xl md:text-lg lg:text-xl leading-normal max-w-3xl">
          { data.description }
        </p>
      </div>
    </>
  )
}
