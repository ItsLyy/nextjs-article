import React from "react";

export default function InputText({
  label,
  type = "text",
  placeholder,
  id,
  className = "",
  name=""
}: {
  label: string;
  type?: string;
  placeholder?: string;
  id: string;
  className?: string;
  name: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        className={`border-[1px] text-sm border-zinc-300 rounded-md py-2 px-3 outline-0 focus:ring-2 focus:ring-zinc-200 ${className}`}
      />
    </div>
  );
}
