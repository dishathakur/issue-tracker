import { prisma } from "../client"; // Your prisma client
import Button from "../components/button"; // Your Button component
import { redirect } from "next/navigation"; // For redirection

interface Issue {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const IssuePage = async () => {
  // Fetch data from the database directly inside the server component
  const issues: Issue[] = await prisma.issue.findMany();

  const handleCreateNewIssue = async () => {
    // Redirect to the "newIssue" page
    "use server"; // This marks this function as a server action
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
            {issues.map((i) => (
              <tr key={i.id}>
                <th>{i.id}</th>
                <td>{i.title}</td>
                <td>{i.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IssuePage;
