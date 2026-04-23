"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/walkway", label: "光影栈道" },
  { href: "/#featured", label: "首页内容" },
  { href: "/#contact", label: "联系" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-20 mb-10">
      <div className="glass-panel-light flex items-center justify-between rounded-2xl px-5 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide text-zinc-900">
          ZenviorX
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href === "/walkway"
                ? pathname === "/walkway"
                : false;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-zinc-900 ${
                  isActive ? "text-sky-700" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}