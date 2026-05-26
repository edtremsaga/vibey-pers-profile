import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liner Notez Privacy",
  description: "Privacy information for the Liner Notez iOS app.",
};

export default function LinerNotezPrivacy() {
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
                Album information, credits, artwork, and release metadata from public music data.
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
                  href="/liner-notez/support"
                  className="text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
                >
                  Support
                </a>
              </p>
            </div>
          </aside>

          <div>
            <header className="mb-12">
              <h1 className="mb-4 text-4xl font-semibold tracking-tight">
                Liner Notez Privacy
              </h1>
              <p className="text-sm text-neutral-500">
                Last updated: May 26, 2026
              </p>
            </header>

            <article className="space-y-8">
              <section>
                <h2 className="mb-3 text-lg font-medium text-neutral-900">
                  Overview
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
                  Accounts and personal information
                </h2>
                <p className="leading-relaxed text-neutral-700">
                  Liner Notez does not require an account. The current iOS app does not intentionally collect personal information, sell personal data, show ads, or use tracking.
                </p>
                <p className="mt-3 leading-relaxed text-neutral-700">
                  The app does not save search history or favorites in the current iOS version.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-medium text-neutral-900">
                  Public data sources
                </h2>
                <p className="leading-relaxed text-neutral-700">
                  When you search for artists, albums, or producers, Liner Notez may send those searches and selected music identifiers to public music data services so the app can return results.
                </p>
                <p className="mt-3 leading-relaxed text-neutral-700">
                  These services may include MusicBrainz, Cover Art Archive, Wikidata, and Wikipedia. They provide album, release, track, credit, artwork, and background-link information when available.
                </p>
                <p className="mt-3 leading-relaxed text-neutral-700">
                  Those third-party services may receive normal technical request information, such as your IP address and user agent, according to their own policies.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-medium text-neutral-900">
                  Data quality
                </h2>
                <p className="leading-relaxed text-neutral-700">
                  Public music data may be incomplete, outdated, duplicated, or incorrect. Credits, artwork, dates, labels, and editions can vary by release and source.
                </p>
                <p className="mt-3 leading-relaxed text-neutral-700">
                  Liner Notez shows documented public data. It does not guess or invent credits.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-lg font-medium text-neutral-900">
                  Contact
                </h2>
                <p className="leading-relaxed text-neutral-700">
                  For privacy questions, support, or feedback, contact{" "}
                  <a
                    href="mailto:vibeycraft@gmail.com"
                    className="underline underline-offset-4 hover:text-neutral-900"
                  >
                    vibeycraft@gmail.com
                  </a>
                  .
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
