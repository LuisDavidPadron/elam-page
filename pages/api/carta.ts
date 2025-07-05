import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { page = 1, limit = 10, category = "" } = req.query;

    const apiRes = await fetch(
      `${process.env.API_URL ?? "http://localhost:3001"}/api/posts/?${category}&limit=${limit}&page=${page}`
    );
    const data = await apiRes.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching carta:", error);
    res.status(500).json({ error: "Failed to fetch carta" });
  }
}
