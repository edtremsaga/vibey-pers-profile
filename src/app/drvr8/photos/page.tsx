import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DRVR.8 Photos | Vibey Craft",
  description: "Photos of DRVR.8, an R.E.M. tribute band.",
};

export default function Drvr8PhotosPage() {
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
              className="underline underline-offset-4 hover:text-neutral-900"
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
              className="text-neutral-900 underline underline-offset-4"
              aria-current="page"
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

        <section className="mx-auto mt-8 w-full max-w-md text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Photos
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            Photos coming soon.
          </p>
        </section>
      </div>
    </main>
  );
}
