import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../client";

export async function GET() {
  const issue = await prisma.issue.findMany();
  return NextResponse.json(issue);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
