import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="w-full m-1 h-12 text-white rounded-md bg-orange-500/85 focus:bg-orange-500 focus:shadow-sm focus:shadow-black/50 hover:bg-orange-500 hover:shadow-sm hover:shadow-black/50 disabled:bg-neutral-300 disabled:hover:shadow-none transition-all ease-in"
      {...props}
    >
      {children}
    </button>
  );
}
