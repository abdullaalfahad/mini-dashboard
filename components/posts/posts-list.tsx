"use client";

import { motion } from "framer-motion";
import { useFetch } from "@/hooks/use-fetch";
import PostCard from "./post-card";

export type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostsList() {
  const { data, error, loading } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading posts...</p>;
  if (error)
    return <p className="text-red-500">Failed to load posts: {error}</p>;

  return (
    <motion.div
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      initial="hidden"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {data?.slice(0, 20).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </motion.div>
  );
}
