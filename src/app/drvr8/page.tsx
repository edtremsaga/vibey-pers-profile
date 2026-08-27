import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DRVR.8 | Vibey Craft",
  description:
    "DRVR.8 is an R.E.M. tribute band playing music from the early IRS years.",
};

const songs = [
  "Radio Free Europe",
  "Driver 8",
  "So. Central Rain",
  "The One I Love",
  "Fall on Me",
  "It's the End of the World as We Know It (And I Feel Fine)",
  "Pretty Persuasion",
  "Begin the Begin",
  "Carnival of Sorts",
  "Finest Worksong",
  "Gardening at Night",
];

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

        <section className="mx-auto mt-8 w-full max-w-md">
          <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-neutral-900">
            Songs We Play
          </h2>
          <ol className="list-decimal space-y-3 pl-6 text-base leading-relaxed text-neutral-700">
            {songs.map((song) => (
              <li key={song} className="pl-1">
                {song}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
