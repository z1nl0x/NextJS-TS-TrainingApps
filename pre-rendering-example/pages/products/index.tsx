import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";
import { Product } from "../../types/product";

const ProductsPage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>Products List Page</h1>
      {products.map((p) => {
        return (
          <div key={p.id}>
            <Link href={`/products/${p.id}`}>
              {p.id} - {p.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:4000/products");
  const productsData: Product[] = await response.json();

  return {
    props: {
      products: productsData,
    },
    // Incremental Static Regenarion - "revalidate" represents the quantity of seconds to make a new request to the server if some changes happened
    revalidate: 10,
  };
};

export default ProductsPage;
