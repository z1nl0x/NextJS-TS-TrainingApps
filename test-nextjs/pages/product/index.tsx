import Link from "next/link";
import React from "react";

type productProps = {
  productId: number;
};

const ProductList = ({ productId = 77 }: productProps) => {
  return (
    <>
      <Link href={`/`}>Home</Link>
      <Link href={`/product/1`}>
        <h2>Product 1</h2>
      </Link>
      <Link href={`/product/2`}>
        <h2>Product 2</h2>
      </Link>
      <Link href={`/product/3`} replace>
        <h2>Product 3</h2>
      </Link>
      <Link href={`/product/${productId}`}>
        <h2>Product {productId}</h2>
      </Link>
    </>
  );
};

export default ProductList;
