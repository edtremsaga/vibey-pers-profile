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
      AI-assisted experiments
    </p>
  </div>
</aside>

          {/* Content */}
          <div>
            <header className="mb-14">
            <h1 className="mb-8 text-4xl font-semibold tracking-tight">
                Edward Tremblay
              </h1>
              <p className="text-lg leading-relaxed text-neutral-700">
              I'm a retired product leader building small, focused software
              experiments using modern AI-assisted workflows.
              </p>
              <p className="mt-4 text-sm text-neutral-500">
  Currently focused on music tools and metadata-driven projects.
</p>
            </header>

            <section className="mb-14">
              <h2 className="mb-8 text-sm font-medium tracking-wide text-neutral-500">
                Projects
              </h2>

              <ul className="space-y-10">
                <li>
                  <h3 className="text-lg font-medium">Vibey Liner Notez</h3>
                  <p className="mt-2 text-neutral-700">
                    Album-first exploration of music liner notes and metadata,
                    powered by MusicBrainz.
                  </p>
                  <a
                    href="https://vibey-liner-notez.vercel.app"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    <span className="underline underline-offset-4">Visit</span>
                    <span aria-hidden>↗</span>
                  </a>
                </li>

                <li>
                  <h3 className="text-lg font-medium">Vibey Looper</h3>
                  <p className="mt-2 text-neutral-700">
                    A focused practice tool for looping sections of YouTube videos.
                  </p>
                  <a
                    href="https://vibey-looper.vercel.app"
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
                <p className="mt-10 text-sm text-neutral-500">
                <p className="mb-6 text-sm text-neutral-500">
  Short notes from recent work.
</p>
  Code on{" "}
  <a
    href="https://github.com/edtremsaga"
    className="underline underline-offset-4 hover:text-neutral-900"
  >
    GitHub
  </a>
</p>
              </h2>

              <ul className="space-y-4 text-neutral-700">
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
          </div>
        </div>
      </div>
    </main>
  );
}
