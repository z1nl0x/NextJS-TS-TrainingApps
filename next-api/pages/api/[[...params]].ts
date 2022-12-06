import type { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../data/comments";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const params = req.query.params;

  console.log(params);

  res.status(200).json(params);
};

export default handler;
