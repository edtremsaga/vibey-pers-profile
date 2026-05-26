import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liner Notez Support",
  description: "Support information for the Liner Notez iOS app.",
};

export default function LinerNotezSupport() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[160px_1fr]">
          <aside className="md:pt-1">
            <div className="border-l border-neutral-200 pl-4">
              <p className="text-base font-semibold tracking-wide text-neutral-700">
                LINER NOTEZ
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                Support for the Liner Notez iOS app.
              </p>
              <p className="mt-4 text-sm">
                <a
                  href="/"
                  className="text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
                >
                  Home
                </a>
              </p>
              <p className="mt-2 text-sm">
                <a
                  href="/liner-notez/privacy"
                  className="text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
                >
                  Privacy
                </a>
              </p>
            </div>
          </aside>

          <div>
            <header className="mb-12">
              <h1 className="mb-4 text-4xl font-semibold tracking-tight">
                Liner Notez Support
              </h1>
              <p className="text-sm text-neutral-500">
                Last updated: May 26, 2026
              </p>
            </header>

            <article className="space-y-8">
              <section>
                <h2 className="mb-3 text-lg font-medium text-neutral-900">
                  Contact
                </h2>
                <p className="leading-relaxed text-neutral-700">
                  For support, questions, bug reports, or feedback, email{" "}
                  <a
                    href="mailto:vibeycraft@gmail.com"
                    className="underline underline-offset-4 hover:text-neutral-900"
                  >
                    vibeycraft@gmail.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-medium text-neutral-900">
                  About Liner Notez
                </h2>
                <p className="leading-relaxed text-neutral-700">
                  Liner Notez is an album information and discovery app. It helps you explore album credits, tracklists, artwork, release editions, producer connections, and source links using public music data.
                </p>
                <p className="mt-3 leading-relaxed text-neutral-700">
                  Liner Notez does not play, stream, download, or provide music audio.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-medium text-neutral-900">
                  Data sources
                </h2>
                <p className="leading-relaxed text-neutral-700">
                  The app may contact public data sources such as MusicBrainz, Cover Art Archive, Wikidata, and Wikipedia to retrieve album information, artwork, credits, and related links.
                </p>
                <p className="mt-3 leading-relaxed text-neutral-700">
                  Public music data can be incomplete or vary by release edition, country, reissue, and source.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-medium text-neutral-900">
                  Privacy
                </h2>
                <p className="leading-relaxed text-neutral-700">
                  Read the{" "}
                  <a
                    href="/liner-notez/privacy"
                    className="underline underline-offset-4 hover:text-neutral-900"
                  >
                    Liner Notez privacy page
                  </a>{" "}
                  for more information about app data use.
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
