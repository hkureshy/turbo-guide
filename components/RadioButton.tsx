import React from "react";

interface RadioButtonsProps {
  selectedOption: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: { value: string; label: string }[];
  label: string;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
  selectedOption,
  onChange,
  label,
  options,
}) => {
  return (
    <>
      <label className="font-bold text-primary text-sm">{label}</label>
      <div className="flex items-center space-x-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center cursor-pointer"
          >
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={onChange}
              className="hidden"
            />
            <div
              className={`flex items-center justify-center h-6 w-6  ${selectedOption === option.value ? "bg-primary" : "bg-gray-400"
                } rounded-full relative`}
            >
              <div className="absolute h-5 w-5 bg-white rounded-full"></div>
              <div
                className={`absolute h-3 w-3 ${selectedOption === option.value ? "bg-primary" : "bg-white"
                  }  rounded-full`}
              ></div>
            </div>
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default RadioButtons;
