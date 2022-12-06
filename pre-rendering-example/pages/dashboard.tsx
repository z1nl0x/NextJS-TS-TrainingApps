import React, { useState, useEffect } from "react";
import { Dashboard } from "../types/dashboard";

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dashboardData, setDashboardData] = useState<Dashboard | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch("http://localhost:4000/dashboard");
      const data: Dashboard = await response.json();

      setDashboardData(data);
      setIsLoading(false);
    };

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard Panel</h1>
      <h2>Posts - {dashboardData?.posts}</h2>
      <h2>Likes - {dashboardData?.likes}</h2>
      <h2>Followers - {dashboardData?.followers}</h2>
      <h2>Following - {dashboardData?.following}</h2>
    </div>
  );
};

export default DashboardPage;
