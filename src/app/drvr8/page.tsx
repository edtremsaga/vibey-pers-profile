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
  "Can't Get There from Here",
  "Finest Worksong",
  "Don't Go Back to Rockville",
  "Gardening at Night",
  "Harborcoat",
];

export default function Drvr8Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-2xl px-6 py-8 sm:py-12">
        <a
          href="/"
          className="inline-flex min-h-11 items-center text-sm text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
        >
          ← Vibey Craft
        </a>

        <header className="mt-8 text-center sm:mt-10">
          <h1 className="sr-only">DRVR.8</h1>
          <Image
            src="/drvr8/drvr8-logo.png"
            alt="DRVR.8 — A Tribute to R.E.M."
            width={326}
            height={308}
            priority
            className="mx-auto h-auto w-full max-w-[280px] sm:max-w-[326px]"
          />
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-neutral-700">
            Playing the music of R.E.M., from the early IRS years.
          </p>
        </header>

        <section className="mx-auto mt-10 w-full max-w-md">
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
