import { ReactNode } from "react";

type ButtonType = JSX.IntrinsicElements["button"]["type"];

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  variant: ButtonVariant;
  type?: ButtonType;
  customStyles?: string;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onBlur?: () => void;
  // 버튼 내용물
  prefix?: ReactNode;
  children?: ReactNode;
  appendix?: ReactNode;
}

export default function Button({
  variant,
  type = "submit",
  customStyles,
  isActive = true,
  disabled = false,
  onClick,
  onBlur,
  prefix,
  children,
  appendix,
}: ButtonProps) {
  const baseStyle = `flex justify-center items-center`;
  const variantStyles = {
    primary: "bg-violet text-white",
    secondary: "bg-white border border-gray_D9D9D9",
    ghost: "bg-invisible border border-gray_D9D9D9",
  };
  const activeStyle = isActive
    ? `${variantStyles[variant]}`
    : "text-white bg-gray_9FA6B2 cursor-not-allowed";

  return (
    <button
      type={type}
      className={`${baseStyle} ${activeStyle} ${customStyles}`}
      disabled={disabled}
      onClick={onClick}
      onBlur={onBlur}
    >
      {prefix}
      {children}
      {appendix}
    </button>
  );
}
