import { Job } from "../interfaces";

type Props = {
  data: Job
}

export default function WorkItem({data}: Props) {
  return (
    <div className="md:col-start-3 mb-32">
      <header className="mb-16">
        <h2 className="font-medium text-4xl md:text-2xl lg:text-4xl">{ data.company }</h2>
        <h3 className="font-medium text-xl md:text-lg lg:text-xl text-gray-500">{ data.role }, { data.period }</h3>
      </header>
      <p className="font-medium text-xl md:text-lg lg:text-xl leading-normal max-w-xl">
        { data.description }
      </p>
    </div>
  )
}
