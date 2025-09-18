import { Card } from "@/components/common/card";
import { recentUsers } from "./data";

export default function RecentUsers() {
  return (
    <Card
      className="bg-white shadow-lg rounded-xl border border-gray-200 p-6"
      title="Recent Users"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold border-b border-gray-200">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map((user, index) => (
              <tr
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-indigo-50 transition-colors duration-200 border-b border-gray-200 last:border-0`}
                key={user.id}
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  {user.name}
                </td>
                <td className="px-6 py-4">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
