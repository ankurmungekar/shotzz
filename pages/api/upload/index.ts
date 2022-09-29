// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
  if (req.method === 'GET') {
    res.status(200).json('Upload');
  }
  if (req.method === 'POST') {
    // const file = req.body;
    // console.log(file);
    // client.assets
    //   .upload('file', file, {
    //     contentType: file.type,
    //     filename: file.name,
    //   })
    //   .then((data) => {
    //     res.status(200).json(data);
    //   });
    // client.createIfNotExists(user).then(() => {
    //   res.status(200).json('Login successful');
    // })
  }
}
