import { InferGetServerSidePropsType } from "next";
import React from "react";
import { News } from "../../types/news";

const NewsPage = ({
  news,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <h1>List of News</h1>
      {news.map((n) => {
        return (
          <div key={n.id}>
            <h2>
              {n.id} - {n.title} | {n.category}
            </h2>
            <h3>{n.description}</h3>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:4000/news");
  const newsData: News[] = await response.json();

  return {
    props: {
      news: newsData,
    },
  };
};

export default NewsPage;
