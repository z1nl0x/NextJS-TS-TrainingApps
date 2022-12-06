import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const clickHandler = () => {
    console.log("place your order...");

    // router.replace(`/product`);
    router.push(`/product`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Test App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello World App</h1>
        <Link href={`/blog`}>Blog</Link>
        <Link href={`/product`}>Products</Link>
        <button onClick={clickHandler}>Place Order</button>
      </main>
    </div>
  );
};

export default Home;