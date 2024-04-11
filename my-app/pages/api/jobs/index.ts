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

const getJobs = async (req: NextApiRequest): Promise<Job[]> => {
  const jobs = await readFile(process.cwd() + '/public/jobs.json', 'utf-8');
  const { level } = req.query
  const parsedJobs: Job[] = JSON.parse(jobs);
  if (level) {
    return parsedJobs.filter((job) => job.level === level);
  }
  return parsedJobs;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const secret = req.headers.secret;
    if (secret !== 'naranja-labs') {
      return res.status(401).json({ message: "You don't have access to this route." })
    }

    const jobs = await getJobs(req);
    return res.status(200).json(jobs);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' })
  }
}