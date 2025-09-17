import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/common/card";
import type { Post } from "./posts-list";

export default function PostCard({ post }: { post: Post }) {
  return (
    <motion.div
      key={post.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Link href={`/posts/${post.id}`}>
        <Card
          className="cursor-pointer hover:shadow-lg"
          title={
            post.title.slice(0, 30) + (post.title.length > 30 ? "..." : "")
          }
        >
          <p className="text-sm text-gray-600 line-clamp-3">{post.body}</p>
        </Card>
      </Link>
    </motion.div>
  );
}
