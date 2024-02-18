import { cache } from 'react';
import { prisma } from '@/lib/prisma';
import { StreamPhoto, GroupedStream } from '@/interfaces/index';
import { getMonday } from '@/lib/helpers';

export const fetchStream = cache(async () => {
  return await prisma.photo.findMany({
    orderBy: [{ createdAt: 'desc' }],
  });
});

export const fetchStreamCurrentWeek = cache(async () => {
  return await prisma.photo.findMany({
    where: { createdAt: { gte: getMonday(new Date()) } },
    orderBy: [{ createdAt: 'desc' }],
  });
});
