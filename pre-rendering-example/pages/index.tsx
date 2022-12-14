import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pre-Rendering Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Home Page</h1>
        <Link href="/users">Users</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/products">Products</Link>
        <Link href="/news">News</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard-swr">Dashboard SWR</Link>
        <Link href="/events">Events</Link>
      </main>
    </div>
  );
};

export default Home;
