"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/error-demo", label: "Error Demo" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link
          className="font-extrabold text-xl text-indigo-700 hover:text-indigo-900 transition-colors duration-200"
          href="/"
        >
          MiniDashboard
        </Link>

        <div className="flex space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div className="relative flex items-center" key={link.href}>
                <Link
                  className={cn(
                    "text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "text-indigo-700"
                      : "text-gray-700 hover:text-indigo-600"
                  )}
                  href={link.href}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.div
                    className="absolute left-0 right-0 -bottom-2 h-1 bg-indigo-600 rounded-full"
                    layoutId="navbar-underline"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
