import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiRes = await fetch(
    `${process.env.API_URL ?? "http://localhost:3001"}/api/empresas/`
  );
  const data = await apiRes.json();
  res.status(200).json(data);
}
