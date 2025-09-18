import { Card } from "../common/card";
import { recentPosts } from "./data";

export default function RecentPosts() {
  return (
    <Card
      className="bg-white shadow-lg rounded-xl border border-gray-200 p-6"
      title="Recent Posts"
    >
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <div
            className="p-4 rounded-lg border border-gray-200 hover:bg-indigo-50 transition-colors duration-200 hover:shadow-md"
            key={post.id}
          >
            <p className="font-semibold text-gray-800 text-base">
              {post.title}
            </p>
            <p className="text-sm text-gray-600 mt-1">by {post.author}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
