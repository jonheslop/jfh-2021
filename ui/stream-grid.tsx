/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { prisma } from "@/lib/prisma";
import {StreamPhoto, GroupedStream} from '@/interfaces/index';
import Heading from '@/ui/heading';

type Props = {
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

const StreamGrid = async ({classes = '', ...props}: Props) => {
  const photos = await prisma.photo.findMany();

  const baseClasses = "grid grid-cols-4 gap-8";
  const grouped = groupByWeek(photos);

  return (
    <div className={`${classes} grid gap-16 bg-white`} {...props}>
      {grouped.map(({week, posts}) => {
        return <div key={week}>
          <Heading classes="md:sticky top-24 mb-8 mix-blend-difference text-white">Week {week}</Heading>
          <div className={baseClasses}>
            {
              posts.map((photo) => {
                return (
                  <img
                    alt=""
                    id={`image-${photo.id}`}
                    key={photo.id}
                    src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/small`}/>
                )})
            }
          </div>
        </div>
      })}
    </div>
  );
};

export default StreamGrid;
