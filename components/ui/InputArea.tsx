import React from "react";

export default function InputArea({
  label,
  id,
  placeholder,
  className = "",
  name,
}: {
  label: string;
  id: string;
  placeholder?: string;
  name: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        className={`border-[1px] min-h-52 text-sm border-zinc-300 rounded-md py-2 px-3 outline-0 focus:ring-2 focus:ring-zinc-200 resize-y ${className}`}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
