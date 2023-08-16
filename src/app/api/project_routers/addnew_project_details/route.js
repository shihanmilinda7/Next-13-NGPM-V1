import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {name, starteddate,enddate, status} = await request.json();
  console.log("------------------------" + status + "-asaSAS------------------------------------------");

  const newProject = await prisma.projects.create({
    data: {
      name,
      starteddate,
      enddate,
      status,
    },
  });


  // console.log(newUser.error)
  let res;
  // // const users = prisma.user1.findMany();
  // const users = await prisma.user1.findMany({
  //   // where: {
  //   //   email: {
  //   //     contains: "", 
  //   //   },
  //   //   password: {
  //   //     contains: "", 
  //   //   },
  //   // },
  // });
  // if (newUser.length > 0) {
  //   res = {message:"SUCCESS",newUser}
  // }else{
  //   res = {message:"FAIL"}
  // }
  return NextResponse.json({message:"SUCCESS",newProject})
  // return NextResponse.json({message:"SUCCESS"})
}
