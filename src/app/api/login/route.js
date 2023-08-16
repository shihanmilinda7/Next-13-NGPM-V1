import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {email, password} = await request.json();
  let res;
  // console.log("------------------------" + email + "-asaSAS------------------------------------------");
  const users = await prisma.user.findMany({
    where: {
      email: {
        contains: email, 
        // contains: "admin@sds.com", 
      },
      password: {
        // contains: "admin", 
        contains: password, 
      },
    },
  });
  if (users.length > 0) {
    res = {message:"SUCCESS",users}
  }else{
    res = {message:"FAIL"}
  }

  // await prisma.timealloc.create({
  //   data: {
  //     date:"2023-08-17",
  //     userid:"1",
  //     remark:"no mo",
  //   },
  // });


  return NextResponse.json(res)
}
