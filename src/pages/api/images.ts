// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/server/client';

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === 'POST') {
    const { img } = req.body;
    await client.skella.create({
      data: { img },
    });

    res.status(200).json({ ok: true });
  } else if (req.method === 'GET') {
    const images = await client.skella.findMany();
    res.status(200).json({ ok: true, images });
  }
}

export default handler;
