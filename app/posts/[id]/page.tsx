import Link from "next/link";
import PostDetails from "@/components/posts/post-details";

export default function PostDetailsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <Link className="text-blue-600 hover:underline text-sm" href="/posts">
        ← Back to Posts
      </Link>

      <PostDetails />
    </div>
  );
}
