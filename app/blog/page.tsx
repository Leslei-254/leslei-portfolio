import Link from "next/link";

const categories = [
  ["AI", "Things I’m learning and building around artificial intelligence, AI tools, agents, and practical AI development."],
  ["Development", "Lessons from building software, troubleshooting applications, APIs, databases, frameworks, and development tools."],
  ["Career", "My journey toward becoming a stronger software and AI engineer, including challenges, goals, and professional growth."],
  ["Learning", "Notes from courses, certifications, experiments, and things I discover while developing my skills."],
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <article className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <Link href="/" className="text-sm text-zinc-500 hover:text-black">← Home</Link>
        <header className="mt-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Blog</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">Thoughts, lessons & things I&apos;m learning.</h1>
          <p className="mt-6 text-xl leading-8 text-zinc-600">I write about what I&apos;m building, what I&apos;m learning, problems I&apos;m solving, and lessons I pick up along the way.</p>
        </header>

        <section className="mt-20">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Featured</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Learning in public. Building in public.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-600">The blog will document real projects, troubleshooting, AI learning, development lessons, and the journey toward becoming a stronger software and AI engineer.</p>
            <p className="mt-5 text-sm text-zinc-500">Articles are being added as they are ready.</p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Categories</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {categories.map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-zinc-200 p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-zinc-200 pt-12">
          <h2 className="text-3xl font-semibold tracking-tight">More articles coming as I build.</h2>
          <p className="mt-3 max-w-2xl leading-7 text-zinc-600">I&apos;m keeping this section honest: no invented posts or filler. Real articles will be added as I publish them.</p>
        </section>
      </article>
    </main>
  );
}
