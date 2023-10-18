import React from 'react';
import { prisma } from "@/lib/prisma";
import { StreamPhoto, GroupedStream } from '@/interfaces/index';
import Heading from '@/ui/heading';
import StreamGridItem from '@/ui/stream-grid-item';
import { groupByWeek } from '@/lib/helpers';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  photos: StreamPhoto[],
  classes?: string;
  selected?: string;
  currentWeekOnly?: boolean;
};

const StreamGrid = async ({photos, classes = '', selected, currentWeekOnly = false, ...props}: Props) => {

  const baseClasses = "grid gap-2 md:gap-4 lg:gap-8";
  const gridClasses = currentWeekOnly ? `grid-cols-2  ${photos.length > 4 ? "md:grid-cols-8" : "md:grid-cols-4"}` : " grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6"
  const grouped = groupByWeek(photos);
  
  if (photos.length === 0) {
    return null
  }

  return (
    <div className={`${classes} grid gap-16 bg-white dark:bg-black`} {...props}>
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
