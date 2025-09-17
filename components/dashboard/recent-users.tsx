import { Card } from "@/components/common/card";
import { recentUsers } from "./data";

export default function RecentUsers() {
  return (
    <Card title="Recent Users">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map((user) => (
              <tr
                className="border-b last:border-0 hover:bg-gray-50"
                key={user.id}
              >
                <td className="py-2">{user.name}</td>
                <td className="py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
