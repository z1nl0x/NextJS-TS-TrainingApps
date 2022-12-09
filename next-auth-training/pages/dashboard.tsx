import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

// Client-side Authentication validation

const DashboardPage = () => {
  const { data: session, status } = useSession();

  const content = (
    <div>
      <style jsx>{`
        h1 {
          text-align: center;
        }
      `}</style>
      <h1>DASHBOARD SECRET-PAGE!</h1>
    </div>
  );

  return (
    <>
      {status === "loading" && <h2>Loading...</h2>}
      {!session && status === "unauthenticated" ? signIn() : content}
    </>
  );
};

export default DashboardPage;
