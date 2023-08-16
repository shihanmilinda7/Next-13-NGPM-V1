"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import InputField from "./input_field";
import { useRouter } from "next/navigation";
import SaveAlert from "./save_alert";
// import SaveChangeWariningPopup from "./savechange_warning";
const AddNewStaffPopup = ({ buttonName, selRowData }) => {
  const [addnewIsOpen, setAddnewIsOpen] = useState(false);
  const [userid, setUserid] = useState(selRowData?.userid ?? "");
  const [name, setName] = useState(selRowData?.name ?? "");
  const [username, setUsername] = useState(selRowData?.username ?? "");
  const [email, setEmail] = useState(selRowData?.email ?? "");
  const [password, setPassword] = useState(selRowData?.password ?? "");
  const [jobrole, setJobrole] = useState(selRowData?.jobrole ?? "");
  const [company, setCompany] = useState(selRowData?.company ?? "");

  const [showAddnewAlert, setShowAddnewAlert] = useState(false);
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);

  // const [saveChangeWarning, setSaveChangeWarning] = useState(false);

  const router = useRouter()
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

  function beforeSaveAction() {
    delete selRowData.createdAt;
    const newObject = { userid, name, username, email, password, jobrole, company }
    const keys = Object.keys(selRowData);
    for (const key of keys) {
      if (selRowData[key] !== newObject[key]) {
        return false;
      }
    }
    return true;
  }

  const actionHandler = () => {
    if (userid) {
      if (beforeSaveAction()) {
        console.log("no any")
        setAddnewIsOpen(false);
      } else {
        console.log("change")
        updateStaffAction();
        // setSaveChangeWarning(true);
      }

    } else {
      addStaffNewAction();
    }
  }

  //add new staff action
  const addStaffNewAction = async (e) => {
    const responseNewStaff = await fetch(
      "api/staff_routers/addnew_staff_details",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, username, email, password, jobrole, company }),
      }
    );

    const res = await responseNewStaff.json();
    console.log(res);

    if (res.message == "SUCCESS") {
      setAddnewIsOpen(false);
      setShowAddnewAlert(true);
      setTimeout(() => {
        setShowAddnewAlert(false);
        window.location.href = "/staff"
      }, 3000);
    } else {
      router.push("/");
    }
    return res;
  };

  //update existing staff action
  const updateStaffAction = async (e) => {
    const responseUpdateStaff = await fetch(
      "api/staff_routers/update_staff_details",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userid, name, username, email, password, jobrole, company }),
      }
    );

    const res = await responseUpdateStaff.json();
    console.log(res);

    if (res.message == "SUCCESS") {
      setAddnewIsOpen(false);
      setShowUpdateAlert(true);
      setTimeout(() => {
        setShowUpdateAlert(false);
        window.location.href = "/staff"
      }, 3000);
    } else {
      router.push("/");
    }
    return res;
  };

  return (
    <div>
      <button
        onClick={() => setAddnewIsOpen(true)}
        className="flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-2  rounded-lg tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
      >
        {buttonName}
      </button>
      <Modal
        isOpen={addnewIsOpen}
        onRequestClose={() => setAddnewIsOpen(false)}
        style={customStyles}
      >
        <InputField
          id="userid"
          name="userid"
          type="hidden"
          autocomplete=""
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
        />
        <div className="pl-1 pb-3">
          <h1 className="text-2xl uppercase font-bold">Add New Staff Member</h1>
        </div>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <InputField
                  label="Name"
                  id="name"
                  name="name"
                  type="text"
                  autocomplete=""
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <InputField
                  label="Username"
                  id="username"
                  name="username"
                  type="text"
                  autocomplete=""
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <InputField
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <InputField
                  label="Jobrole"
                  id="jobrole"
                  name="jobrole"
                  type="text"
                  autocomplete=""
                  value={jobrole}
                  onChange={(e) => setJobrole(e.target.value)}
                />
              </div>
            </div>
            {/* <div className="mb-5">
              <label
                for="guest"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                How many guest are you bringing?
              </label>
              <input
                type="number"
                name="guest"
                id="guest"
                placeholder="5"
                min="0"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div> */}

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <InputField
                  label="Password"
                  id="password"
                  name="password"
                  type="text"
                  autocomplete=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <InputField
                  label="Company"
                  id="company"
                  name="company"
                  type="text"
                  autocomplete=""
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
            <div className="flex">
              <div className="mr-3">
                <button onClick={actionHandler}
                  className="rounded-lg bg-gradient-to-r from-green-500 to-green-600  hover:bg-gradient-to-l hover:from-green-500 hover:to-green-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div>
              <div>
                <button onClick={() => setAddnewIsOpen(false)}
                  className="rounded-lg bg-gradient-to-r from-red-500 to-red-600  hover:bg-gradient-to-l hover:from-red-500 hover:to-red-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Cancel
                </button>
              </div></div>
          </div>
        </div>
        {/* <div className="flex pb-8">
          <div className="w-1/2 p-2">
            <InputField
              id="userid"
              name="userid"
              type="hidden"
              autocomplete=""
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
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
              label="Username"
              id="username"
              name="username"
              type="text"
              autocomplete=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputField
              label="Email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-1/2 p-2">
            <InputField
              label="Password"
              id="password"
              name="password"
              type="text"
              autocomplete=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
              label="Jobrole"
              id="jobrole"
              name="jobrole"
              type="text"
              autocomplete=""
              value={jobrole}
              onChange={(e) => setJobrole(e.target.value)}
            />
            <InputField
              label="Company"
              id="company"
              name="company"
              type="text"
              autocomplete=""
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        </div> */}
        {/* <button onClick={() => setAddnewIsOpen(false)}>Close</button> */}
        {/* <button className="ml-2" onClick={actionHandler}>Save</button> */}
        {/* <SaveChangeWariningPopup saveChangeWarning={saveChangeWarning}/> */}
      </Modal>
      {showAddnewAlert && (<SaveAlert description="Successfully created New Staff Member.." setShowAlert={setShowAddnewAlert} />)}
      {showUpdateAlert && (<SaveAlert description="Successfully updated.." setShowAlert={setShowUpdateAlert} />)}
    </div>
  );
};
export default AddNewStaffPopup;
