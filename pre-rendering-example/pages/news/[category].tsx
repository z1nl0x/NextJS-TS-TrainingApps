import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React from "react";
import { News } from "../../types/news";

const NewsByCategoryPage = ({
  newsDataByCat,
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <h1>Showing news for the {category} category!</h1>
      {newsDataByCat.map((n) => {
        return (
          <div key={n.id}>
            <h2>
              {n.id} - {n.title}
            </h2>
            <p>{n.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  const { category } = params!;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const newsData: News[] = await response.json();

  return {
    props: {
      newsDataByCat: newsData,
      category: category,
    },
  };
};

export default NewsByCategoryPage;
