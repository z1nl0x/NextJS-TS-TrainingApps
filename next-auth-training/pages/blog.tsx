import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React from "react";
import { useSession, signIn, getSession } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";

// Server-side Authentication using getSession instead of unstable_getServerSession

const BlogPage = ({
  secretData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <style jsx>{`
        h1 {
          text-align: center;
        }
      `}</style>
      <h1>{`BLOG PAGE - Info: `}</h1>
      <p>{secretData.message}</p>
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);

  const data = {
    id: 1,
    message: "Secret Message - Only authenticated people can view!",
  };

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      secretData: data,
    },
  };
};

export default BlogPage;
