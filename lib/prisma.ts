import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient().$extends({
    result: {
      photo: {
        aspect: {
          needs: { width: true, height: true },
          compute(photo) {
            const ratio = photo.width / photo.height;
            switch (true) {
              case ratio < 1:
                return 'portrait';
              case ratio > 1:
                return 'landscape';
              case ratio === 1:
                return 'square';
            }
          },
        },
      },
    },
  });

if (process.env.NODE_ENV != 'production') globalForPrisma.prisma;
