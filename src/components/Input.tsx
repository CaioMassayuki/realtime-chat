import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <label
      className={clsx("flex flex-col w-full text-sm", {
        "text-red-500": error,
      })}
    >
      <p>{label}</p>
      <input
        className={clsx(
          "border border-neutral-300 h-12 px-2 rounded-md hover:border-neutral-400 focus:outline-orange-400",
          { "border-red-500 hover:border-red-500 focus:outline-red-500": error }
        )}
        {...props}
      />
    </label>
  );
}
