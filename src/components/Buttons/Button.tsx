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
  const baseStyle = "button";
  const variantStyle = `button-${variant}`;

  const activeStyle = isActive ? variantStyle : "button-disabled";

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
