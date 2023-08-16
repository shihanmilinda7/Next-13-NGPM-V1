import { prisma } from "@/db";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { date, userid, remark, tableRowData } = await request.json();

  console.log("heg", tableRowData[0].timeallocid,)
  if (tableRowData[0].timeallocid) {
    try {
      await prisma.timealloc.delete({
        where: {
          timeallocid: tableRowData[0].timeallocid
        },
      })
      const deleteUsers = await prisma.timeallocdetails.deleteMany({
        where: {
          timeallocid: tableRowData[0].timeallocid
        },
      })
      // const deleteTimeAllocDeatilsData = await prisma.timeallocdetails.delete({
      //   where: {
      //     timeallocid: tableRowData[0].timeallocid,
      //   },
      // })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        console.log("e is ", e);
        if (e.code === 'P2025') {
          console.log(
            'There is a unique constraint violation, a new user cannot be created with this email'
          )
        } else {
          throw e
        }
      }
      // throw e
    }
  }










  // console.log(tableRowData)
  // console.log("------------------------" + date + "-asaSAS------------------------------------------");
  //delete

  // const deleteTimeAllocHeadData = await prisma.timealloc.delete({
  //   where: {
  //     date,
  //     userid
  //   },
  // })

  // const deleteTimeAllocDeatilsData = await prisma.timeallocdetails.delete({
  //   where: {
  //     timeallocid:tableRowData[0].timeallocid,
  //   },
  // })

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
  return NextResponse.json(res)
}
