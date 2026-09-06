import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DRVR.8 | Vibey Craft",
  description:
    "DRVR.8 is an R.E.M. tribute band playing music from the early IRS years.",
};

export default function Drvr8Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-2xl px-6 py-8 sm:py-10">
        <header className="mt-2 text-center sm:mt-4">
          <h1 className="sr-only">DRVR.8</h1>
          <Image
            src="/drvr8/drvr8-logo.png"
            alt="DRVR.8 — A Tribute to R.E.M."
            width={326}
            height={308}
            priority
            className="mx-auto h-auto w-full max-w-[280px] sm:max-w-[326px]"
          />
          <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-neutral-700">
            Playing the music of R.E.M., from the early IRS years.
          </p>
          <nav
            aria-label="DRVR.8"
            className="mt-6 text-sm text-neutral-500"
          >
            <a
              href="/drvr8"
              className="text-neutral-900 underline underline-offset-4"
              aria-current="page"
            >
              Home
            </a>
            <span className="mx-2 text-neutral-300">·</span>
            <a
              href="/drvr8/videos"
              className="underline underline-offset-4 hover:text-neutral-900"
            >
              Videos
            </a>
            <span className="mx-2 text-neutral-300">·</span>
            <a
              href="/drvr8/photos"
              className="underline underline-offset-4 hover:text-neutral-900"
            >
              Photos
            </a>
            <span className="mx-2 text-neutral-300">·</span>
            <a
              href="/drvr8/songs"
              className="underline underline-offset-4 hover:text-neutral-900"
            >
              Songs
            </a>
          </nav>
        </header>

        <section className="mx-auto mt-8 w-full max-w-md border-y border-neutral-200 py-6 text-center">
          <p className="text-sm font-medium tracking-wide text-neutral-500">
            SEPTEMBER 4, 2026 · 8 PM
          </p>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
            Slim’s Last Chance
          </p>
          <p className="mt-2 text-base leading-relaxed text-neutral-500">
            Seattle, WA
          </p>
        </section>

        <section className="mx-auto mt-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            About
          </h2>
          <p className="mt-4 text-base font-medium italic leading-relaxed text-neutral-700">
            “We are HOPE despite the times…”
          </p>
          <div className="mt-4 space-y-4 text-left text-base leading-relaxed text-neutral-700">
            <p>
              DRVR.8 is a Seattle-based retrospective project capturing the raw, enigmatic energy of R.E.M.’s formative I.R.S. Records era.
            </p>
            <p>
              Born from an experiment within Seattle’s Festival of Friends community, the band made its live debut to a packed, electric crowd at the historic Central Saloon. The overwhelming response turned what was intended as a one-off gig into an ongoing project.
            </p>
            <p>
              Bypassing R.E.M.’s later mainstream pop years, DRVR.8 focuses on the urgent, guitar-driven period from 1982 through 1987—from <em>Murmur</em> and <em>Reckoning</em> through <em>Lifes Rich Pageant</em> and <em>Document</em>.
            </p>
            <p>
              The sound and spirit of the legendary Athens, Georgia quartet are channeled by Andrew Barash (Guitar Sounds), Rich West (Drum Beats), Ed Tremblay (Bass Lines), and Matthew Bartone (Vox and Stuff).
            </p>
            <p>
              Blending iconic early alternative anthems with beloved deep cuts, DRVR.8 delivers a high-energy rock-and-roll experience celebrating the roots of college radio.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-10 w-full max-w-md border-t border-neutral-200 pt-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Contact
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            <a
              href="mailto:edtrem@outlook.com"
              className="underline underline-offset-4 hover:text-neutral-900"
            >
              edtrem@outlook.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
