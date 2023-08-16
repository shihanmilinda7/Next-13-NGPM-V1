"use client";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import InputField from "./input_field";
import { useRouter  } from "next/navigation";

const SaveChangeWariningPopup = ({saveChangeWarning}) => {
  const [warningIsOpen, setWarningIsOpen] = useState(false);

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
  
  useEffect(() => {
    setWarningIsOpen(true);
    // const q = [...tableRowsIn]
    // setTableRows(q)
    // console.log("saddddddddd")
  }, [saveChangeWarning]);

  return (
    <div>
      <Modal
        isOpen={warningIsOpen}
        onRequestClose={() => setWarningIsOpen(false)}
        style={customStyles}
      >
        <h1>Add New Staff Member</h1>
        <button onClick={() => setWarningIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};
export default SaveChangeWariningPopup;
