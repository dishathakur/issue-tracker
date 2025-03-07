import { redirect } from "next/navigation";
import { prisma } from "../client";

const NewIssuePage = () => {
  async function onSubmit(data: FormData) {
    "use server";

    if (data) {
      await prisma.issue.create({
        data: {
          title: data.get("title")!.toString(),
          description: data!.get("description")!.toString(),
        },
      });
    }

    redirect("/issue");
  }

  return (
    <div>
      <form className="flex flex-col gap-4" action={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          className="bg-white rounded p-2 w-1/2 text-black"
          name="title"
          type="text"
        />
        <label>Description</label>
        <input
          className="bg-white rounded p-2 w-1/2 text-black"
          name="description"
          type="text"
        />
        <button className="btn btn-soft w-fit mt-6" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewIssuePage;
