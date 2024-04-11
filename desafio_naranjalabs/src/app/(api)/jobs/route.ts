import jobs from "../database/jobs";

export async function GET() {

  try {

    return Response.json(jobs);

  } catch (error) {
    return Response.json({
      error: `${error}`
    });
  }

}