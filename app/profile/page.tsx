"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Card } from "@/components/common/card";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p className="p-6">Loading...</p>;
  if (!session)
    return (
      <div className="p-6">
        <p className="text-red-500 mb-4">
          You must be logged in to view this page.
        </p>
        <Link className="text-blue-600 hover:underline" href="/">
          ← Go back home
        </Link>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Card title="Profile">
        <p>
          <b>Name:</b> {session.user?.name}
        </p>
        <p>
          <b>Email:</b> {session.user?.email}
        </p>
        {session.user?.image && (
          <Image
            alt="User profile"
            className="w-16 h-16 rounded-full mt-4"
            height={64}
            src={session.user.image}
            width={64}
          />
        )}
      </Card>
    </div>
  );
}
