export type Job = {
  company: string
  role: string
  period: string
  description: string
  logos: Logo[]
}

export type Logo = {
  imageURL: string
  imageAlt: string
  imageBg: string
}
export type headingLevel= "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

