import { prisma } from "@/app/utils/db";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await getData(id);
  return (
    <div className="mx-auto max-w-3xl pb-52">
      <Link
        href="/"
        className="text-sm flex gap-2 w-fit items-center py-3 pl-3 pr-6 bg-zinc-300 rounded-md"
      >
        <ChevronLeftIcon className="size-5" /> Go Back
      </Link>

      <div className="p-2 mt-8">
        <h1 className="text-3xl font-semibold tracking-tight">{data?.title}</h1>
        <div className="flex justify-between mt-4 items-center">
          <div className="flex gap-4 items-center">
            <div className="relative size-10 overflow-hidden rounded-full">
              <Image
                src={data?.authorImage}
                sizes="full"
                fill
                alt={data?.authorName}
                className="size-full object-center object-cover"
              />
            </div>
            <span>{data?.authorName}</span>
          </div>
          <span className="text-sm text-zinc-500">
            {new Intl.DateTimeFormat("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(data?.createdAt)}
          </span>
        </div>
        <div className="relative rounded-xl my-4 w-full h-[30rem] overflow-hidden ">
          <Image
            sizes="full"
            src={data?.imageUrl}
            alt={data?.title}
            fill
            priority
            className="size-full object-center object-cover"
          />
        </div>
        <p className="text-zinc-600">{data?.content}</p>
      </div>
    </div>
  );
}
