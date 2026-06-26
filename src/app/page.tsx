export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[160px_1fr]">
          {/* Left rail */}
          <aside className="md:pt-1">
  <div className="border-l  border-neutral-200 pl-4">
    <p className="text-base font-semibold tracking-wide text-neutral-700">
      AI-AUGMENTED PRODUCT BUILDING
    </p>
    <p className="mt-1 text-sm text-neutral-500">
      Designing and building software with AI as a development partner.
    </p>
    <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
      After decades in software product and engineering leadership, I now use AI tools to move ideas from concept to working applications.
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
              Exploring AI-augmented product development by designing and shipping software with modern AI coding tools.
              </p>
              <p className="mt-4 text-sm text-neutral-500">
  Currently focused on music tools and metadata-driven projects.
</p>
              <p className="mt-4 text-sm text-neutral-500">
                Most projects here are active and evolving through small, frequent iterations.
              </p>
              <p className="mt-4 text-sm text-neutral-500">
                
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
                    Album credits and liner notes for iPhone. Liner Notez helps music fans explore album releases, tracklists, credits, musicians, producers, release editions, and source links. Built with MusicBrainz and other public music metadata sources, with on-device My Library and private album notes.
                  </p>
                  <p className="mt-2 text-neutral-700">
                    Available now on the Apple App Store.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-neutral-600">
                    <a
                      href="https://apps.apple.com/us/app/liner-notez/id6773810969"
                      className="inline-flex items-center gap-2 hover:text-neutral-900"
                    >
                      <span className="underline underline-offset-4">App Store</span>
                      <span aria-hidden>↗</span>
                    </a>
                    <a
                      href="https://vibey-liner-notez2.vercel.app/"
                      className="inline-flex items-center gap-2 hover:text-neutral-900"
                    >
                      <span className="underline underline-offset-4">Visit</span>
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                </li>

                <li>
                  <h3 className="text-lg font-medium">Yard Plant Inventory</h3>
                  <p className="mt-2 text-neutral-700">
                    Mobile-first plant inventory prototype for documenting yard plants with iPhone camera capture, local-only IndexedDB storage, image previews, and a simple saved-plant grid. Built as a small, practical local-first app for maintaining a visual record of plants around the yard.
                  </p>
                  <a
                    href="https://github.com/edtremsaga/vibey-yard-app"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    <span className="underline underline-offset-4">GitHub</span>
                    <span aria-hidden>↗</span>
                  </a>
                </li>

                <li>
                  <h3 className="text-lg font-medium">Music Looper</h3>
                  <p className="mt-2 text-neutral-700">
                    A musicians’ practice tool that makes it easy to loop specific sections of YouTube videos. Built around a real practice need: slowing down, repeating, and working through difficult parts of songs. I use it daily as part of my bass routine.
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
                  <h3 className="text-lg font-medium">Set List Player</h3>
                  <p className="mt-2 text-neutral-700">
                    A lightweight tool for building and playing through set lists made from YouTube videos for practice and rehearsal. It helps musicians line up songs, rehearse transitions, and move through a set without hunting for individual videos. I use it myself when preparing for gigs.
                  </p>
                  <a
                    href="https://vibey-set-list-player.vercel.app/"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    <span className="underline underline-offset-4">Visit</span>
                    <span aria-hidden>↗</span>
                  </a>
                </li>

                <li>
                  <h3 className="text-lg font-medium">Live Music Scout</h3>
                  <p className="mt-2 text-neutral-700">
                    A local live-music discovery tool that tracks venue calendars and surfaces upcoming shows. Built to make it easier to follow Seattle-area venues, spot interesting gigs, and keep a lightweight weekly view of what’s coming up.
                  </p>
                  <a
                    href="https://github.com/edtremsaga/live-music-scout"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    <span className="underline underline-offset-4">GitHub</span>
                    <span aria-hidden>↗</span>
                  </a>
                </li>

                <li>
                  <h3 className="text-lg font-medium">Medicare Decision Tools</h3>
                  <p className="mt-2 text-neutral-700">
                    A high-clarity decision tool focused on Medicare Part B and Part D enrollment timing.
                  </p>
                  <p className="mt-2 text-neutral-700">
                    Rather than creating another broad information site, I built a narrow, rules-based web app that translates complex CMS guidance into a clear next step. The experience is intentionally simple — one decision at a time — with a concise, printable summary as the outcome.
                  </p>
                  <p className="mt-2 text-neutral-700">
                    This build reflects my broader interest in using AI-assisted development to reduce complexity in real-world, high-stakes decisions.
                  </p>
                  <a
                    href="https://medicare-delay-tool.vercel.app/"
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
                  <span className="text-neutral-500">June 2026</span> — Liner Notez for iPhone — Shipped version 1.0 to the Apple App Store. The app helps music fans research album credits, tracklists, release editions, producers, and liner-note-style metadata, with My Library and private on-device album notes.
                </li>
                <li>
                  <span className="text-neutral-500">Apr–May 2026</span> — Live Music Scout: built a Seattle/Bellevue live-music event listing app prototype with venue parsers and event-ranking logic based on my taste in music. The app delivers automated nightly/weekly email and Slack reports of local music scene events.
                  <div className="mt-1 text-sm text-neutral-500">
                    Links: <a href="https://github.com/edtremsaga/live-music-scout" className="hover:underline">GitHub</a>
                  </div>
                </li>
                <li>
                  <span className="text-neutral-500">March 2026</span> — Music Looper Set List — First Working Version — Built a lightweight set-list player for music practice and rehearsal. The tool lets musicians paste YouTube links, assemble a set list, and play songs sequentially to rehearse transitions or jam along with a prepared set. The focus was on a simple workflow: quickly assembling and playing a set list without friction.
                  <div className="mt-1 text-sm text-neutral-500">
                    Links: <a href="https://vibey-set-list-player.vercel.app/" className="hover:underline">Demo</a> · <a href="https://github.com/edtremsaga/vibey-set-list-2" className="hover:underline">GitHub</a>
                  </div>
                </li>
                <li>
                  <span className="text-neutral-500">Mar 2026</span> — Liner Notez: built an album-first music metadata prototype powered by MusicBrainz, exploring liner-note style album storytelling, metadata enrichment, and UX for hardcore music fans.
                </li>
                <li>
                  <span className="text-neutral-500">Feb 2026</span> — Yard Plant Inventory: built a mobile-first plant inventory prototype for documenting yard plants with iPhone camera capture, local-only IndexedDB storage, image previews, and a simple saved-plant grid.
                </li>
                <li>
                  <span className="text-neutral-500">Feb 2026</span> — Medicare Decision Tools — Shipped a narrow, rules-based web app clarifying Medicare Part B and Part D enrollment timing. Focused on translating CMS guidance into structured logic and a concise, printable outcome.
                  <div className="mt-1 text-sm text-neutral-500">
                    Links: <a href="https://medicare-delay-tool.vercel.app/" className="hover:underline">Demo</a> · <a href="https://github.com/edtremsaga/medicare-delay-tool" className="hover:underline">GitHub</a>
                  </div>
                </li>
                <li>
                  <span className="text-neutral-500">Jan 2026</span> — Developed &amp; tested producer search for liner notez
                  <div className="mt-1 text-sm text-neutral-500">
                    Links: <a href="https://vibey-liner-notez2.vercel.app/" className="hover:underline">Demo</a> · <a href="https://github.com/edtremsaga/vibey-liner-notez" className="hover:underline">GitHub</a>
                  </div>
                </li>
                <li>
                  <span className="text-neutral-500">Jan 2026</span> — Fixed mobile
                  lightbox behavior for album art galleries.
                </li>
                <li>
                  <span className="text-neutral-500">Dec 2025</span> — Launched this profile site as a public home for my AI-assisted app prototypes and build notes.
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
