import Heading from '@/ui/heading'
import Link from '@/ui/link'

export default function NotFound() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <Heading>Not Found</Heading>
        <span className="text-gray-500">Error 404</span>
      </header>
      <article className="text-lg">
        <p>Could not find requested resource</p>
        <Link href="/">Go back to the homepage</Link>
      </article>
    </div>
  )
}
