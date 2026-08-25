import Link from "next/link";

const stack = ["Node.js", "Cheerio", "Axios", "Schema validation", "GitHub Actions"];
const flow = ["Resolve catalogue URL", "Fetch HTML", "Parse book data", "Normalize records", "Validate schema", "Save JSON"];

export default function PoliteScraperCaseStudy() {
  return <main className="min-h-screen overflow-hidden bg-[#030712] text-white selection:bg-violet-500/30">
    <section className="relative border-b border-white/[.07] bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,.16),transparent_30%),radial-gradient(circle_at_15%_60%,rgba(124,58,237,.12),transparent_28%),#030712]">
      <div className="absolute inset-0 opacity-15" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",backgroundSize:"48px 48px"}} />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pb-24 sm:pt-20">
        <Link href="/work" className="text-sm text-slate-500 transition hover:text-cyan-300">← Back to work</Link>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_.85fr] lg:items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[.25em] text-blue-300">02 · Completed</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Polite<br/><span className="text-slate-500">Scraper.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">A production-minded Node.js web scraper for collecting structured book data from Books to Scrape.</p>
            <div className="mt-7 flex flex-wrap gap-2">{stack.map(x=><span key={x} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-[10px] text-slate-400">{x}</span>)}</div>
            <a href="https://github.com/Leslei-254/polite-scraper" target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950">View GitHub Repository ↗</a>
          </div>
          <div className="relative h-80 overflow-hidden rounded-3xl border border-blue-300/15 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,.18),transparent_40%),#07101c] p-6">
            <div className="absolute inset-0 opacity-20" style={{backgroundImage:"linear-gradient(rgba(56,189,248,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.16) 1px,transparent 1px)",backgroundSize:"30px 30px"}} />
            <div className="relative flex h-full items-center justify-center gap-2">
              <div className="w-[27%] rounded-xl border border-white/10 bg-white/[.04] p-3"><p className="text-[7px] text-cyan-200">CATALOGUE</p><div className="mt-3 space-y-2"><div className="h-2 rounded bg-white/10"/><div className="h-2 w-3/4 rounded bg-white/10"/><div className="h-8 rounded bg-white/[.06]"/></div></div>
              <span className="text-cyan-300">→</span>
              <div className="w-[27%] rounded-xl border border-blue-300/20 bg-white/[.04] p-3"><p className="text-[7px] text-violet-200">PARSE</p><div className="mt-3 font-mono text-[7px] leading-4 text-white/45"><div>title()</div><div>price()</div><div>availability()</div></div></div>
              <span className="text-violet-300">→</span>
              <div className="w-[27%] rounded-xl border border-violet-300/20 bg-white/[.04] p-3"><p className="text-[7px] text-cyan-200">OUTPUT</p><pre className="mt-3 text-[7px] leading-3 text-white/45">{"{\n books: [\n  ...\n ]\n}"}</pre></div>
            </div>
            <span className="absolute bottom-4 left-5 font-mono text-[8px] uppercase tracking-[.2em] text-slate-600">HTML → DATA → JSON</span>
          </div>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-[10px] uppercase tracking-[.25em] text-violet-300">The problem</p><h2 className="mt-3 text-3xl font-semibold">Turn catalogue pages into useful data.</h2></div><p className="max-w-3xl text-lg leading-8 text-slate-400">I wanted a way to collect book information from Books to Scrape and bring the results together as structured data instead of working with individual pages separately.</p></div><div className="mt-16 grid gap-4 md:grid-cols-2">{[["The solution","A Node.js scraper that visits catalogue pages, extracts book information, processes and normalizes the data, validates records, and produces a JSON file."],["My role","I built the scraper and worked through the implementation and troubleshooting required to get the different parts working together."],["Responsible scraping","The project includes request throttling and robots.txt handling as part of the approach to responsible web scraping."],["Automation","Automated testing and GitHub Actions CI help make the scraper easier to check and run consistently."]].map(([t,d],i)=><div key={t} className="rounded-2xl border border-white/10 bg-white/[.025] p-7"><span className="font-mono text-[9px] text-blue-400/70">0{i+1}</span><h3 className="mt-4 text-xl font-semibold">{t}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{d}</p></div>)}</div></section>
    <section className="border-y border-white/[.07] bg-[#050a14]"><div className="mx-auto max-w-6xl px-6 py-20 sm:py-24"><p className="text-[10px] uppercase tracking-[.25em] text-cyan-300">How it works</p><h2 className="mt-3 text-3xl font-semibold">From catalogue to structured output.</h2><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{flow.map((item,i)=><div key={item} className="relative rounded-2xl border border-white/10 bg-white/[.025] p-6"><span className="font-mono text-[9px] text-slate-600">0{i+1}</span><p className="mt-5 text-sm leading-6 text-slate-300">{item}</p>{i<flow.length-1&&i!==2&&<span className="absolute -right-2 top-1/2 hidden text-cyan-300 lg:block">→</span>}</div>)}</div></div></section>
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24"><div className="grid gap-4 md:grid-cols-3">{[["Parsing","HTML is parsed so the scraper can extract the book information it needs."],["Normalization","The extracted values are processed into a consistent structure."],["Validation","Records are checked against a schema before the final JSON is produced."]].map(([t,d],i)=><div key={t} className="rounded-2xl border border-white/10 bg-white/[.025] p-7"><span className="text-2xl font-semibold text-white/15">0{i+1}</span><h3 className="mt-5 text-lg font-semibold">{t}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{d}</p></div>)}</div></section>
    <section className="border-t border-white/[.07] bg-[radial-gradient(circle_at_80%_30%,rgba(124,58,237,.18),transparent_35%),#050a14]"><div className="mx-auto max-w-6xl px-6 py-20 sm:py-24"><div className="rounded-3xl border border-violet-300/15 bg-white/[.025] p-8 sm:p-12"><p className="text-[10px] uppercase tracking-[.25em] text-violet-300">What I learned</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Troubleshooting is part of the build.</h2><p className="mt-5 max-w-3xl leading-8 text-slate-400">The hardest part for me was troubleshooting. I learned how to work through issues until the pieces of the scraper worked reliably together, while gaining practical experience with responsible web scraping, data processing, validation, testing, and automation.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/work" className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-slate-300">← More projects</Link><Link href="/contact" className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2.5 text-sm font-semibold text-slate-950">Discuss a project →</Link></div></div></div></section>
  </main>;
}
