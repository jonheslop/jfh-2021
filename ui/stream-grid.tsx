import React from 'react';
import { prisma } from "@/lib/prisma";
import {StreamPhoto, GroupedStream, Exif} from '@/interfaces/index';
import Heading from '@/ui/heading';
import StreamGridItem from '@/ui/stream-grid-item';
import StreamOverlay from './stream-overlay';

type Props = {
  classes?: string;
  selected?: string;
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

const StreamGrid = async ({classes = '', selected, ...props}: Props) => {
  const photos = await prisma.photo.findMany();

  const baseClasses = "grid grid-cols-4 gap-8";
  const grouped = groupByWeek(photos);
  
  console.log(selected, 1);
  const selectedPhoto = selected !== undefined ? photos.filter(p => p.id === parseInt(selected))[0] : undefined;

  console.log(selectedPhoto);
  return (
    <>
      <div className={`${classes} grid gap-16 bg-white`} {...props}>
        {grouped.map(({week, posts}) => {
          return <div key={week}>
            <Heading classes="md:sticky top-24 mb-8 mix-blend-difference text-white">Week {week}</Heading>
            <div className={baseClasses}>
              {
                posts.map((photo) => {
                  return <StreamGridItem photo={photo} key={photo.id} />
                })
              }
            </div>
          </div>
        })}
      </div>
      {selectedPhoto !== undefined && <StreamOverlay photo={selectedPhoto} />}
    </>
  );
};

export default StreamGrid;
