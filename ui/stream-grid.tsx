/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {StreamPhoto, GroupedStream} from '@/interfaces/index';
import Heading from '@/ui/heading';

type Props = {
  photos: Array<StreamPhoto>,
  classes?: string;
};

function groupByWeek(array:Array<StreamPhoto>): Array<GroupedStream> {
  const weekArrays: any = {};

  array.forEach(obj => {
    const createdAt = new Date(obj.createdAt);
    const weekNumber = getWeekNumber(createdAt);

    if (!weekArrays[weekNumber]) {
      weekArrays[weekNumber] = { week: weekNumber, posts: []};
    }

    weekArrays[weekNumber].posts.push(obj);
  });

  return Object.values(weekArrays);
}

function getWeekNumber(date:Date) {
  const onejan = new Date(date.getFullYear(), 0, 1);
  // @ts-ignore
  const weekNumber = Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  return weekNumber;
}

const StreamGrid = ({photos, classes = '', ...props}: Props) => {
  const baseClasses = "grid grid-cols-4 gap-8";
  const grouped = groupByWeek(photos);

  return (
    <div className={`${classes}`} {...props}>
      {grouped.map(({week, posts}) => {
        return <div key={week}>
          <Heading classes="md:sticky top-16">Week {week}</Heading>
          <div className={baseClasses}>
            {
              posts.map((photo) => {
                return (
                  <img
                    className="mx-auto py-2 md:py-4"
                    alt=""
                    id={`image-${photo.id}`}
                    key={photo.id}
                    src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/small`}
                    srcSet={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/small 400w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/medium 1024w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/large 2048w`} />
                )})
            }
          </div>
        </div>
      })}
    </div>
  );
};

export default StreamGrid;
