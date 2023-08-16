"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import { TimeAllocTable } from "../components/timealloc_table";
import { useRouter } from "next/navigation";

export default function TimeAllocation() {
  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));
  const [remark, setRemark] = useState("");
  let userIdTmp = ""
  try {
    userIdTmp = localStorage.getItem('userid') || "";
  } catch (error) { }
  const [userid, setUserId] = useState(userIdTmp);
  // const childRef = useRef(null);
  const router = useRouter();
  const [tableRowData, setTableRowsData] = useState("");

  useEffect(() => {
    timeAllocFetchApi(date, userid);
  }, [date]);


  const saveEvent = async () => {
    console.log(tableRowData);
    const responseNewTimeAlloc = await fetch(
      "api/timealloc_routers/save_timealloc_data",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, userid, remark, tableRowData }),
      }
    );

    const res = await responseNewTimeAlloc.json();
    // console.log(date,remark,userid);
    // redirect("/time_allocation")
    if (res.message == "SUCCESS") {
      // setIsOpen(false);
      console.log(res)
      // router.push("/time_allocation");
      window.location.href = "/time_allocation/1jan2023"

    } else {
      router.push("/");
    }
    return res;
  }

  function timeAllocFetchApi(selDate, userid) {
    const fetchData = async () => {
      const cur_timealloc_details = await fetch(
        "api/timealloc_routers/get_cur_date_details",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ selDate, userid }),
        }
      );
      const res = await cur_timealloc_details.json();

      if (res.message == "SUCCESS-2") {
        setDate(selDate);
        setRemark(" ");
        res.projects.forEach(element => {
          element.time = "";
          element.remark = "";
        });
        setTableRowsData(res.projects);
        // callUpdateStateOfTableComp(res.projects);
      }
      else if (res.message == "SUCCESS-1") {
        setDate(res.cur_date_details[0].date);
        setRemark(res.cur_date_details[0].remark);
        setTableRowsData(res.timeAllocDetails);
        // callUpdateStateOfTableComp(res.timeAllocDetails);
      } else {
        console.log(res.message);
      }
    };
    // call the function
    fetchData().catch(console.error);
  }

  return (
    <div>
      <Navbar />
      <div className="w-full flex pb-8 flex-col">
        <h1 className="text-4xl font-extrabold text-indigo-600 mr-auto mt-2">
          TIme Allocation
        </h1>
        <div className="p-1 flex w-full ">
          <div mr-4>
            <label
              for="date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date
            </label>
            <div className="mt-2 w-full">
              <input
                id="date"
                name="date"
                type="date"
                autocomplete="{autocomplete}"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            {/* <button className="ml-2 mt-2" onClick={serachButtonClickEvent}>
              Search
            </button> */}
          </div>
          <div className="ml-4 w-full">
            <label
              for="remark"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Remark
            </label>
            <div className="mt-2 w-full">
              <textarea
                id="remark"
                name="remark"
                rows="2"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-1">
        <button onClick={saveEvent}>Save</button>
        {/* <h1>Page level</h1> */}
        {/* <h1>{JSON.stringify(tableRowData)}</h1> */}


        {tableRowData && (
          <TimeAllocTable
            tableRowsIn={tableRowData}
            setTableRowsData={setTableRowsData}
          />
        )}
      </div>
    </div>
  );
}
