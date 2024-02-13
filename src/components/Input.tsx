import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <label className="flex flex-col w-full m-1 text-sm">
      <p>{label}</p>
      <input
        className="border border-neutral-300 h-12 px-2 rounded-md hover:border-neutral-400 focus:outline-orange-400"
        {...props}
      />
    </label>
  );
}
