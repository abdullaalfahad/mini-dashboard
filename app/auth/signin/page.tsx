"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { Card } from "@/components/common/card";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card
          className="bg-white shadow-lg rounded-xl border border-gray-200  "
          title=""
        >
          <div className="space-y-6 p-10">
            <h2 className="text-2xl font-extrabold text-gray-800 text-center">
              Welcome to MiniDashboard
            </h2>
            <p className="text-gray-600 text-center text-sm">
              Sign in with Google to access your dashboard
            </p>
            <button
              className="w-full flex items-center cursor-pointer justify-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors duration-200"
              onClick={() => signIn("google", { callbackUrl: "/profile" })}
              type="button"
            >
              <Mail className="h-5 w-5" />
              <span>Google Sign In</span>
            </button>
            <p className="text-gray-500 text-xs text-center">
              By signing in, you agree to our{" "}
              <p className="text-indigo-600 hover:underline">
                Terms of Service
              </p>{" "}
              and{" "}
              <p className="text-indigo-600 hover:underline">Privacy Policy</p>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
