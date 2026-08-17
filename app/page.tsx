import Link from "next/link";

const projects = [
  {
    number: "01",
    status: "Ready to use",
    title: "LeadDesk Mini CRM",
    description:
      "A clean CRM for businesses to view, track, and manage customer form submissions.",
    href: "/work/leaddesk",
    tech: ["Next.js", "JavaScript", "Prisma", "Neon", "Vercel"],
  },
  {
    number: "02",
    status: "Completed",
    title: "Polite Scraper",
    description:
      "A production-minded Node.js scraper for collecting structured book data from Books to Scrape.",
    href: "/work/polite-scraper",
    tech: ["Node.js", "Cheerio", "Axios", "Schema Validation"],
  },
  {
    number: "03",
    status: "In development",
    title: "Dokile AI",
    description:
      "An AI productivity and creativity platform bringing AI tools, content creation, digital services, software development, domains, and hosting together in one place.",
    href: "/work/dokile-ai",
    tech: ["JavaScript", "TypeScript", "AI"],
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Prisma",
  "Neon",
  "AI tools",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <header className="border-b border-zinc-200">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-semibold tracking-tight">
            Leslei Makori
          </Link>
          <div className="flex items-center gap-6 text-sm text-zinc-700">
            <Link href="/work" className="hover:text-black">Work</Link>
            <Link href="/about" className="hover:text-black">About</Link>
            <Link href="/blog" className="hover:text-black">Blog</Link>
            <Link href="/contact" className="hover:text-black">Contact</Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          AI · Software · Web Development
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          I build practical AI-powered software and digital products.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
          I&apos;m a Backend AI Engineer with exposure across software development, AI, and web technologies. I know enough to build, and I keep developing my skills through real projects and hands-on problem solving.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/work" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800">
            View My Work
          </Link>
          <Link href="/about" className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium hover:border-zinc-950">
            About Me
          </Link>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Featured Work</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Things I&apos;ve built and I&apos;m building.</h2>
            </div>
            <Link href="/work" className="hidden text-sm font-medium sm:block">View all work →</Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.href} href={project.href} className="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-zinc-400">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-zinc-500">{project.number}</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{project.status}</p>
                </div>
                <h3 className="mt-10 text-xl font-semibold tracking-tight group-hover:underline">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600">{tech}</span>
                  ))}
                </div>
                <p className="mt-6 text-sm font-medium">View case study →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">What I Build</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Building, troubleshooting, and improving.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-xl font-semibold">AI Solutions</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">I build practical AI-powered tools and experiences.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-xl font-semibold">Web & Software</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">I build functional web applications and software products.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-xl font-semibold">Problem Solving</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">I use AI as a build partner and troubleshoot problems until the pieces work together.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Technologies</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">The tools I use to build.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Have a project or idea?</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Let&apos;s build, learn, and solve real problems.</h2>
          </div>
          <Link href="/contact" className="shrink-0 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800">Get In Touch</Link>
        </div>
      </section>
    </main>
  );
}
