import React from "react";
import { prisma } from "./client";

export const dynamic = "force-dynamic";

const Home = () => {
  const getTotalIssues = async () => {
    return await prisma.issue.count();
  };
  return (
    <div>
      <p className="text-2xl">Dashboard</p>
      <div className="mt-6">
        <span className="text-lg">Total number of issues</span> :{" "}
        {getTotalIssues()}
      </div>
    </div>
  );
};

export default Home;
