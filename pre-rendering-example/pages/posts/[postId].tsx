import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import React from "react";
import { Post } from "../../types/post";
import { useRouter } from "next/router";

const PostDetailPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Posts Detail</h1>
      <h2>
        {post.id} - {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData: Post[] = await response.json();

  //   const paths = postData.map((p) => {
  //     return {
  //       params: {
  //         postId: `${p.id}`,
  //       },
  //     };
  //   });

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],

    // paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params!.postId}`
  );

  const dataPost: Post = await response.json();

  if (!dataPost.id) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  return {
    props: {
      post: dataPost,
    },
  };
};

export default PostDetailPage;
