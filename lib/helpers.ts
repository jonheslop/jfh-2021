import { StreamPhoto, GroupedStream } from '@/interfaces/index';

export function convertToClosestFraction(decimal: number): string {
  const epsilon = 1.0E-5;
  let numerator = 1;
  let denominator = 1;
  let error = Math.abs(decimal - numerator / denominator);

  for (let d = 2; d <= 10000; d++) {
    const n = Math.round(decimal * d);
    const newError = Math.abs(decimal - n / d);

    if (newError < error) {
      numerator = n;
      denominator = d;
      error = newError;
    }

    if (error < epsilon) {
      break;
    }
  }
  
  denominator = Math.round(denominator / 100) * 100;

  return `${numerator}/${denominator}`;
}

export function groupByWeek(array:Array<StreamPhoto>): Array<GroupedStream> {
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

export function getMonday(d:Date) {
  d = new Date(d);
  const day = d.getDay();
  const diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  d.setDate(diff);
  d.setHours(0,0,0,0);
  return new Date(d);
}

export function getWeekNumber(date:Date) {
  const onejan = new Date(date.getFullYear(), 0, 1);
  // @ts-ignore
  const weekNumber = Math.ceil(((date - onejan) / 86400000 + onejan.getDay() - 1) / 7);
  return weekNumber;
}
