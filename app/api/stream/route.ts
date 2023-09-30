import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const { CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN } = process.env;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const f = formData.get("file");

    if (!f) {
      return NextResponse.json({error: 'No image from form'}, { status: 400 });
    }

    const file = f as File;

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

    const newEntry = await prisma.photo.create({
      data: {
        cloudflareId: body.result.id
      },
    });

    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/stream'
    redirectUrl.hash = `image-${newEntry.id}`;
    return NextResponse.redirect(redirectUrl);

  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
