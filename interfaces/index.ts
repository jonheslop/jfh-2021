export type Job = {
  company: string;
  role: string;
  period: string;
  description: string;
  logos: Logo[];
  blogPosts?: Post[];
};

export type Logo = {
  imageURL: string;
  imageAlt: string;
  imageBg: string;
};

export type Post = {
  href: string;
  label: string;
};

export type NoteLink = {
  slug: string;
  title: string;
  date: string;
  category: string;
  coverImage: string;
};

export type StreamPhoto = {
  id: number;
  createdAt: Date;
  cloudflareId: string;
  caption: string;
  exif: string;
  latitude: number;
  longitude: number;
};

export type headingLevel= 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
