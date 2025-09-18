import { useState } from "react";
import { useFetch } from "@/hooks/use-fetch";
import UserDetailsModal from "./user-details-modal";

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: { city: string; street: string };
};

export default function UsersTable() {
  const { data, error, loading } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) return <p className="text-gray-600">Loading users...</p>;
  if (error)
    return <p className="p-6 text-red-500">Failed to load users: {error}</p>;

  return (
    <>
      <table className="w-full text-sm text-left text-gray-700 border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Company</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user, index) => (
            <tr
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-blue-50 transition-colors duration-200 cursor-pointer border-b border-gray-200`}
              key={user.id}
              onClick={() => setSelectedUser(user)}
            >
              <td className="px-6 py-4 font-medium text-gray-800">
                {user.name}
              </td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <UserDetailsModal
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    </>
  );
}
