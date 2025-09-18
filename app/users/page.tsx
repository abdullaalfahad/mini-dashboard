"use client";

import UsersTable from "@/components/users/users-table";

export default function UsersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Users</h1>

      <div className="overflow-x-auto">
        <UsersTable />
      </div>
    </div>
  );
}
