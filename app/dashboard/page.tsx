import PrimaryButton from "@/components/ui/PrimaryButton";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../utils/db";
import Card from "@/components/ui/Card";
import { Suspense } from "react";
import CardLoading from "@/components/general/CardLoading";

async function getData(userId: string) {
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default function Dashboard() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium"> Your Blog Articles</h2>

        <PrimaryButton.Link href="/dashboard/create">
          Create Post
        </PrimaryButton.Link>
      </div>

      <Suspense fallback={<CardLoading />}>
        <BlogPost />
      </Suspense>
    </div>
  );
}

async function BlogPost() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user?.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
