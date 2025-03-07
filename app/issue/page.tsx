import { prisma } from "../client";
import Button from "../components/button";
import { redirect } from "next/navigation";
interface Issue {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const IssuePage = async () => {
  const issue: Issue[] = await prisma.issue.findMany();

  const handleCreateNewIssue = async () => {
    "use server";

    await redirect("/newIssue");
  };
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="text-2xl text-start pb-5">Issues List</div>
        <Button text="Create New Issue" onclick={handleCreateNewIssue} />
      </div>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-1/2">
        <table className="table">
          {/* table head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody>
            {issue!.map((i) => (
              <tr key={i.id}>
                <th>{i.id!}</th>
                <td>{i.title!}</td>
                <td>{i.description!}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IssuePage;
