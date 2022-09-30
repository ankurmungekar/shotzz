// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('test:', req.body);

    try {
      await client.create(req.body);
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: `Couldn't submit comment`, err })
    }
    return res.status(200).json({ message: 'Comment submitted' })
    // client.createIfNotExists(user).then(() => {
    //   res.status(200).json('Login successful');
    // })
  }
}