import { useState } from "react";

const Dropdown = ({
  options,
  label,
  id,
  placeholder,
  placeholderColor,
  selectedLabel,
  onChange,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedOption: any) => {
    onChange({ label: selectedOption.label, value: selectedOption.value });
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6"
      >
        {label}
      </label>
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm p-2 flex items-center justify-between"
        >
          <span className={`text-sm ${placeholderColor}`}>
            {selectedLabel ? selectedLabel : placeholder}
          </span>
          <svg
            className={`w-5 h-5 ml-2 ${isOpen ? "transform rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="origin-top-right z-20 max-h-32 overflow-auto absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              {options.map((option: any) => (
                <div
                  key={option.value}
                  className="cursor-pointer block px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => {
                    handleSelect(option);
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
