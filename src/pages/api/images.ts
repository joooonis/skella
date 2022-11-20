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
  const { img } = req.body;

  await client.skella.create({
    data: { img },
  });

  res.status(200).json({ ok: true });
}

export default handler;
