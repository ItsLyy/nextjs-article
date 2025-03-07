import React from "react";

export default function CardSkeleton() {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="relative h-48 w-full rounded-md overflow-hidden bg-zinc-400"></div>
      <div className="p-1 flex flex-col grow">
        <header className="grow h-full space-y-1">
          <h1 className="text-lg bg-zinc-400 py-1 rounded-full"></h1>
          <p className="text-sm text-zinc-500 line-clamp-2 bg-zinc-400 py-1 rounded-full"></p>
        </header>

        <div className="flex justify-between mt-4 items-center">
          <div className="flex gap-4 items-center">
            <div className="relative size-10 overflow-hidden rounded-full bg-zinc-400"></div>
            <span className="rounded-full bg-zinc-400 py-1"></span>
          </div>
          <span className="rounded-full text-sm text-zinc-500 py-1 px-8 bg-zinc-400"></span>
        </div>
      </div>
    </div>
  );
}
