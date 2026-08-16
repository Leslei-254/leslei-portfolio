import Link from "next/link";

const skills = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Prisma",
  "PostgreSQL",
  "AI tools",
];

const featuredWork = [
  {
    title: "Auth — Login & Protect",
    description:
      "A backend-focused authentication project exploring login flows, protected routes, and secure access to application resources.",
    href: "/work/auth-login-protect",
  },
  {
    title: "Ship an Automation Workflow v2",
    description:
      "An AI-assisted automation workflow built to turn a real process into a repeatable technical workflow.",
    href: "/work/automation-workflow",
  },
  {
    title: "Agent Concepts & MCP Basics",
    description:
      "Exploration of agent concepts and Model Context Protocol fundamentals, with a focus on understanding how AI systems connect to tools and context.",
    href: "/work/agent-mcp",
  },
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
            <Link href="/contact" className="hover:text-black">Contact</Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Backend AI Engineering · Software Engineering
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          I build AI-powered web applications and backend solutions that solve real-world problems.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
          I work with modern web technologies and AI tools to turn practical problems into useful software.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Contact Me
          </Link>
          <Link
            href="/work"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium hover:border-zinc-950"
          >
            View My Work
          </Link>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Selected Work</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Things I have built and explored.</h2>
            </div>
            <Link href="/work" className="hidden text-sm font-medium sm:block">
              View all work →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredWork.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-zinc-400"
              >
                <p className="text-sm text-zinc-500">Case study</p>
                <h3 className="mt-10 text-xl font-semibold tracking-tight group-hover:underline">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{project.description}</p>
                <p className="mt-6 text-sm font-medium">Read case →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Skills & Technologies</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">The tools I use to build.</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-zinc-300 px-4 py-2 text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Let&apos;s work together</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Looking for a software engineering, Backend AI Engineering, or freelance opportunity?</h2>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}
