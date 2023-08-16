"use client";

import React, { useState } from "react";
import Modal from "react-modal";

const ConfirmAlertbox = ({ buttonName, leftButtonAction,title,description }) => {
    const [showAlert, setShowAlert] = useState(false);

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
            <button
                onClick={() => setShowAlert(true)}
                className="rounded-lg bg-gradient-to-r from-red-500 to-red-600  hover:bg-gradient-to-l hover:from-red-500 hover:to-red-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
                {buttonName}
            </button>
            <Modal
                isOpen={showAlert}
                onRequestClose={() => setShowAlert(false)}
                style={customStyles}
            >
                <div>
                    <h1 className="text-2xl font-extrabold">{title}</h1>
                </div>
                <div>
                    <h1>{description}</h1>
                </div>
                <div className="flex items-center justify-center p-5 mx-auto w-full max-w-[550px]">
                    <div className="mr-1 w-1/2">
                        <button onClick={() => leftButtonAction(false)}
                            className="w-full rounded-lg bg-gradient-to-r from-green-500 to-green-600  hover:bg-gradient-to-l hover:from-green-500 hover:to-green-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Yes
                        </button>
                    </div>
                    <div className="ml-1 w-1/2">
                        <button onClick={() => setShowAlert(false)}
                            className="w-full rounded-lg bg-gradient-to-r from-amber-500 to-amber-600  hover:bg-gradient-to-l hover:from-amber-500 hover:to-amber-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Cancel
                        </button>
                    </div>

                </div>
            </Modal>
        </div>
    );
};
export default ConfirmAlertbox;
