import React from "react";
import { prisma } from "../client";

const Admin = () => {
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

export default Admin;
