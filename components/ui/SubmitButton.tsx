"use client";

import React from "react";
import PrimaryButton from "./PrimaryButton";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  children,
  loadingText = "Submitting...",
}: {
  children: React.ReactNode;
  loadingText?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <PrimaryButton disabled={pending}>
      {pending ? loadingText : children}
    </PrimaryButton>
  );
}
