"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/error-demo", label: "Error Demo" },
  { href: "/profile", label: "Profile", requiresAuth: true },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-gray-200 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link
          className="font-extrabold text-2xl text-indigo-800 hover:text-indigo-900 transition-colors duration-200"
          href="/"
        >
          MiniDashboard
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links
            .filter(
              (link) => !link.requiresAuth || (link.requiresAuth && session)
            )
            .map((link) => {
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
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              );
            })}
          {session ? (
            <button
              className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-200"
              onClick={() => signOut({ callbackUrl: "/" })}
              type="button"
            >
              Logout
            </button>
          ) : (
            <button
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors duration-200"
              onClick={() => signIn("google", { callbackUrl: "/profile" })}
              type="button"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-indigo-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-t border-gray-200"
          exit={{ opacity: 0, height: 0 }}
          initial={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
            {links
              .filter(
                (link) => !link.requiresAuth || (link.requiresAuth && session)
              )
              .map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    className={cn(
                      "text-sm font-semibold transition-colors duration-200",
                      isActive
                        ? "text-indigo-700"
                        : "text-gray-700 hover:text-indigo-600"
                    )}
                    href={link.href}
                    key={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            {session ? (
              <button
                className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-200 text-left"
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                  setIsMobileMenuOpen(false);
                }}
                type="button"
              >
                Logout
              </button>
            ) : (
              <button
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors duration-200 text-left"
                onClick={() => {
                  signIn("google", { callbackUrl: "/profile" });
                  setIsMobileMenuOpen(false);
                }}
                type="button"
              >
                Login
              </button>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
