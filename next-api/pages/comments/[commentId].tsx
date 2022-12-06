import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import React from "react";

import { comments } from "../../data/comments";

const CommentDetailPage = ({
  comment,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>Comment Detail Page</h1>
      <div>
        {comment!.id} - {comment!.text}
      </div>
    </div>
  );
};

const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: { commentId: "1" },
      },
      {
        params: { commentId: "2" },
      },
      {
        params: { commentId: "3" },
      },
    ],

    // paths: paths,
    fallback: false,
  };
};

const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const { commentId } = params!;

  const dataComment = comments.find(
    (c) => c.id === parseInt(commentId as string)
  );

  return {
    props: {
      comment: dataComment,
    },
  };
};

export default CommentDetailPage;
