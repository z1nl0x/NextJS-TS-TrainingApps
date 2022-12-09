import Link from "next/link";
import React, { FormEvent } from "react";
import styles from "./Navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

// Client-side Authentication validation

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className={styles.navbar}>
      <Link className={styles.logo} href="/">
        <h1>Next-Auth</h1>
      </Link>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        {status !== "unauthenticated" && session && (
          <Link href="/dashboard">
            <li>Dashboard</li>
          </Link>
        )}

        <Link href="/blog">
          <li>Blog</li>
        </Link>
        {status !== "authenticated" && !session && (
          <Link
            href="/api/auth/signin"
            onClick={(e: FormEvent) => {
              e.preventDefault();
              signIn();
            }}
          >
            <li>Sign In</li>
          </Link>
        )}
        {status !== "unauthenticated" && session && (
          <Link
            href="/api/auth/signout"
            onClick={(e: FormEvent) => {
              e.preventDefault();
              signOut();
            }}
          >
            <li>Sign Out</li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
