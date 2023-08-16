import Link from "next/link";

const InputField = ({ label, id, name, type, autocomplete,value,onChange,placeholder}) => {
  return (
    <div class="mb-5">
    <label
      for="fName"
      className="mb-3 block text-base font-medium text-[#07074D]"
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      autocomplete={autocomplete}
      value={value}
      onChange={onChange}
      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
    />
  </div>
  );
};

export default InputField;
