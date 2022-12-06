import React from "react";
import { User } from "../types/user";

type Props = {
  user: User;
};

const UserDetailComponent = ({ user }: Props) => {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
};

export default UserDetailComponent;
