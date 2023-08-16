import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {} = await request.json();

  let res;
  const users = await prisma.staff.findMany({});

  if (users.length > 0) {
    res = {message:"SUCCESS",users}
  }else{
    res = {message:"FAIL"}
  }
  return NextResponse.json(res)
}
