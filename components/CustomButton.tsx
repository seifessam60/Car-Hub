"use client";
import { customButtonProps } from "@/types";

function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType
}: customButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType||"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span>{title}</span>
    </button>
  );
}

export default CustomButton;
