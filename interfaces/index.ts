import { Photo } from '@prisma/client';

export type headingLevel= 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

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
  width: number;
  height: number;
};

export type Post = {
  href: string;
  label: string;
};

export type StreamPhoto = Photo;

export type GroupedStream = {
  week: number;
  posts: Array<StreamPhoto>;
}
