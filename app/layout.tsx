import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leslei Makori | Backend AI Engineer",
  description: "Portfolio of Leslei Makori — Backend AI Engineer building AI-powered web applications and backend solutions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-zinc-950">
        <header className="border-b border-zinc-200 bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <Link href="/" className="font-semibold tracking-tight">Leslei Makori</Link>
            <div className="flex items-center gap-5 text-sm text-zinc-700">
              <Link href="/work" className="hover:text-black">Work</Link>
              <Link href="/about" className="hover:text-black">About</Link>
              <Link href="/blog" className="hover:text-black">Blog</Link>
              <Link href="/contact" className="hover:text-black">Contact</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
