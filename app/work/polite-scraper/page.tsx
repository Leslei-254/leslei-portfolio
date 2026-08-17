import Link from "next/link";

const concepts = ["URL resolution", "HTML parsing", "Data normalization", "Schema validation", "Request throttling", "robots.txt handling", "Automated testing", "GitHub Actions CI", "JSON output"];

export default function PoliteScraperCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <article className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        <Link href="/work" className="text-sm text-zinc-500 hover:text-black">← Back to work</Link>
        <p className="mt-12 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">02 · Completed</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">Polite Scraper</h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-600">A small, production-minded Node.js web scraper for collecting structured book data from Books to Scrape.</p>
        <div className="mt-6 flex flex-wrap gap-2">{["Node.js", "Cheerio", "Axios", "Schema validation", "GitHub Actions"].map((x) => <span key={x} className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">{x}</span>)}</div>
        <div className="mt-16 space-y-14">
          <section><h2 className="text-2xl font-semibold">The Problem</h2><p className="mt-4 leading-8 text-zinc-600">I wanted a way to collect book information from Books to Scrape and bring the results together as structured data instead of working with individual pages separately.</p></section>
          <section><h2 className="text-2xl font-semibold">The Solution</h2><p className="mt-4 leading-8 text-zinc-600">I built a Node.js web scraper that visits catalogue pages, extracts book information, processes and normalizes the data, validates the records, and produces a JSON file containing the collected books.</p></section>
          <section><h2 className="text-2xl font-semibold">What I Built</h2><ul className="mt-5 list-disc space-y-2 pl-6 text-zinc-600">{concepts.map((x) => <li key={x}>{x}</li>)}</ul><p className="mt-6 leading-8 text-zinc-600">Workflow: Books to Scrape → fetch catalogue pages → parse HTML → extract information → normalize data → validate records → save structured JSON.</p></section>
          <section><h2 className="text-2xl font-semibold">My Role</h2><p className="mt-4 leading-8 text-zinc-600">I built the scraper and worked through the implementation and troubleshooting required to get the different parts working together.</p></section>
          <section><h2 className="text-2xl font-semibold">The Challenge</h2><p className="mt-4 leading-8 text-zinc-600">The hardest part for me was troubleshooting. I had to work through problems in different parts of the scraper and make sure the pieces worked reliably together.</p></section>
          <section><h2 className="text-2xl font-semibold">What I Learned</h2><p className="mt-4 leading-8 text-zinc-600">I learned how to solve problems through troubleshooting and working through issues until the application works. The project also gave me practical experience with responsible web scraping, data processing, validation, testing, and automation.</p></section>
          <section><h2 className="text-2xl font-semibold">Outcome</h2><p className="mt-4 leading-8 text-zinc-600">The scraper successfully produced a JSON file containing the collected books.</p><a href="https://github.com/Leslei-254/polite-scraper" target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white">View GitHub Repository →</a></section>
        </div>
      </article>
    </main>
  );
}
