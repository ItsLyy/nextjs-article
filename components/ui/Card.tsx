import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({
  id,
  title,
  imageUrl,
  content,
  authorImage,
  authorName,
  createdAt,
}: {
  id: string;
  title: string;
  imageUrl: string;
  content: string;
  authorImage: string;
  authorName: string;
  createdAt: Date;
}) {
  return (
    <Link prefetch={false} href={`/blogs/${id}`} className="flex flex-col">
      <div className="relative h-48 w-full rounded-md overflow-hidden">
        <Image
          sizes="full"
          src={imageUrl}
          alt={title}
          fill
          className="size-full object-cover object-center hover:scale-105 transition-all ease-in-out duration-300"
        />
      </div>
      <div className="p-1 flex flex-col grow">
        <header className="grow h-full">
          <h1 className="text-lg">{title}</h1>
          <p className="text-sm text-zinc-500 line-clamp-2">{content}</p>
        </header>

        <div className="flex justify-between mt-4 items-center">
          <div className="flex gap-4 items-center">
            <div className="relative size-10 overflow-hidden rounded-full">
              <Image
                sizes="full"
                src={authorImage}
                fill
                alt={authorName}
                className="size-full object-center object-cover"
              />
            </div>
            <span>{authorName}</span>
          </div>
          <span className="text-sm text-zinc-500">
            {new Intl.DateTimeFormat("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(createdAt)}
          </span>
        </div>
      </div>
    </Link>
  );
}
