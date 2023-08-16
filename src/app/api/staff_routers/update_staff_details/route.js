import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {staffid,name, contracttype, contactno, nic, password} = await request.json();
  // console.log("------------------------" + userid + "-asaSAS------------------------------------------");

  const updateStaff = await prisma.staff.updateMany({
    where: { staffid },
    data: {
      name,
      contracttype,
      contactno,
      nic,
      password,
    },
  });

  return NextResponse.json({message:"SUCCESS",updateStaff})
}
