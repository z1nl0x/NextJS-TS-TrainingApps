import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import UserDetailComponent from "../components/user";
import { User } from "../types/user";

const UsersListPage = ({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>List of Users</h1>
      {users.map((u: User) => {
        return (
          <div key={u.id}>
            <UserDetailComponent user={u} />
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await response.json();

  //   console.log(data);
  return {
    props: {
      users: data,
    },
  };
};

export default UsersListPage;
