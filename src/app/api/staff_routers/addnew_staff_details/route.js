import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {name, contracttype, contactno, nic, password} = await request.json();
  console.log(name, contracttype, contactno, nic, password);

  const newUser = await prisma.staff.create({
    data: {
      name,
      contracttype,
      contactno,
      nic,
      password,
    },
  });
  return NextResponse.json({message:"SUCCESS",newUser})
  // return NextResponse.json({message:"SUCCESS"})
}
