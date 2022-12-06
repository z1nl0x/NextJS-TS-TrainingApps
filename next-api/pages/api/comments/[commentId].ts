import type { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comments";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const comId = req.query.commentId as string;

  if (req.method === "GET") {
    const comment = comments.find((c) => c.id === parseInt(comId));
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedComment = comments.find((c) => c.id === parseInt(comId));

    const index = comments.findIndex((c) => c.id === parseInt(comId));
    comments.splice(index, 1);

    res.status(200).json(deletedComment);
  }
};

export default handler;
