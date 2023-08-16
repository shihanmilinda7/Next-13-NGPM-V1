const Card = ({ cardTitle, description, style }) => {
  const mainStyles = "shadow-md rounded-lg overflow-hidden h-96 " + style
  return (
    <div className={mainStyles}>
      <div className="p-4">
        <h2 className="text-3xl font-semibold mb-2 text-white">{cardTitle}</h2>
        <div >
          <h3 className="text-xl font-semibold mb-2 text-white">
            {description}

          </h3>
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
  //src="https://via.placeholder.com/300"