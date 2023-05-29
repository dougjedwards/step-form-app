import React, { ReactNode } from "react";

const Button: React.FC<{
  disabled?: boolean;
  text?: string;
  onClick: () => void;
  children?: ReactNode;
}> = ({ disabled, text, children, onClick }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text ?? children}
    </button>
  );
};

export default Button;
