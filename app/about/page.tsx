import Link from "next/link";

const certifications = [
  "AI Fluency: Framework & Foundations",
  "AI Capabilities and Limitations",
  "Claude 101",
  "Claude Code 101",
  "Introduction to Claude Cowork",
  "Claude Code in Action",
  "Building with the Claude API",
  "Introduction to Model Context Protocol",
  "Model Context Protocol: Advanced Topics",
  "Introduction to agent skills",
  "Introduction to subagents",
  "Claude with Amazon Bedrock",
  "Claude with Google Cloud's Vertex AI",
  "AI Fluency for students",
  "AI Fluency for Small Businesses",
  "AI Fluency for educators",
  "Teaching AI Fluency",
  "AI Fluency for nonprofits",
  "AI Fluency for Builders",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <article className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <Link href="/" className="text-sm text-zinc-500 hover:text-black">← Home</Link>

        <header className="mt-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">About Me</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">A builder becoming a stronger software and AI engineer.</h1>
          <p className="mt-6 text-xl leading-8 text-zinc-600">Right now, I would describe myself as a Backend AI Engineer with exposure across software development, AI, and web technologies. I know enough to build, and I&apos;m working toward becoming a strong software and AI engineer.</p>
        </header>

        <div className="mt-20 space-y-20">
          <section>
            <h2 className="text-2xl font-semibold">My Story</h2>
            <p className="mt-4 max-w-3xl leading-8 text-zinc-600">I&apos;m building my skills through practical projects, troubleshooting, certifications, and continuous learning. I enjoy turning ideas into working software and learning from the problems that come up along the way.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Career Journey</h2>
            <p className="mt-4 max-w-3xl leading-8 text-zinc-600">My focus is moving toward software and AI engineering through hands-on work. Projects such as LeadDesk Mini CRM, Polite Scraper, and Dokile AI reflect the different areas I&apos;m exploring and building in.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">What I Value</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["Commitment", "Keep showing up and keep building."],
                ["Persistence", "Work through problems instead of giving up."],
                ["Goals", "Keep learning toward becoming a stronger engineer."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-zinc-200 p-6"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p></div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div><h2 className="text-2xl font-semibold">Anthropic Certifications</h2><p className="mt-2 text-zinc-600">20 completed track-relevant certifications.</p></div>
              <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium">20 / 20 · 100%</span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {certifications.map((cert) => <div key={cert} className="rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-700">{cert}</div>)}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Other Learning</h2>
            <p className="mt-4 max-w-3xl leading-8 text-zinc-600">I&apos;m also continuing my learning through freeCodeCamp and other technical programs. My approach is to combine structured learning with projects where I have to actually build and troubleshoot.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">My Resume</h2>
            <p className="mt-4 max-w-3xl leading-8 text-zinc-600">My experience spans technical support, web development, AI-assisted workflows, digital operations, and content creation. I&apos;m continuing to build my skills as a software and AI engineer through hands-on projects and real-world problem solving.</p>
            <p className="mt-6 text-sm text-zinc-500">Resume PDF link will be connected once the final file is added to the portfolio.</p>
          </section>

          <section className="border-t border-zinc-200 pt-12">
            <h2 className="text-3xl font-semibold tracking-tight">I&apos;m building toward what comes next.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-zinc-600">I&apos;m always looking for opportunities to build, learn, and solve real problems.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Link href="/work" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white">View My Work</Link><Link href="/contact" className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium">Get In Touch</Link></div>
          </section>
        </div>
      </article>
    </main>
  );
}
