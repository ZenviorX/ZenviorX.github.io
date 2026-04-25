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
        <div className="site-bg">
          <div className="site-bg-image" />
          <div className="site-bg-overlay" />
        </div>

        <main className="relative z-10 min-h-screen text-zinc-800">
          <section className="mx-auto max-w-6xl px-5 pb-16 pt-6 md:px-8">
            <SiteHeader />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}