import React from "react";
import './styles.css'
import "@fontsource/inter"; 

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  padding: string;
  fontSize : string;
}

const Button: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  padding,
  fontSize,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
        padding,
        fontSize,
      }}
      className="button-main"
    >
      {children}
    </button>
  );
};

export default Button;
