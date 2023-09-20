import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await createPhoto(req, res);
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false });
  }
}

async function createPhoto(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.photo.create({
      data: {
        cloudflareId: body.cloudflareId
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error adding photo', success: false });
  }
}
