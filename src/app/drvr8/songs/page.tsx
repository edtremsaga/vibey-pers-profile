import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DRVR.8 Songs | Vibey Craft",
  description: "Songs played by DRVR.8, an R.E.M. tribute band.",
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

export default function Drvr8SongsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-2xl px-6 py-8 sm:py-10">
        <header className="mt-2 text-center sm:mt-4">
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
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Home
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
              aria-current="page"
            >
              Songs
            </a>
          </nav>
        </header>

        <section className="mx-auto mt-8 w-full max-w-md">
          <h1 className="mb-6 text-center text-2xl font-semibold tracking-tight text-[#087f8c]">
            Songs We Play
          </h1>
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
