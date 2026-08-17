import Link from "next/link";

export default function DokileAICaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <article className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        <Link href="/work" className="text-sm text-zinc-500 hover:text-black">← Back to work</Link>
        <p className="mt-12 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">03 · In development</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">Dokile AI</h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-600">An AI productivity and creativity platform bringing AI tools, content creation, digital services, software development, domains, and hosting together in one place.</p>
        <div className="mt-6 flex flex-wrap gap-2">{["JavaScript", "TypeScript", "AI"].map((x) => <span key={x} className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">{x}</span>)}</div>
        <div className="mt-16 space-y-14">
          <section><h2 className="text-2xl font-semibold">The Idea</h2><p className="mt-4 leading-8 text-zinc-600">I wanted to bring different digital services and solutions together in one place instead of having them separated across different platforms.</p></section>
          <section><h2 className="text-2xl font-semibold">What I&apos;m Building</h2><p className="mt-4 leading-8 text-zinc-600">The platform brings together AI interaction, AI-assisted content creation, blogs and articles, website services, software development services, domain services, and hosting.</p></section>
          <section><h2 className="text-2xl font-semibold">What I&apos;ve Built</h2><p className="mt-4 leading-8 text-zinc-600">I&apos;ve been building the platform and connecting its different pages and services together. The project currently includes the foundations for the different areas of the platform, while development continues.</p></section>
          <section><h2 className="text-2xl font-semibold">My Role</h2><p className="mt-4 leading-8 text-zinc-600">I&apos;m building and developing Dokile AI, working across the website, its pages, features, and integrations.</p></section>
          <section><h2 className="text-2xl font-semibold">The Challenge</h2><p className="mt-4 leading-8 text-zinc-600">Troubleshooting the pages and linking them together was one of the hardest parts of the project. I had to work through problems with different pages and make sure the different parts of the website connected correctly.</p></section>
          <section><h2 className="text-2xl font-semibold">What I Learned</h2><p className="mt-4 leading-8 text-zinc-600">This project taught me that building a larger product takes time, patience, and commitment. I&apos;ve learned to keep working through problems, troubleshoot what isn&apos;t working, and continue improving the project instead of expecting everything to work immediately.</p></section>
          <section><h2 className="text-2xl font-semibold">Current Status</h2><p className="mt-4 leading-8 text-zinc-600">Dokile AI is not finished yet. I&apos;m continuing to develop the platform, improve the pages, connect the different parts, and work toward the larger product vision.</p></section>
          <section><h2 className="text-2xl font-semibold">What I&apos;m Working Toward</h2><p className="mt-4 leading-8 text-zinc-600">My goal is to turn Dokile AI into a useful platform where people can interact with AI, create content, access software and web development services, buy domains, and get hosting.</p></section>
          <section><h2 className="text-2xl font-semibold">Links</h2><div className="mt-6 flex flex-wrap gap-3"><a href="https://dokile.dokilewayne.workers.dev/" target="_blank" rel="noreferrer" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white">Visit Dokile AI →</a><a href="https://github.com/Leslei-254/dokile" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium">View GitHub →</a></div></section>
        </div>
      </article>
    </main>
  );
}
