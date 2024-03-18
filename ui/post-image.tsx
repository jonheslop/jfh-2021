const PostImage = ({
  cloudflareId,
  caption,
}: {
  cloudflareId: string;
  caption: string;
}) => {
  return (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="mx-auto"
        alt={caption}
        id={`image-${cloudflareId}`}
        key={cloudflareId}
        src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${cloudflareId}/small`}
        srcSet={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${cloudflareId}/small 400w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${cloudflareId}/medium 1024w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${cloudflareId}/large 2048w`}
        loading="lazy"
      />
      <figcaption>
        <p className="!text-sm text-gray-500">{caption}</p>
      </figcaption>
    </figure>
  );
};

export default PostImage;
