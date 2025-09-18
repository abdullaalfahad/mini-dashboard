"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Card } from "@/components/common/card";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading")
    return <p className="max-w-6xl mx-auto px-4 py-8">Loading...</p>;
  if (!session)
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 ">
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
      </Card>
    </div>
  );
}
