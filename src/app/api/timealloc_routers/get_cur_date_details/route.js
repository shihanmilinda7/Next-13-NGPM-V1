import { prisma } from "@/db";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { selDate, userid } = await request.json();
  console.log(selDate)
  let res;
  const cur_date_details = await prisma.timealloc.findMany({
    where: {
      date: {
        contains: selDate,
        // contains: "2023-07-18",
      },
      userid: {
        contains: userid,
      },
    },
  });

  //check cur date data exist or not
  if (cur_date_details.length > 0) {
    //if data exist
    const timeAllocHeaderId = cur_date_details[0].timeallocid;
    const rawQuery = Prisma.sql`SELECT td.*,pr.name FROM timeallocdetails AS td INNER JOIN projects AS pr ON td.projectid = pr.projectid WHERE td.timeallocid = ${timeAllocHeaderId}`;
    const timeAllocDetails = await prisma.$queryRaw(rawQuery);
    console.log("fire 1");
    res = { message: "SUCCESS-1", cur_date_details, timeAllocDetails };
  } else {
    //if data not exist
    const status = "pending";
    const rawQuery = Prisma.sql`SELECT projectid,name FROM projects WHERE status = ${status}`;
    const projects = await prisma.$queryRaw(rawQuery);
    // const projects = await prisma.$queryRaw`SELECT * FROM projects WHERE status = ${status}`;
    // const projects = await prisma.projects.findMany({
    //   where: {
    //     status: {
    //       contains: "pending",
    //     },
    //   },
    // });
    
    if (projects.length > 0) {
      res = { message: "SUCCESS-2", projects };
      console.log("fire 2");
    } else {
      res = { message: "FAIL" };
    }
  }
  return NextResponse.json(res);
}
