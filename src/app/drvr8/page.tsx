import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DRVR.8",
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
            src="/drvr8/drvr8-poster-rich.png"
            alt="DRVR.8 performing live above a DRVR.8 A Tribute to R.E.M. train poster."
            width={1254}
            height={1254}
            priority
            className="mx-auto h-auto w-full max-w-md"
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
              aria-current="page"
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

        <section className="mx-auto mt-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-[#087f8c]">
            About
          </h2>
          <div className="mt-4 space-y-4 text-left text-base leading-relaxed text-neutral-700">
            <p>
              DRVR.8 is a Seattle-based retrospective project capturing the raw, enigmatic energy of R.E.M.’s formative years. DRVR.8 focuses on the urgent, guitar-driven period of their 80&apos;s releases on I.R.S Records.
            </p>
            <p>
              The band made its live debut to a packed, electric crowd at the historic Central Saloon in February of 2026. The overwhelming response turned what was intended as a one-off gig into an ongoing project.
            </p>
            <p>
              Blending iconic, early alternative anthems with beloved deep cuts, DRVR.8 delivers a high-energy rock-and-roll experience celebrating the roots of college radio.
            </p>
            <p>
              DRVR.8 is Matthew Bartone (Lead Vocals), Andrew Barash (Guitar &amp; Vocals), Rich West (Drums &amp; Vocals) and Ed Tremblay (Bass).
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
