import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {email, password} = await request.json();
  // console.log("------------------------" + email + "-asaSAS------------------------------------------");

  let res;
  // const users = prisma.user1.findMany();
  const users = await prisma.user.findMany({
    // where: {
    //   email: {
    //     contains: "", 
    //   },
    //   password: {
    //     contains: "", 
    //   },
    // },
  });
  if (users.length > 0) {
    res = {message:"SUCCESS",users}
  }else{
    res = {message:"FAIL"}
  }
  return NextResponse.json(res)
}
