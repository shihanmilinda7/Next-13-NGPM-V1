const Toast = ({ description, style, setShowAlert }) => {


    return (
        <div>
            <button onClick={() => setShowAlert(false)}
                type="button"
                className={"flex justify-center w-full h-1/7 top-50 left-50 z-50 rounded-md px-4 py-2 text-white transition " + style}>
                <div className="flex items-center space-x-2">
                    <p className="font-bold">{description}</p>
                </div>
            </button>
        </div>
    );
};

export default Toast;