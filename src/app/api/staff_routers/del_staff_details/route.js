import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {staffid} = await request.json();
  // console.log("------------------------" + userid + "-asaSAS------------------------------------------");

  await prisma.staff.delete({
    where: {
      staffid: staffid
    },
  })

  return NextResponse.json({message:"SUCCESS"})
}
