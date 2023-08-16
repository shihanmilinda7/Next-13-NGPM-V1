"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import InputField from "./input_field";
import { useRouter } from "next/navigation";
import SaveAlert from "./save_alert";

const AddNewProjectPopup = ({buttonName,selRowData}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectid, setProjectid] = useState(selRowData?.projectid ?? "");
  const [name, setName] = useState(selRowData?.name ?? "");
  const [starteddate, setStartedDate] = useState(selRowData?.starteddate ?? "");
  const [enddate, setEndDate] = useState(selRowData?.enddate ?? "");
  const [status, setStatus] = useState(selRowData?.status ?? "");

  const [showAddnewAlert, setShowAddnewAlert] = useState(false);
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);

  const router = useRouter();

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const actionHandler = () =>{
    if(projectid){
      console.log("project id - ", projectid);
      updateProjectAction();
    }else{
      console.log("no project id");
      addNewProjectAction();
    }
  }

  //add new project action
  const addNewProjectAction = async (e) => {
    // e.preventDefault();
    const responseNewProject = await fetch(
      "api/project_routers/addnew_project_details",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, starteddate, enddate, status }),
      }
    );

    const res = await responseNewProject.json();
    console.log(res);

    if (res.message == "SUCCESS") {
      setIsOpen(false);
      // e.preventDefault();
    //  window.location.href = "/projects"
    setShowAddnewAlert(true);
     setTimeout(() => {
      setShowAddnewAlert(false);
       window.location.href = "/projects"
     }, 3000);
      // router.push("/projects");
    } else {
      router.push("/");
    }
    return res;
  };

  //update existing project action
  const updateProjectAction = async (e) => {
    // e.preventDefault();
    const responseUpdateProject = await fetch(
      "api/project_routers/update_project_details",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectid, name, starteddate, enddate, status }),
      }
    );

    const res = await responseUpdateProject.json();
    console.log(res);

    if (res.message == "SUCCESS") {
      setIsOpen(false);
      setShowUpdateAlert(true);
     setTimeout(() => {
      setShowUpdateAlert(false);
       window.location.href = "/projects"
     }, 3000);
      // router.push("/projects");
    } else {
      router.push("/");
    }
    return res;
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        {buttonName}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <h1>Add New Project</h1>
        <div className="flex pb-8">
          <div className="p-2">
          <InputField
              id="projectid"
              name="projectid"
              type="hidden"
              autocomplete=""
              value={projectid}
              onChange={(e) => setProjectid(e.target.value)}
            />
            <InputField
              label="Name"
              id="name"
              name="name"
              type="text"
              autocomplete=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              label="Start Date"
              id="starteddate"
              name="starteddate"
              type="date"
              autocomplete=""
              value={starteddate}
              onChange={(e) => setStartedDate(e.target.value)}
            />
            <InputField
              label="End Date"
              id="enddate"
              name="enddate"
              type="date"
              autocomplete=""
              value={enddate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <div>
              <label
                for={name}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Status
              </label>
              <div className="mt-2 w-full">
                <select
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <option value="pending">Pending</option>
                  <option value="started">Started</option>
                  <option value="end">End</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
            </div>
            {/* </div>
          <div className="w-1/2 p-2"> */}
            {/* <InputField
              label="Status"
              id="status"
              name="status"
              type="text"
              autocomplete=""
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            /> */}
          </div>
        </div>
        {/* <div className="flex w-full justify-center">
          <InputField
            label="Pending"
            id="pending"
            name="pending"
            type="radio"
            autocomplete=""
            value="pending"
            onChange={(e) => setStatus(e.target.value)}
          />
        </div> */}
        <button onClick={() => setIsOpen(false)}>Close</button>
        <button className="ml-2" onClick={actionHandler}>
          Save
        </button>
      </Modal>
      {showAddnewAlert && (<SaveAlert description="Successfully created New Project.." setShowAlert={setShowAddnewAlert}/>)}
      {showUpdateAlert && (<SaveAlert description="Successfully updated.." setShowAlert={setShowUpdateAlert}/>)}
    </div>
  );
};
export default AddNewProjectPopup;
