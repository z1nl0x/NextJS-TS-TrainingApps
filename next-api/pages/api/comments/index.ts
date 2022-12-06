import type { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comments";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.inputComment;

    const insertCommentData = {
      id: Date.now(),
      text: comment,
    };

    comments.push(insertCommentData);
    res.status(200).json(insertCommentData);
  }
};

export default handler;
