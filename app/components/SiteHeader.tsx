"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/",
    label: "首页",
    match: (pathname: string) => pathname === "/",
  },
  {
    href: "/walkway",
    label: "光影栈道",
    match: (pathname: string) => pathname.startsWith("/walkway"),
  },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-20 mb-10">
      <div className="glass-panel-light glass-panel-strong flex items-center justify-between rounded-2xl px-5 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-zinc-900"
        >
          ZenviorX
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = item.match(pathname);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-xl px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-sky-700"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                <span className="relative z-10">{item.label}</span>

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-sky-700"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 32,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}