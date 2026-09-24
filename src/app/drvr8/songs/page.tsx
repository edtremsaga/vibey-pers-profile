import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DRVR.8 Songs",
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

const songsInProgress = [
  "Maps and Legends",
  "Sitting Still",
  "Harborcoat",
  "Orange Crush",
  "Wolves, Lower",
];

export default function Drvr8SongsPage() {
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
            <span className="mx-1 text-neutral-300">·</span>
            <a
              href="/drvr8/shows"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Shows
            </a>
            <span className="mx-1 text-neutral-300">·</span>
            <a
              href="/drvr8/videos"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Videos
            </a>
            <span className="mx-1 text-neutral-300">·</span>
            <a
              href="/drvr8/photos"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Photos
            </a>
            <span className="mx-1 text-neutral-300">·</span>
            <a
              href="/drvr8/songs"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
              aria-current="page"
            >
              Songs
            </a>
            <span className="mx-1 text-neutral-300">·</span>
            <a
              href="/drvr8/contact"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Contact
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

          <section className="mt-10 border-t border-neutral-200 pt-8">
            <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-[#087f8c]">
              Songs We’re Working On
            </h2>
            <ol className="list-decimal space-y-3 pl-6 text-base leading-relaxed text-neutral-700">
              {songsInProgress.map((song) => (
                <li key={song} className="pl-1">
                  {song}
                </li>
              ))}
            </ol>
          </section>
        </section>
      </div>
    </main>
  );
}
