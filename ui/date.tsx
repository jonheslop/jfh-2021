import React from 'react';
import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string;
  includeTime?: boolean;
};

const DateFormatter = ({ dateString, includeTime = false }: Props) => {
  const date = parseISO(dateString);
  if (includeTime) {
    return (
      <time dateTime={dateString}>{format(date, 'H:m - d LLLL yyyy')}</time>
    );
  } else {
    return <time dateTime={dateString}>{format(date, 'd LLLL yyyy')}</time>;
  }
};

export default DateFormatter;
