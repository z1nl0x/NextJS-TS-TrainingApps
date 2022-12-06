import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { useRouter } from "next/router";

import React from "react";
import { Product } from "../../types/product";

const ProductsDetailPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        {product.title} - {product.description}
      </h1>
      <h2>{product.price}</h2>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:4000/products");
  const productDataPaths: Product[] = await response.json();

  const paths = productDataPaths.map((p) => {
    return {
      params: {
        productId: `${p.id}`,
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;

  const response = await fetch(
    `http://localhost:4000/products/${params!.productId}`
  );

  const productData: Product = await response.json();

  return {
    props: {
      product: productData,
    },
    revalidate: 10,
  };
};

export default ProductsDetailPage;
