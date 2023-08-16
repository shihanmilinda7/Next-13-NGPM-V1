import Link from "next/link";

const InputField = ({ label, id, name, type, autocomplete,value,onChange}) => {
  return (
    <div>
      <label
        for={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2 w-full">
        <input
          id={id}
          name={name}
          type={type}
          autocomplete={autocomplete}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputField;
