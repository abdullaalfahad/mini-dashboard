import { Card } from "../common/card";
import { recentPosts } from "./data";

export default function RecentPosts() {
  return (
    <Card title="Recent Posts">
      <div className="space-y-3">
        {recentPosts.map((post) => (
          <div
            className="p-3 rounded-lg border hover:bg-gray-50 transition"
            key={post.id}
          >
            <p className="font-semibold">{post.title}</p>
            <p className="text-sm text-gray-500">by {post.author}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
