import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {projectid, name, starteddate,enddate, status} = await request.json();
  // console.log("------------------------" + projectid + "-asaSAS------------------------------------------");

  const updateProject = await prisma.projects.updateMany({
    where: { projectid },
    data: {
      name,
      starteddate,
      enddate,
      status,
    },
  });

  return NextResponse.json({message:"SUCCESS",updateProject})
}
