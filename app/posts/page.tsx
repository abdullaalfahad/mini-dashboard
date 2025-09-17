import PostsList from "@/components/posts/posts-list";

export default function PostsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold">Posts</h1>

      <PostsList />
    </div>
  );
}
