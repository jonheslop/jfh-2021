import React from 'react';
import { prisma } from "@/lib/prisma";
import { StreamPhoto, GroupedStream } from '@/interfaces/index';
import Heading from '@/ui/heading';
import StreamGridItem from '@/ui/stream-grid-item';

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
      weekArrays[weekNumber] = { week: weekNumber, createdAt , posts: []};
    }

    weekArrays[weekNumber].posts.push(obj);
  });

  const grouped: Array<GroupedStream> = Object.values(weekArrays);

  return grouped.reverse();
}

function getWeekNumber(date:Date) {
  const onejan = new Date(date.getFullYear(), 0, 1);
  // @ts-ignore
  const weekNumber = Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  return weekNumber;
}

const StreamGrid = async ({classes = '', selected, ...props}: Props) => {
  const photos = await prisma.photo.findMany({orderBy: [{createdAt: 'asc'}]});

  const baseClasses = "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-4 lg:gap-8";
  const grouped = groupByWeek(photos);
  
  return (
    <div className={`${classes} grid gap-16 bg-white`} {...props}>
      {grouped.map(({week, createdAt, posts}) => {
        return <div key={week}>
          <Heading classes="md:sticky top-24 mb-8 mix-blend-difference text-white"><abbr className="no-underline" title={`Week beginning ${createdAt.toDateString()}`}>Week {week}</abbr></Heading>
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
  );
};

export default StreamGrid;
