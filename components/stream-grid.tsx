import React from 'react';

type Props = {
  photos: any,
  classes?: string;
};

const StreamGrid = ({photos, classes = '', ...props}: Props) => {
  const baseClasses = "grid grid-cols-4 gap-8";

  return (
    <div className={`${baseClasses} ${classes}`} {...props}>
      {photos.map((photo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="mx-auto py-2 md:py-4"
              alt=""
              id={`image-${photo.id}`}
              key={photo.id}
              src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/small`}
              srcSet={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/small 400w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/medium 1024w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/large 2048w`}
            />
          ))}
    </div>
  );
};

export default StreamGrid;
