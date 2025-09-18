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
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <Link className="font-bold text-lg" href="/">
          MiniDashboard
        </Link>

        <div className="flex space-x-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div className="relative" key={link.href}>
                <Link
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-600",
                    isActive ? "text-blue-600" : "text-gray-600"
                  )}
                  href={link.href}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.div
                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-600 rounded"
                    layoutId="navbar-underline"
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
