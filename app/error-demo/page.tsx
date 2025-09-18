"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/common/card";
import { useFetch } from "@/hooks/use-fetch";

type FakeData = { id: number; name: string };

export default function ErrorDemoPage() {
  const { data, error, loading } = useFetch<FakeData[]>(
    "https://jsonplaceholder.typicode.com/invalid-route"
  );

  return (
    <div className="flex items-center text-center justify-center min-h-[calc(100vh-4rem)] bg-gray-50 p-6">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
      >
        <Card title="Error Demo">
          {loading && <p>Loading...</p>}

          {error && (
            <div className="space-y-4">
              <p className="text-red-600 font-medium">Something went wrong!</p>
              <div className="flex justify-center gap-3">
                <Link
                  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                  href="/"
                >
                  Back Home
                </Link>
              </div>
            </div>
          )}

          {data && (
            <p className="text-green-600">
              ✅ Somehow data loaded: {JSON.stringify(data)}
            </p>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
