import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DRVR.8 Shows",
  description:
    "Upcoming DRVR.8 shows in Bellingham, Washington, with Bands Don’t Cry.",
};

export default function Drvr8ShowsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-2xl px-6 py-8 sm:py-10">
        <header className="mt-2 text-center sm:mt-4">
          <Image
            src="/drvr8/drvr8-poster-rich.png"
            alt="DRVR.8 performing live above a DRVR.8 A Tribute to R.E.M. train poster."
            width={1254}
            height={1254}
            priority
            unoptimized
            className="mx-auto h-auto w-full max-w-[180px]"
          />
          <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-neutral-700">
            Playing the music of R.E.M., from the early IRS years.
          </p>
          <nav
            aria-label="DRVR.8"
            className="mt-6 flex flex-wrap items-center justify-center gap-y-2 text-sm text-neutral-500"
          >
            <a
              href="/drvr8"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Home
            </a>
            <span className="mx-2 text-neutral-300">·</span>
            <a
              href="/drvr8/shows"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
              aria-current="page"
            >
              Shows
            </a>
            <span className="mx-2 text-neutral-300">·</span>
            <a
              href="/drvr8/videos"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Videos
            </a>
            <span className="mx-2 text-neutral-300">·</span>
            <a
              href="/drvr8/photos"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Photos
            </a>
            <span className="mx-2 text-neutral-300">·</span>
            <a
              href="/drvr8/songs"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Songs
            </a>
            <span className="mx-2 text-neutral-300">·</span>
            <a
              href="/drvr8/contact"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Contact
            </a>
          </nav>
        </header>

        <section className="mx-auto mt-10 w-full max-w-xl">
          <h1 className="text-center text-4xl font-semibold tracking-tight text-[#087f8c]">
            Shows
          </h1>

          <div className="mt-8 space-y-14">
            <article aria-labelledby="bar-two-eleven-show">
              <Image
                src="/drvr8/bands-dont-cry-bar-two-eleven-november-14-2026.png"
                alt="Bands Don’t Cry and DRVR.8 concert poster with red roses, railroad tracks, and a moonlit forest. Event details follow below."
                width={1036}
                height={1610}
                sizes="(max-width: 608px) calc(100vw - 48px), 560px"
                priority
                className="h-auto w-full"
              />
              <div className="mt-6 text-center">
                <h2
                  id="bar-two-eleven-show"
                  className="text-2xl font-semibold tracking-tight text-[#087f8c]"
                >
                  Bands Don’t Cry with DRVR.8
                </h2>
                <dl className="mt-5 space-y-4 text-base leading-relaxed text-neutral-700">
                  <div>
                    <dt className="font-semibold text-neutral-900">Date and time</dt>
                    <dd>
                      <time dateTime="2026-11-14T21:00:00-08:00">
                        Saturday, November 14, 2026 · Doors 8 PM · Show 9 PM
                      </time>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-900">Venue</dt>
                    <dd>Bar Two Eleven · Bellingham, WA</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-900">Tickets</dt>
                    <dd>$10 advance · $15 at the show</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-900">Ages</dt>
                    <dd>21 and over</dd>
                  </div>
                </dl>
              </div>
            </article>

            <article className="border-t border-neutral-200 pt-14" aria-labelledby="shakedown-show">
              <Image
                src="/drvr8/bands-dont-cry-shakedown-january-9-2027.png"
                alt="Bands Don’t Cry and DRVR.8 concert poster with red roses, shattered glass, and a dark forest. Event details follow below."
                width={1036}
                height={1610}
                sizes="(max-width: 608px) calc(100vw - 48px), 560px"
                className="h-auto w-full"
              />
              <div className="mt-6 text-center">
                <h2
                  id="shakedown-show"
                  className="text-2xl font-semibold tracking-tight text-[#087f8c]"
                >
                  Bands Don’t Cry with DRVR.8
                </h2>
                <dl className="mt-5 space-y-4 text-base leading-relaxed text-neutral-700">
                  <div>
                    <dt className="font-semibold text-neutral-900">Date and time</dt>
                    <dd>
                      <time dateTime="2027-01-09T20:00:00-08:00">
                        Saturday, January 9, 2027 · Doors 7 PM · Show 8 PM
                      </time>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-900">Venue</dt>
                    <dd>
                      The Shakedown Music Venue &amp; Bar
                      <br />
                      1212 N State St, Bellingham, WA 98225
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-900">Tickets</dt>
                    <dd>$12 advance · $15 day of show</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-900">Ages</dt>
                    <dd>21 and over</dd>
                  </div>
                </dl>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
