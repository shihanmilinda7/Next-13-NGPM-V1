import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {userid,name, username,email, password,jobrole,company} = await request.json();
  // console.log("------------------------" + userid + "-asaSAS------------------------------------------");

  const updateStaff = await prisma.user.updateMany({
    where: { userid },
    data: {
      name,
      username,
      email,
      password,
      jobrole,
      company,
    },
  });

  return NextResponse.json({message:"SUCCESS",updateStaff})
}
