const SaveAlert = ({description , setShowAlert}) => {
   

    return (
        <div
        className="mb-4 rounded-lg bg-green-500 px-6 py-5 text-base text-red-100 absolute bottom-10 right-50"
        role="alert"
      >
        {description}
        <button
          className="bg-green-500 mr-auto"
          onClick={() => setShowAlert(false)}
        >
          x
        </button>
      </div>
    );
  };
  
  export default SaveAlert;