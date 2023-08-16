"use client";

import Navbar from "../components/navbar";
import React, { useEffect, useState } from "react";
import AddNewCategoryPopup from "../components/addnew_category_popup";

export default function Category() {
 
  // const [staffRowData, setStaffRowData] = useState("");

  // useEffect(() => {
  //   // declare the data fetching function
  //   const fetchData = async () => {
  //     const all_staff_details = await fetch(
  //       "api/staff_routers/get_all_staff_details",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({}),
  //       }
  //     );
  //     const res = await all_staff_details.json();
  //     setStaffRowData(res.users);
  //   };
  //   // call the function
  //   fetchData().catch(console.error);
  // }, []);
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center p-4">
        <h1 className="text-4xl font-extrabold uppercase text-indigo-600 mr-auto">
          Category
        </h1>
        <AddNewCategoryPopup buttonName="Add Category" delButton = "false"/>
      </div>
      {/* <div>
        {staffRowData && (
          <StaffTable
            staffRowData={staffRowData}
          />
        )}
      </div> */}
    </div>
  );
}
