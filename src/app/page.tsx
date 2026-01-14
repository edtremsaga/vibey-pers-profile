export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[160px_1fr]">
          {/* Left rail */}
          <aside className="md:pt-1">
  <div className="border-l  border-neutral-200 pl-4">
    <p className="text-base font-semibold tracking-wide text-neutral-700">
      VIBE CODING
    </p>
    <p className="mt-1 text-sm text-neutral-500">
      Building small software products with AI tooling as my partner.
    </p>
    <p className="mt-4 text-sm">
      <a
        href="/learnings"
        className="text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
      >
        Learnings
      </a>
    </p>
  </div>
</aside>

          {/* Content */}
          <div>
            <header className="mb-7">
            <h1 className="mb-8 text-4xl font-semibold tracking-tight">
                Edward Tremblay
              </h1>
              <p className="text-lg leading-relaxed text-neutral-700">
              I&apos;m a technical product leader building software
              projects using modern AI-assisted workflows.
              </p>
              <p className="mt-4 text-sm text-neutral-500">
  Currently focused on music tools and metadata-driven projects.
</p>
              <p className="mt-4 text-sm text-neutral-500">
                Most projects here are active and evolving through small, frequent iterations.
              </p>
              <p className="mt-4 text-sm text-neutral-500">
                Open to collaborating with designers, engineers, or product thinkers who enjoy building focused software projects.
              </p>
            </header>

            <section className="mb-14">
              <h2 className="mb-8 text-sm font-medium tracking-wide text-neutral-500">
                Selected Projects
              </h2>

              <ul className="space-y-10">
                <li>
                  <h3 className="text-lg font-medium">Liner Notez</h3>
                  <p className="mt-2 text-neutral-700">
                    Album-first exploration of music liner notes and metadata,
                    powered by MusicBrainz. Exploring metadata enrichment, UX, and album-level storytelling. Ideas welcome.
                  </p>
                  <a
                    href="https://vibey-liner-notez2.vercel.app/"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    <span className="underline underline-offset-4">Visit</span>
                    <span aria-hidden>↗</span>
                  </a>
                </li>

                <li>
                  <h3 className="text-lg font-medium">Music Looper</h3>
                  <p className="mt-2 text-neutral-700">
                    A musicians practice tool for looping sections of YouTube videos. I use the app daily as part of my bass practice routine. Interested in improving mobile UX, practice workflows, and musician feedback loops.
                  </p>
                  <a
                    href="https://vibey-looper.vercel.app/"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    <span className="underline underline-offset-4">Visit</span>
                    <span aria-hidden>↗</span>
                  </a>
                </li>

                <li>
                  <h3 className="text-lg font-medium">Tickets Scanner</h3>
                  <p className="mt-2 text-neutral-700">
                    Tickets Scanner is an exploratory proof of concept project to build an evaluator agent that scans ticket prices across ticket brokers. Brokers include Ticketmaster, SeatGeek and StubHub.  Curious about agent design, data sourcing, and feasibility.
                  </p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    <span className="underline underline-offset-4">Visit</span>
                    <span aria-hidden>↗</span>
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-14">
              <h2 className="mb-8 text-sm font-medium tracking-wide text-neutral-500">
                Other Experiments
              </h2>

              <ul className="space-y-10">
                <li>
                  <h3 className="text-lg font-medium">Nines Golf</h3>
                  <p className="mt-2 text-neutral-700">
                    Game to play when you and your pals are out on the links. The app keeps track of scores so the winner gets bragging rights at the end of 9 or 18 holes
                  </p>
                  <a
                    href="https://vibey-nines.vercel.app/"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    <span className="underline underline-offset-4">Visit</span>
                    <span aria-hidden>↗</span>
                  </a>
                </li>

                <li>
                  <h3 className="text-lg font-medium">Vibey Cat</h3>
                  <p className="mt-2 text-neutral-700">
                    Game where an evil eagle is trying to harm a little cat. The little cat&apos;s pal comes trys to rescue the little cat. This was my first attempt at vibe coding an app.
                  </p>
                  <a
                    href="https://vibeycat.vercel.app/"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    <span className="underline underline-offset-4">Visit</span>
                    <span aria-hidden>↗</span>
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-8 text-sm font-medium tracking-wide text-neutral-500">
                BUILD LOG
              </h2>
              <p className="mb-6 text-sm text-neutral-500">
                Short notes from recent work. Code on{" "}
                <a
                  href="https://github.com/edtremsaga"
                  className="underline underline-offset-4 hover:text-neutral-900"
                >
                  GitHub
                </a>
              </p>

              <ul className="space-y-4 text-neutral-700">
                <li>
                  <span className="text-neutral-500">Jan 2026</span> — Developed &amp; tested producer search for liner notez
                </li>
                <li>
                  <span className="text-neutral-500">Jan 2026</span> — Fixed mobile
                  lightbox behavior for album art galleries.
                </li>
                <li>
                  <span className="text-neutral-500">Dec 2025</span> — Initial public
                  deployment.
                </li>
              </ul>
            </section>

            <section className="mt-14">
              <p className="text-sm text-neutral-500">
                contact: edwardktremblay@gmail.com | <a href="https://www.linkedin.com/in/edtrem/" className="underline underline-offset-4 hover:text-neutral-900">https://www.linkedin.com/in/edtrem/</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
