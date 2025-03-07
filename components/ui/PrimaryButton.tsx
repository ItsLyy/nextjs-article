import Link from "next/link";
import React from "react";

const PrimaryButton = ({
  children,
  disabled = false,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <button
      className="bg-black text-white text-sm rounded-md py-2 px-4 cursor-pointer disabled:cursor-progress disabled:opacity-60"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const PrimaryLink = ({
  href = "/",
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="bg-black text-white text-sm inline-block rounded-md py-2 px-4 cursor-pointer"
    >
      {children}
    </Link>
  );
};

PrimaryButton.Link = PrimaryLink;

export default PrimaryButton;
