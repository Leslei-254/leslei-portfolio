import Link from "next/link";

const projects = [
  {
    number: "01",
    status: "Ready to use",
    title: "LeadDesk Mini CRM",
    description: "A clean CRM for businesses to view, track, and manage customer form submissions.",
    href: "/work/leaddesk",
    tech: ["Next.js", "JavaScript", "Prisma", "Neon", "Vercel"],
  },
  {
    number: "02",
    status: "Completed",
    title: "Polite Scraper",
    description: "A production-minded Node.js web scraper for collecting structured book data from Books to Scrape.",
    href: "/work/polite-scraper",
    tech: ["Node.js", "Cheerio", "Axios", "Schema validation"],
  },
  {
    number: "03",
    status: "In development",
    title: "Dokile AI",
    description: "An AI productivity and creativity platform bringing AI tools, content creation, digital services, software development, domains, and hosting together in one place.",
    href: "/work/dokile-ai",
    tech: ["JavaScript", "TypeScript", "AI"],
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Link href="/" className="text-sm text-zinc-500 hover:text-black">← Home</Link>
        <p className="mt-12 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Selected Work</p>
        <h1 className="mt-3 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">Things I&apos;ve built and I&apos;m building.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">A selection of projects I&apos;ve built while developing my skills in software development, AI, and web technologies.</p>

        <div className="mt-14 space-y-6">
          {projects.map((project) => (
            <Link key={project.href} href={project.href} className="group block rounded-3xl border border-zinc-200 p-7 transition hover:-translate-y-0.5 hover:border-zinc-400 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm text-zinc-500">{project.number}</span>
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">{project.status}</span>
              </div>
              <h2 className="mt-8 text-3xl font-semibold tracking-tight group-hover:underline">{project.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => <span key={tech} className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">{tech}</span>)}
              </div>
              <p className="mt-8 text-sm font-medium">View case study →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
