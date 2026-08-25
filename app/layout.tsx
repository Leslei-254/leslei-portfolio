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

const nav = [
  ["Work", "/work"],
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#030712] text-white">
        <header className="sticky top-0 z-50 border-b border-white/[.07] bg-[#030712]/85 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="group flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/20 bg-white/[.04] text-[10px] font-semibold text-cyan-200 transition group-hover:border-cyan-300/40">LM</span>
              <span className="text-sm font-semibold tracking-tight">Leslei Makori</span>
            </Link>
            <div className="hidden items-center gap-7 text-sm text-slate-500 sm:flex">
              {nav.map(([label, href]) => <Link key={href} href={href} className="transition hover:text-white">{label}</Link>)}
              <Link href="/contact" className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-300/30 hover:text-white">Let&apos;s Talk →</Link>
            </div>
            <Link href="/contact" className="rounded-full border border-white/10 px-3 py-2 text-xs text-slate-300 sm:hidden">Contact</Link>
          </nav>
        </header>
        {children}
        <footer className="border-t border-white/[.07] bg-[#02050c]">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div><Link href="/" className="text-lg font-semibold tracking-tight">Leslei Makori</Link><p className="mt-2 text-sm text-slate-600">Backend AI Engineer · Builder · Learner</p></div>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">{nav.map(([label, href]) => <Link key={href} href={href} className="transition hover:text-slate-300">{label}</Link>)}<a href="mailto:Lesleimakori@gmail.com" className="transition hover:text-cyan-300">Email</a><a href="https://github.com/Leslei-254" target="_blank" rel="noreferrer" className="transition hover:text-slate-300">GitHub ↗</a><a href="https://www.linkedin.com/in/leslei-makori-8989681b4/" target="_blank" rel="noreferrer" className="transition hover:text-slate-300">LinkedIn ↗</a></div>
            </div>
            <div className="mt-10 flex flex-col gap-2 border-t border-white/[.06] pt-5 text-[10px] text-slate-700 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Leslei Makori</span><span>Built while learning, building, and shipping.</span></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
