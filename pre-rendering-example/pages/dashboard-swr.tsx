import React from "react";
import useSwr from "swr";
import { Dashboard } from "../types/dashboard";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data: Dashboard = await response.json();

  return data;
};

const DashboardSWRPage = () => {
  const { data, error } = useSwr("dashboard", fetcher);

  if (error) return "An error occured";

  if (!data) return "Loading...";

  return (
    <div>
      <h1>Dashboard Data Fetch with SWR Panel</h1>
      <div>
        <h2>Posts - {data.posts}</h2>
        <h2>Likes - {data.likes}</h2>
        <h2>Followers - {data.followers}</h2>
        <h2>Following - {data.following}</h2>
      </div>
    </div>
  );
};

export default DashboardSWRPage;
