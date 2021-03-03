type Props = {
  children: React.ReactNode
  classes?: string
}

export default function Heading({children, classes}: Props) {
  return (
    <h2 className={`text-4xl md:text-2xl lg:text-4xl ${classes}`}>
      {children}
    </h2>
  )
}
