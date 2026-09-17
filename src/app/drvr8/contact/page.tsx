import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DRVR.8 Contact",
  description: "Contact DRVR.8, an R.E.M. tribute band.",
};

export default function Drvr8ContactPage() {
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
          <nav aria-label="DRVR.8" className="mt-6 text-sm text-neutral-500">
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
            >
              Songs
            </a>
            <span className="mx-2 text-neutral-300">·</span>
            <a
              href="/drvr8/contact"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
              aria-current="page"
            >
              Contact
            </a>
          </nav>
        </header>

        <section className="mx-auto mt-10 w-full max-w-md text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#087f8c]">
            Contact
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            <a
              href="mailto:edtrem@outlook.com"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              edtrem@outlook.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
