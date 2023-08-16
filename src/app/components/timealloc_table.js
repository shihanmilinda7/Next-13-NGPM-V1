"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import { TimeAllocTableRow } from "./timealloc_table_row";
import { redirect, useRouter } from "next/navigation";

export const TimeAllocTable = ({ tableRowsIn, setTableRowsData }) => {
  // const router = useRouter();
  // const childRef = useRef(null);

  // const date = props.date;
  // const userid = props.userid
  // const remark = props.remark


  const tableHead = ["Project Name", "Time", "Remark"];
  const [tableRows, setTableRows] = useState(tableRowsIn);

  useEffect(() => {
    const q = [...tableRowsIn]
    setTableRows(q)
    console.log("saddddddddd",q)
  }, [tableRowsIn]);

  // const callUpdateStateOfTableRowComp = () => {
  //   if (childRef.current) {
  //     childRef.current.updateStateOfTableRowComp();
  //   }
  // };

  // const updateStateOfTableComp = (newRowData) => {
  //   setTableRowData(newRowData);
  //   callUpdateStateOfTableRowComp();
  // };
  // React.useImperativeHandle(ref, () => ({
  //   updateStateOfTableComp,
  // }));

  // const tableEvent = (e, rowIndex, field) => {
  //   console.log(tableRowData);
  //   const newData = [...tableRowData];
  //   newData[rowIndex][field] = e.target.value;
  //   setTableRowData(newData);
  // };

  // const tableEvent_1 = (field) => {
  //   console.log(tableRowData);
  //   const newData = [...tableRowData];
  //   for (let i = 0; i < newData.length; i++) {
  //     // const element = array[i];
  //     newData[i][field] = "";
  //   }
  //   setTableRowData(newData);
  // };

  // const saveEvent = async () => {
  //   // console.log(tableRowData);
  //   const responseNewTimeAlloc = await fetch(
  //     "api/timealloc_routers/save_timealloc_data",
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ date,userid,remark,tableRowData}),
  //     }
  //   );

  //   const res = await responseNewTimeAlloc.json();
  //   // console.log(date,remark,userid);
  //     // redirect("/time_allocation")
  //   if (res.message == "SUCCESS") {
  //     // setIsOpen(false);
  //     console.log(res)
  //     router.push("/time_allocation");
  //   } else {
  //     router.push("/");
  //   }
  //   return res;
  // };
  // const saveEvent = () => {
  //   console.log(tableRows);
  // }
  const updateTableRows = (newVal) => {
    const updatedArray = tableRows.map(r =>
      r.projectid === newVal.projectid ? newVal : r);
    setTableRows(updatedArray);
    setTableRowsData(updatedArray);
  }
  return (
    <div>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {tableHead.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((tableRow, index) => (
            <TimeAllocTableRow
              tableRowIn={tableRow}
              updateTableRows={updateTableRows}
              key={tableRow.projectid}
            />
          ))}
        </tbody>
      </table>
      {/* <h1>Table level</h1> */}

      {/* <h1>{JSON.stringify(tableRowsIn)}</h1> */}
      {/* <button onClick={saveEvent}>Save</button> */}
    </div>
  );
};
