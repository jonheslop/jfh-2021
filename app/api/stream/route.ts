import { Exif } from '@/interfaces';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { fetchStreamCurrentWeek} from '@/lib/fetch-stream';

const { CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN } = process.env;

export async function GET(request: NextRequest) {
  const photos = await fetchStreamCurrentWeek();

  return NextResponse.json(photos);
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const image = formData.get('file');
    const exif = formData.get('exif');
    if (exif !== null) {
      formData.append('metadata', exif.toString());
      formData.delete('exif');
    }
    if (!image) {
      return NextResponse.json({error: 'No image from form'}, { status: 400 });
    }

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/images/v1`,
      {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
        },
      }
    );
    const body = await response.json();

    if (body.success !== true) {
      return NextResponse.json({error: 'Cloudflare error', body: body.errors}, { status: 400 });
    }

    const data:any = {
        cloudflareId: body.result.id,
      }

    if (exif !== null) {
      const parsedExif:Exif = JSON.parse(exif.toString());
        data.exif = exif.toString();
        data.createdAt = parsedExif.CreateDate;
      if (parsedExif.latitude) {
        data.latitude = parsedExif.latitude;
      }
      if (parsedExif.longitude) {
        data.longitude = parsedExif.longitude;
      }
    }
    const newEntry = await prisma.photo.create({data});

    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/stream/${newEntry.id}`
    return NextResponse.redirect(redirectUrl);

  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
