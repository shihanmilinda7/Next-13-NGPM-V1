"use client"

import Navbar from "../components/navbar";
import Link from "next/link";
import { ProjectTable } from "../components/project_table";
import React, { useEffect, useState } from "react";
import AddNewProjectPopup from "../components/addnew_project_popup";

export default function Projects() {
  const tableHead = ["Project Name", "Started Date", "End Date", "Status", ""];
  const tableDataKeys = ["name", "starteddate", "enddate", "status"];
  const [tableRows, setTableRows] = useState("");

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const all_project_details = await fetch(
        "api/project_routers/get_all_project_details",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
      const res = await all_project_details.json();
      setTableRows(res.projects);
      // console.log(res.projects);
    };
    // call the function
    fetchData().catch(console.error);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold text-indigo-600 mr-auto">
          Projects
        </h1>
        <AddNewProjectPopup buttonName="Add Project"/>

        {/* <Link
          href="/projects/newproject"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add Project
        </Link> */}
      </div>
      <div>
        {tableRows && (
          <ProjectTable
            tableHead={tableHead}
            tableRows={tableRows}
            tableDataKeys={tableDataKeys}
          />
        )}
      </div>
    </div>
  );
}
