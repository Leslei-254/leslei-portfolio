import Link from "next/link";

export default function LeadDeskCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <article className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        <Link href="/work" className="text-sm text-zinc-500 hover:text-black">← Back to work</Link>
        <p className="mt-12 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">01 · Ready to use</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">LeadDesk Mini CRM</h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-600">A clean CRM for businesses to view, track, and manage customer form submissions.</p>
        <div className="mt-6 flex flex-wrap gap-2">{["Next.js", "JavaScript", "Prisma", "Neon", "Vercel"].map((x) => <span key={x} className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">{x}</span>)}</div>

        <div className="mt-16 space-y-14">
          <section><h2 className="text-2xl font-semibold">The Problem</h2><p className="mt-4 leading-8 text-zinc-600">Businesses need a simple way to keep track of customers who submit forms and know which submissions have already been handled.</p></section>
          <section><h2 className="text-2xl font-semibold">The Solution</h2><p className="mt-4 leading-8 text-zinc-600">I built LeadDesk Mini to give businesses a simple place to view and track customer submissions. A business can see the clients who have submitted forms and mark a submission as complete when it has been handled.</p></section>
          <section><h2 className="text-2xl font-semibold">What I Built</h2><p className="mt-4 leading-8 text-zinc-600">Client submits form → Lead appears in the CRM → Business reviews the lead → Lead is marked complete.</p><ul className="mt-5 list-disc space-y-2 pl-6 text-zinc-600"><li>Customer and lead tracking</li><li>Form submissions</li><li>Authentication and login</li><li>Routing</li><li>Database integration</li></ul></section>
          <section><h2 className="text-2xl font-semibold">My Role</h2><p className="mt-4 leading-8 text-zinc-600">I designed and built the application, including the customer tracking workflow, authentication, routing, and database integration.</p></section>
          <section><h2 className="text-2xl font-semibold">The Challenge</h2><p className="mt-4 leading-8 text-zinc-600">The main challenges I faced were authentication and routing. I had to troubleshoot these areas to make sure users could log in correctly and access the right parts of the application.</p></section>
          <section><h2 className="text-2xl font-semibold">What I Learned</h2><p className="mt-4 leading-8 text-zinc-600">I learned patience and a new skill. Troubleshooting the application taught me to keep working through problems instead of giving up when something did not work immediately.</p></section>
          <section><h2 className="text-2xl font-semibold">Outcome</h2><p className="mt-4 leading-8 text-zinc-600">I built a clean LeadDesk CRM that is ready to use.</p><a href="https://lead-desk-mini-phi-sage.vercel.app/" target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white">View Live Project →</a></section>
        </div>
      </article>
    </main>
  );
}
