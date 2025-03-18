import { Blog } from "contentlayer/generated";
import Image from "next/image";
import DateFormatter from "./date";
import Heading from "./heading";
import Link from "./link";

type Props = {
  data: Blog;
};

const NoteLinkItem = ({ data }: Props) => {
  return (
    <li className="mb-8">
      <Link
        key={data.slug}
        href={`/posts/${data.slug}`}
        underline={false}
        classes="flex gap-8 justify-between"
      >
        <div>
          <Heading level="h3" classes="underline text-balance">
            {data.title}
          </Heading>
          <p className="mt-1 text-lg text-pretty">{data.description}</p>
          <p className="text-lg text-gray-500">
            <DateFormatter dateString={data.date} />
          </p>
        </div>
        {data.coverImage !== undefined && (
          <figure className="w-28 shrink-0">
            <Image
              loading="lazy"
              width={256}
              height={171}
              alt=""
              src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${data.coverImage}/thumb`}
            />
          </figure>
        )}
      </Link>
    </li>
  );
};

export default NoteLinkItem;
