import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <Link href="/" className="text-sm text-zinc-500 hover:text-black">← Home</Link>
        <div className="mt-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Contact</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">Let&apos;s build something.</h1>
          <p className="mt-6 text-xl leading-8 text-zinc-600">Have a project, idea, or opportunity you&apos;d like to discuss? I&apos;m open to opportunities to build, learn, collaborate, and solve real problems.</p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <form action="mailto:Lesleimakori@gmail.com" method="post" encType="text/plain" className="rounded-3xl border border-zinc-200 p-7 sm:p-9">
            <h2 className="text-2xl font-semibold">Send a message</h2>
            <div className="mt-7 space-y-5">
              <label className="block"><span className="text-sm font-medium">Name</span><input name="name" type="text" required placeholder="Your name" className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-950" /></label>
              <label className="block"><span className="text-sm font-medium">Email</span><input name="email" type="email" required placeholder="Your email" className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-950" /></label>
              <label className="block"><span className="text-sm font-medium">Message</span><textarea name="message" rows={6} required placeholder="Tell me about your project or idea" className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-950" /></label>
              <button type="submit" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white">Send Message</button>
            </div>
            <p className="mt-4 text-xs text-zinc-500">Submitting opens your email client with the message addressed to me.</p>
          </form>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-zinc-200 p-7">
              <h2 className="text-xl font-semibold">Prefer direct contact?</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">You can reach me directly by email or connect with me professionally.</p>
              <a href="mailto:Lesleimakori@gmail.com" className="mt-5 inline-block text-sm font-medium underline">Lesleimakori@gmail.com</a>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-7">
              <h2 className="text-xl font-semibold">Find me online</h2>
              <div className="mt-5 flex flex-wrap gap-3"><a href="https://github.com/Leslei-254" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm">GitHub</a><a href="https://www.linkedin.com/in/leslei-makori-8989681b4/" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm">LinkedIn</a></div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
