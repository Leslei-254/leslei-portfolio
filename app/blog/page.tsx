import Link from "next/link";

const categories = [
  ["AI", "Things I’m learning and building around artificial intelligence, AI tools, agents, and practical AI development."],
  ["Development", "Lessons from building software, troubleshooting applications, APIs, databases, frameworks, and development tools."],
  ["Career", "My journey toward becoming a stronger software and AI engineer, including challenges, goals, and professional growth."],
  ["Learning", "Notes from courses, certifications, experiments, and things I discover while developing my skills."],
];

const topics = ["AI", "Software", "Troubleshooting", "Learning", "Career", "Projects"];

export default function BlogPage() {
  return <main className="min-h-screen overflow-hidden bg-[#030712] text-white selection:bg-violet-500/30">
    <section className="relative border-b border-white/[.07] bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,.14),transparent_30%),radial-gradient(circle_at_15%_60%,rgba(124,58,237,.1),transparent_28%),#030712]">
      <div className="absolute inset-0 opacity-15" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pb-24 sm:pt-20"><Link href="/" className="text-sm text-slate-500 transition hover:text-cyan-300">← Home</Link>
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_.65fr] lg:items-end">
          <div><p className="text-[10px] font-medium uppercase tracking-[.25em] text-violet-300">Blog</p><h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Thoughts, lessons &amp; <span className="bg-gradient-to-r from-cyan-200 to-violet-300 bg-clip-text text-transparent">things I&apos;m learning.</span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">I write about what I&apos;m building, what I&apos;m learning, problems I&apos;m solving, and lessons I pick up along the way.</p></div>
          <div className="rounded-2xl border border-cyan-300/15 bg-white/[.03] p-5 shadow-[0_25px_70px_rgba(37,99,235,.08)]"><p className="text-[9px] uppercase tracking-[.22em] text-cyan-300">Writing approach</p><div className="mt-4 flex items-center gap-2 text-xs text-slate-400"><span className="rounded-full border border-white/10 px-3 py-2">Build</span><span className="text-cyan-300">→</span><span className="rounded-full border border-white/10 px-3 py-2">Learn</span><span className="text-cyan-300">→</span><span className="rounded-full border border-white/10 px-3 py-2">Share</span></div></div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24"><div className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
      <div className="relative overflow-hidden rounded-3xl border border-violet-300/20 bg-[radial-gradient(circle_at_85%_20%,rgba(124,58,237,.25),transparent_35%),#07101d] p-8 sm:p-10"><div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"/><div className="relative"><div className="flex items-center justify-between"><span className="rounded-full border border-violet-300/20 bg-violet-500/[.08] px-3 py-1.5 text-[9px] uppercase tracking-[.2em] text-violet-200">Featured</span><span className="font-mono text-[9px] text-slate-600">001</span></div><h2 className="mt-8 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Learning in public. Building in public.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">The blog will document real projects, troubleshooting, AI learning, development lessons, and the journey toward becoming a stronger software and AI engineer.</p><div className="mt-8 flex flex-wrap gap-2">{["Projects","AI","Development"].map(x=><span key={x} className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-slate-500">{x}</span>)}</div><div className="mt-8 flex items-center gap-3 text-xs text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,.8)]"/>Articles are being added as they are ready.</div></div></div>
      <div className="rounded-3xl border border-white/10 bg-white/[.025] p-7 sm:p-8"><p className="text-[10px] uppercase tracking-[.22em] text-cyan-300">Topics</p><h2 className="mt-3 text-xl font-semibold">What I&apos;ll write about</h2><div className="mt-7 space-y-2">{topics.map((topic,i)=><div key={topic} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[.02] px-4 py-3"><span className="text-sm text-slate-400">{topic}</span><span className="font-mono text-[9px] text-slate-600">0{i+1}</span></div>)}</div></div>
    </div></section>

    <section className="border-y border-white/[.07] bg-[#050a14]"><div className="mx-auto max-w-6xl px-6 py-20 sm:py-24"><div className="max-w-2xl"><p className="text-[10px] uppercase tracking-[.25em] text-violet-300">Categories</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Notes from the journey.</h2></div><div className="mt-10 grid gap-4 md:grid-cols-2">{categories.map(([title,description],i)=><div key={title} className="group rounded-2xl border border-white/10 bg-white/[.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[.04]"><div className="flex items-start justify-between"><span className="text-3xl font-semibold text-white/10">0{i+1}</span><span className="text-violet-300 opacity-50 transition group-hover:opacity-100">↗</span></div><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{description}</p></div>)}</div></div></section>

    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24"><div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[.04] to-violet-500/[.05] p-8 sm:p-12"><div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[10px] uppercase tracking-[.25em] text-cyan-300">No filler</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Real articles, as I build.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">I&apos;m keeping this section honest: no invented posts or filler. Real articles will be added as I publish them.</p></div><Link href="/contact" className="w-fit rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold">Work with me →</Link></div></div></section>
  </main>;
}
