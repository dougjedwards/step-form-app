import React, { ReactNode } from "react";

const Button: React.FC<{
  disabled?: boolean;
  text?: string;
  onClick: () => void;
  children?: ReactNode;
  style?: React.CSSProperties;
}> = ({ disabled, text, children, onClick, style }) => {
  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {text ?? children}
    </button>
  );
};

export default Button;
