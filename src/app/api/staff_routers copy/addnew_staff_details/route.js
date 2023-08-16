import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {name, username,email, password,jobrole,company} = await request.json();
  console.log("------------------------" + name + "-asaSAS------------------------------------------");

  const newUser = await prisma.user.create({
    data: {
      name,
      username,
      email,
      password,
      jobrole,
      company,
    },
  });
  return NextResponse.json({message:"SUCCESS",newUser})
}
