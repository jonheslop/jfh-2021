import Link from 'next/link';

type Props = {
  href: string
  external?: boolean
  children: React.ReactNode
}

export default function BaseLink({ href, external = false, children }) {
  const linkAttributes = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {}
  
  return (
    <Link href={href}>
      <a className="underline hover:text-green-600" {...linkAttributes}>
        { children }
      </a>
    </Link>
  )
}
