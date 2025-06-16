import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page = 1, limit = 10 } = req.query;
  const apiRes = await fetch(
    `${process.env.API_URL}/api/posts/?limit=${limit}&page=${page}`
  );
  const data = await apiRes.json();
  res.status(200).json(data);
}
