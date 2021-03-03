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
