// components/Popup.js
// "use client";
import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";

export async function handleFormSubmit() {
  const response = await fetch("https://api.publicapis.org/entries");
  const users = await response.json();
  console.log("User saved to the database:");
}

const Popup = (users) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //   const handleFormSubmit = async (e) => {
  //     // e.preventDefault();
  //     try {
  //       //   await prisma.user.create({
  //       //     data: {
  //       //       name: inputValue,
  //       //     },
  //       //   });
  //       // const res = await axios.post('/api/users', { })
  //       const res = await fetch("https://api.publicapis.org/entries");
  //       console.log("User saved to the database:", inputValue);
  //       console.log(res.data);
  //       onClose();
  //     } catch (error) {
  //       console.error("Error saving user:", error);
  //     }
  //   };

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
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
        <form action={handleFormSubmit}>
          <div className="bg-slate-500">
            <h1 className="text-slate-800">Modal Content</h1>
            <input className="text-slate-800" type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter something..." />
            <button type="submit">add</button>
          </div>
        </form>
        <button className="text-slate-800" onClick={() => setIsOpen(false)}>
          Close Modal
        </button>
      </Modal>
    </div>
  );
};
export default Popup;
