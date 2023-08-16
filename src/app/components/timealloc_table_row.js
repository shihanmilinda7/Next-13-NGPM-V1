"use client"

import React, { forwardRef, useEffect, useState } from "react";

export const TimeAllocTableRow = ({tableRowIn,updateTableRows}) => {

  const [tableRow, setTableRow] = useState(tableRowIn);

  useEffect(() => {
    const q = {...tableRowIn}
    setTableRow(q)
    console.log("saddddddddd",q)
  }, [tableRowIn]);
  // const tableDataKeys = ["name", "time", "remark"];
  // const tableRow = props.tableRow;
  // const index = props.index;
  // const tableEvent = props.tableEvent;
  // // const tableEvent_1 = props.tableEvent_1;

  // // console.log(tableRow)

  // // const timeOnChangeHandle = (value, rowIndex, field) => {
  // //   setTime(tableRow.time)
  // //   // tableEvent(e, rowIndex, field)
  // // };

  // // const remarkOnChangeHandle = (value, rowIndex, field) => {
  // //   setRemark(tableRow.remark)
  // //   // tableEvent(e, rowIndex, field)
  // // };

  // // useEffect(() => {
  // //   setTime(tableRow.time);
  // //   setRemark(tableRow.remark);
  // // }, []);

  // const updateStateOfTableRowComp = () => {
  //   // setTime(tableRow.time);
  //   // setRemark(tableRow.remark);
  //   console.log("=================================================================");
  // };
  // React.useImperativeHandle(ref, () => ({
  //   updateStateOfTableRowComp,
  // }));


  // // state update onchange events define
  // const timeOnChangeHandle = (e, rowIndex, field) => {
  //   setTime(e.target.value)
  //   // tableEvent(e, rowIndex, field)
  // };

  // const remarkOnChangeHandle = (e, rowIndex, field) => {
  //   setRemark(e.target.value)
  //   // tableEvent(e, rowIndex, field)
  // };

  //state update events define
  // const timeOnChangeHandle_1 = () => {
  //   setTime("")
  //   tableEvent_1("time")
  // };

  // const remarkOnChangeHandle_1 = () => {
  //   setRemark("")
  //   tableEvent_1("remark")
  // };
  const updateData =(newObject)=>{
    setTableRow(newObject);
    updateTableRows(newObject);
  }


  return (
    <tr key={tableRow.id} className="even:bg-blue-gray-50/50">
      <td className="p-4">{tableRow.name}</td>
      <td className="p-4"><input
        id="time"
        name="time"
        type="text"
        autocomplete=""
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={tableRow.time}
        onChange={(e) => updateData({...tableRow,time:e.target.value})}
      /></td>
      <td className="p-4">
        <input
          id="remark"
          name="remark"
          type="text"
          autocomplete=""
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={tableRow.remark}
          onChange={(e) => updateData({...tableRow,remark:e.target.value})}
        />
        {/* <h1>{JSON.stringify(tableRow)}</h1> */}
      </td>
    </tr>
  );
};
