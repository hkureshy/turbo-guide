import React from "react";
const Button: React.FC<any> = ({
  type,
  onClick,
  disabled,
  loading,
  label,
  ref,
  variant,
  btnStyle,
  icon,
}) => {
  let buttonClass =
    "flex items-center gap-x-2  py-1.5 justify-center rounded-md  text-sm  leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ";
  if (variant === "primary") {
    buttonClass += `  ${disabled ? "bg-gray-300" : "border-primary bg-[#1C3E6E] hover:bg-/90"
      }  px-2 font-semibold lg:px-8 text-white `;
  } else if (variant === "secondary") {
    buttonClass += "";
  } else if (variant === "outline") {
    buttonClass += `border border-[#FA9D26] hover:bg-[#FA9D26] text-[#FA9D26] hover:text-white px-2 lg:px-8 font-semibold`
  }
  if (btnStyle) {
    buttonClass += ` ${btnStyle}`;
  }
  return (
    <button
      disabled={disabled}
      ref={ref}
      type={type}
      className={buttonClass}
      onClick={onClick}
    >
      {loading ? "Loading..." : label}
      {loading ? null : icon}
    </button>
  );
};
export default Button;
