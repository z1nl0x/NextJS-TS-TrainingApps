import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";
import { Post } from "../../types/post";

const PostListPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>List of Posts</h1>
      {posts.map((p) => {
        return (
          <div key={p.id}>
            <Link href={`/posts/${p.id}`}>
              <h2>
                {p.id} - {p.title}
              </h2>
            </Link>

            <hr />
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData: Post[] = await response.json();

  return {
    props: {
      posts: postData,
    },
  };
};

export default PostListPage;
