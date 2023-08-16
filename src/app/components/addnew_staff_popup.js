"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import InputField from "./input_field";
import { useRouter } from "next/navigation";
import SaveAlert from "./save_alert";
import ConfirmAlertbox from "./confirm_alertbox";
import Toast from "./toast";
// import SaveChangeWariningPopup from "./savechange_warning";
const AddNewStaffPopup = ({ buttonName, selRowData, delButton }) => {
  const [addnewIsOpen, setAddnewIsOpen] = useState(false);
  const [staffid, setStaffid] = useState(selRowData?.staffid ?? "");
  const [name, setName] = useState(selRowData?.name ?? "");
  const [contracttype, setContracttype] = useState(selRowData?.contracttype ?? "");
  const [contactno, setContactno] = useState(selRowData?.contactno ?? "");
  const [nic, setNic] = useState(selRowData?.nic ?? "");
  const [password, setPassword] = useState(selRowData?.password ?? "");
  const [confirmpassword, setConfirmpassword] = useState(selRowData?.password ?? "");

  const [showAddnewAlert, setShowAddnewAlert] = useState(false);
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);
  const [showPasswordWarn, setShowPasswordWarnAlert] = useState(false);
  const [showDelButton, setShowDelButton] = useState(delButton);

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
    const newObject = { staffid, name, contracttype, contactno, nic, password }
    const keys = Object.keys(selRowData);
    for (const key of keys) {
      if (selRowData[key] !== newObject[key]) {
        return false;
      }
    }
    return true;
  }

  const actionHandler = () => {
    if (staffid) {
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

  //delete staff action
  const deleteActionHandler = async () => {

      if (staffid) {
        const responseDelStaff = await fetch(
          "api/staff_routers/del_staff_details",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ staffid }),
          }
        );

        const res = await responseDelStaff.json();
        console.log(res);
        setAddnewIsOpen(false);
        window.location.href = "/staff"
      } else {
        window.location.href = "/staff"
      }
    
  }

  //add new staff action
  const addStaffNewAction = async (e) => {
    if (password == confirmpassword) {
      const responseNewStaff = await fetch(
        "api/staff_routers/addnew_staff_details",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, contracttype, contactno, nic, password }),
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
        }, 2000);
      } else {
        router.push("/");
      }
      return res;
    } else {
      setShowPasswordWarnAlert(true);
      setTimeout(() => {
        setShowPasswordWarnAlert(false);
      }, 5000);
    }
  };

  //update existing staff action
  const updateStaffAction = async (e) => {
    const responseUpdateStaff = await fetch(
      "api/staff_routers/update_staff_details",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ staffid, name, contracttype, contactno, nic, password }),
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
          id="staffid"
          name="staffid"
          type="hidden"
          autocomplete=""
          value={staffid}
          onChange={(e) => setStaffid(e.target.value)}
        />
        <div className="pl-12 pb-1">
          <h1 className="text-2xl uppercase text-indigo-800">Add New Staff Member</h1>
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
                  label="Contract Type"
                  id="contracttype"
                  name="contracttype"
                  type="text"
                  autocomplete=""
                  placeholder="Contract Type"
                  value={contracttype}
                  onChange={(e) => setContracttype(e.target.value)}
                />
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <InputField
                  label="Contact No"
                  id="contactno"
                  name="contactno"
                  type="number"
                  autocomplete=""
                  placeholder="Contact No"
                  value={contactno}
                  onChange={(e) => setContactno(e.target.value)}
                />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <InputField
                  label="NIC"
                  id="nic"
                  name="nic"
                  type="text"
                  autocomplete=""
                  placeholder="NIC"
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
                />
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <InputField
                  label="Password"
                  id="password"
                  name="password"
                  type="text"
                  autocomplete=""
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <InputField
                  label="Confirm Password"
                  id="confirmpassword"
                  name="confirmpassword"
                  type="text"
                  autocomplete=""
                  placeholder="Confirm Password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
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
                  className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-600  hover:bg-gradient-to-l hover:from-amber-500 hover:to-amber-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Cancel
                </button>
              </div>
              <div className={showDelButton === "true" ? "flex ml-auto" : "flex ml-auto hidden"}>
                <ConfirmAlertbox buttonName="Delete" leftButtonAction={deleteActionHandler} title="Are you sure?" description="Do you want to delete this record ?" />

                {/* <button onClick={deleteActionHandler}
                  className="rounded-lg bg-gradient-to-r from-red-500 to-red-600  hover:bg-gradient-to-l hover:from-red-500 hover:to-red-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Delete
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {showAddnewAlert && (< Toast description="Successfully created New Staff Member.." style="bg-green-500 hover:bg-green-600" setShowAlert={setShowAddnewAlert} />)}
      {showUpdateAlert && (< Toast description="Successfully updated.." style="bg-indigo-500 hover:bg-indigo-600" setShowAlert={setShowUpdateAlert} />)}
      {showPasswordWarn && (< Toast description="Password does not match.." style="bg-red-500 hover:bg-red-600" setShowAlert={setShowPasswordWarnAlert} />)}
      {/* {showAddnewAlert && (<SaveAlert description="Successfully created New Staff Member.." setShowAlert={setShowAddnewAlert} />)}
      {showUpdateAlert && (<SaveAlert description="Successfully updated.." setShowAlert={setShowUpdateAlert} />)} */}
    </div>
  );
};
export default AddNewStaffPopup;
