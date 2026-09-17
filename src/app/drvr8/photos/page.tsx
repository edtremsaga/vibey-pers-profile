import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DRVR.8 Photos",
  description: "Photos of DRVR.8, an R.E.M. tribute band.",
};

export default function Drvr8PhotosPage() {
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
              aria-current="page"
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
          <h1 className="text-2xl font-semibold tracking-tight text-[#087f8c]">
            Live Shows
          </h1>
          <figure className="mt-6">
            <Image
              src="/drvr8/central-saloon-band-original.jpg"
              alt="The four members of DRVR.8 together on stage under blue lights at the Central Saloon in Seattle, WA, in spring 2026."
              width={3024}
              height={4032}
              quality={90}
              sizes="(max-width: 496px) calc(100vw - 48px), 448px"
              className="aspect-[100/77] w-full object-cover object-[center_78%]"
            />
            <figcaption className="mt-3 text-sm text-neutral-700">
              Central Saloon — Seattle, WA, Spring 2026
            </figcaption>
          </figure>
          <figure className="mt-6">
            <Image
              src="/drvr8/last-chance-saloon-2026-09-04.png"
              alt="All four members of DRVR.8 performing at the Last Chance Saloon in Seattle on September 4, 2026."
              width={1404}
              height={1120}
              quality={90}
              sizes="(max-width: 496px) calc(100vw - 48px), 448px"
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-sm text-neutral-700">
              Last Chance Saloon — Seattle, September 4, 2026
            </figcaption>
          </figure>
          <section className="mt-12 border-t border-neutral-200 pt-10">
            <h2 className="text-2xl font-semibold tracking-tight text-[#087f8c]">
              Logos
            </h2>
            <Image
              src="/drvr8/drvr8-logo.png"
              alt="Original black-and-white DRVR.8 train logo."
              width={326}
              height={308}
              unoptimized
              className="mx-auto mt-6 h-auto w-full max-w-[280px]"
            />
          </section>
        </section>
      </div>
    </main>
  );
}
