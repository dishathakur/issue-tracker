"use client";

interface buttonProps {
  text: string;
  onclick: () => void;
}
const Button = ({ text, onclick }: buttonProps) => {
  return (
    <button className="btn btn-soft" onClick={onclick}>
      {text}
    </button>
  );
};

export default Button;
