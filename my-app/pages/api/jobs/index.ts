import type { NextApiRequest, NextApiResponse } from "next";
import { readFile } from 'fs/promises';

type Job = {
  id: number,
  job: string,
  level: string,
  status: string,
}

type Error = {
  message: string
}

type Data = Job[] | Error;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const secret = req.headers.secret;
    if (secret !== 'naranja-labs') {
      return res.status(401).json({ message: "You don't have access to this route." })
    }

    const jobs = await readFile(process.cwd() + '/public/jobs.json', 'utf-8')
    return res.status(200).json(JSON.parse(jobs));
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' })
  }
}