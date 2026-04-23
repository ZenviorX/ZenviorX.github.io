import "./globals.css";
import type { ReactNode } from "react";
import SiteHeader from "./components/SiteHeader";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_45%,#e9eef5_100%)] text-zinc-800">
          <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute left-[-100px] top-[-80px] h-[260px] w-[260px] rounded-full bg-sky-200/40 blur-3xl" />
            <div className="absolute right-[-60px] top-[120px] h-[240px] w-[240px] rounded-full bg-indigo-100/50 blur-3xl" />
            <div className="absolute bottom-[-100px] left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-cyan-100/40 blur-3xl" />
          </div>

          <section className="mx-auto max-w-6xl px-5 pb-16 pt-6 md:px-8">
            <SiteHeader />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}