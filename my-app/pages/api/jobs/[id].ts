import type { NextApiRequest, NextApiResponse } from "next";
import { readFile } from 'fs/promises';
import type { Job } from "@/types/Job";
import type { Error } from "@/types/Error";

type Data = Job | Error;

const getJobById = async (id: number): Promise<Job | undefined> => {
  const jobs = await readFile(process.cwd() + '/public/jobs.json', 'utf-8');
  const parsedJobs: Job[] = JSON.parse(jobs);
  return parsedJobs.find((job) => job.id === id);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const { id } = req.query
    const job = await getJobById(Number(id));
    if (!job) return res.status(404).json({ message: 'Job not found.' });

    return res.status(200).json(job);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' })
  }
}