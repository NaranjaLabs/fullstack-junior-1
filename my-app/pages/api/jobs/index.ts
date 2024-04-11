import type { NextApiRequest, NextApiResponse } from "next";
import { readFile } from 'fs/promises';
import type { Job } from "@/types/Job";
import type { Error } from "@/types/Error";

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
    const jobs = await getJobs(req);
    return res.status(200).json(jobs);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' })
  }
}