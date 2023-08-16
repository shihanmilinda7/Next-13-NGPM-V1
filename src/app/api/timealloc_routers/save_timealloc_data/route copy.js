import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { date, userid, remark, tableRowData } = await request.json();
  // console.log(tableRowData)
  // console.log("------------------------" + date + "-asaSAS------------------------------------------");
  const newTimeAlloc = await prisma.timealloc.create({
    data: {
      date,
      userid,
      remark,
    },
  });
  // console.log(newTimeAlloc.timeallocid);
  let res;
  let headerId = newTimeAlloc.timeallocid;
  let allNewTimeAllocDetails = [];

  if (headerId) {
    for (let i = 0; i < tableRowData.length; i++) {
      const element = tableRowData[i];
      // console.log(element)
      const newTimeAllocDetils = await prisma.timeallocdetails.create({
        data: {
          timeallocid: newTimeAlloc.timeallocid,
          projectid: element.projectid,
          time: element.time,
          remark: element.remark,
        },
      });
      allNewTimeAllocDetails.push(newTimeAllocDetils);
      // console.log(newTimeAllocDetils)
    }
    res = { message: "SUCCESS", newTimeAlloc, allNewTimeAllocDetails }
  } else {
    res = { message: "FAIL" }
  }
  // for (let i = 0; i < tableRowData.length; i++) {
  //   const element = tableRowData[i];
  //   // console.log(element)
  //   const newTimeAllocDetils = await prisma.timeallocdetails.create({
  //     data: {
  //       timeallocid: 1,
  //       projectid: element.projectid,
  //       time: element.time,
  //       remark: element.remark,
  //     },
  //   });
  //   // console.log(newTimeAllocDetils)
  // }

  // return NextResponse.json({message:"SUCCESS",newTimeAlloc})
  return NextResponse.json(res)
}
