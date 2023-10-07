import React from 'react';
import { prisma } from "@/lib/prisma";
import { StreamPhoto, GroupedStream } from '@/interfaces/index';
import Heading from '@/ui/heading';
import StreamGridItem from '@/ui/stream-grid-item';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  classes?: string;
  selected?: string;
  currentWeekOnly?: boolean;
};

function groupByWeek(array:Array<StreamPhoto>): Array<GroupedStream> {
  const weekArrays: any = {};

  array.forEach(obj => {
    const createdAt = new Date(obj.createdAt);
    const weekNumber = getWeekNumber(createdAt);

    if (!weekArrays[weekNumber]) {
      weekArrays[weekNumber] = { week: weekNumber, weekBegins: getMonday(createdAt) , posts: []};
    }

    weekArrays[weekNumber].posts.push(obj);
  });

  const grouped: Array<GroupedStream> = Object.values(weekArrays);

  return grouped.reverse();
}

function getMonday(d:Date) {
  d = new Date(d);
  const day = d.getDay();
  const diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function getWeekNumber(date:Date) {
  const onejan = new Date(date.getFullYear(), 0, 1);
  // @ts-ignore
  const weekNumber = Math.ceil(((date - onejan) / 86400000 + onejan.getDay()) / 7);
  return weekNumber;
}

const StreamGrid = async ({classes = '', selected, currentWeekOnly = false, ...props}: Props) => {
  const photos = currentWeekOnly ? await prisma.photo.findMany({
    where: {createdAt: {gte: getMonday(new Date)}},
    orderBy: [{createdAt: 'desc'}],
  }) : await prisma.photo.findMany({
    orderBy: [{createdAt: 'desc'}],
  });

  const baseClasses = "grid gap-2 md:gap-4 lg:gap-8";
  const gridClasses = currentWeekOnly ? `grid-cols-2  ${photos.length > 4 ? "md:grid-cols-8" : "md:grid-cols-4"}` : " grid-cols-2 md:grid-cols-4 lg:grid-cols-8 2xl:grid-cols-6"
  const grouped = groupByWeek(photos);
  
  if (photos.length === 0) {
    return null
  }

  return (
    <div className={`${classes} grid gap-16 bg-white`} {...props}>
      {grouped.map(({week, weekBegins, posts}) => {
        return <div key={week}>
          {!currentWeekOnly && <Heading classes="md:sticky top-24 mb-8 mix-blend-difference text-white"><abbr className="no-underline" title={`Week beginning ${weekBegins.toDateString()}`}>Week {week}</abbr></Heading>}
          <div className={`${baseClasses} ${gridClasses}`}>
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
