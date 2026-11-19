import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DRVR.8 Booking & Contact",
  description: "Book DRVR.8, a Seattle-based R.E.M. tribute band offering 60-minute sets from Portland to Bellingham. Live video, promotional photos, logos, and booking contact.",
};

export default function Drvr8ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-2xl px-6 py-8 sm:py-10">
        <header className="mt-2 text-center sm:mt-4">
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
            >
              Songs
            </a>
            <span className="mx-1 text-neutral-300">·</span>
            <a
              href="/drvr8/contact"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
              aria-current="page"
            >
              Contact
            </a>
          </nav>
        </header>

        <section className="mx-auto mt-10 w-full max-w-xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#087f8c]">
            Booking &amp; Contact
          </h1>
          <Image
            src="/drvr8/last-chance-saloon-2026-09-04.png"
            alt="All four members of DRVR.8 performing at Slim’s Last Chance Saloon in Seattle."
            width={1404}
            height={1120}
            sizes="(max-width: 624px) calc(100vw - 48px), 576px"
            priority
            className="mt-8 h-auto w-full"
          />
          <p className="mt-6 text-lg leading-relaxed text-neutral-700">
            DRVR.8 is a Seattle-based, four-piece R.E.M. tribute band celebrating
            the raw energy of their early I.R.S. years.
          </p>

          <section className="mt-10" aria-labelledby="live-video">
            <h2 id="live-video" className="text-2xl font-semibold tracking-tight text-[#087f8c]">
              DRVR.8 Promotional Video
            </h2>
            <p className="mt-2 text-base text-neutral-600">Performance footage from DRVR.8’s inaugural gig at the historic Central Saloon · Seattle, WA</p>
            <video
              controls
              playsInline
              preload="metadata"
              aria-label="DRVR.8 Central Saloon performance promo"
              className="mx-auto mt-5 h-auto w-full max-w-[300px] bg-black"
            >
              <source src="/drvr8/central-saloon-promo.mp4" type="video/mp4" />
              <a href="/drvr8/central-saloon-promo.mp4">Watch the Central Saloon promo video</a>
            </video>
            <a
              href="https://www.youtube.com/watch?v=7euWw0VrBzo"
              className="mt-8 inline-block text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Watch a separate full-set recording of the inaugural gig at the Central Saloon
            </a>
            <a
              href="https://www.youtube.com/watch?v=7euWw0VrBzo"
              aria-label="Watch DRVR.8’s full inaugural set at the Central Saloon on YouTube"
              className="group relative mx-auto mt-4 block aspect-video w-full max-w-[280px] overflow-hidden bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f8c]"
            >
              <Image
                src="/drvr8/central-saloon-full-set-thumbnail.jpg"
                alt="DRVR.8 performing onstage at the Central Saloon with the audience in the foreground."
                fill
                sizes="(max-width: 328px) calc(100vw - 48px), 280px"
                className="object-cover"
              />
              <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/75 text-white transition-colors group-hover:bg-[#087f8c] group-focus-visible:bg-[#087f8c]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </a>
          </section>

          <section className="mt-10 border-y border-neutral-200 py-8" aria-labelledby="booking">
            <h2 id="booking" className="text-2xl font-semibold tracking-tight text-[#087f8c]">
              Book DRVR.8
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-700">
              Available for 60-minute sets at venues from Portland through Seattle
              to Bellingham. Opening slots and co-bills welcome.
            </p>
            <p className="mt-5 text-base leading-relaxed text-neutral-700">
              For booking and promoter inquiries, contact Ed Tremblay:
            </p>
            <a
              href="mailto:edtrem@outlook.com"
              className="mt-2 inline-block text-xl text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              edtrem@outlook.com
            </a>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Please include the venue, city, proposed date, set length, and any
              production details.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="promo-materials">
            <h2 id="promo-materials" className="text-2xl font-semibold tracking-tight text-[#087f8c]">
              Promotional materials
            </h2>
            <ul className="mt-4 space-y-3 text-base">
              <li>
                <a href="/drvr8/last-chance-saloon-2026-09-04.png" download="DRVR8-band-photo.png" className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]">
                  Download band photo
                </a>
              </li>
              <li>
                <a href="/drvr8/drvr8-logo.png" download="DRVR8-train-logo.png" className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]">
                  Download black-and-white logo
                </a>
              </li>
              <li>
                <a href="/drvr8/drvr8-train-banner-logo.png" download="DRVR8-banner-logo.png" className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]">
                  Download train banner logo
                </a>
              </li>
              <li>
                <a href="https://photos.google.com/share/AF1QipPsMkXC1ZR9UNbB74Yvg8hHriS9ptY_ckqRareLH32TxRivUGXWeuf4GrfdaS7LYg?key=QVNhaTVPRmxEQmhrNVhjdGhtbTVrSjdSOWxFZThB" className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]">
                  More band photos &amp; live videos
                </a>
              </li>
            </ul>
            <p className="mt-8 text-base text-neutral-700">Follow DRVR.8 on social media</p>
            <p className="mt-2 text-base">
              <a href="https://www.facebook.com/profile.php?id=61573335818180" className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]">Facebook</a>
              <span className="mx-2 text-neutral-300">·</span>
              <a href="https://www.instagram.com/drvr8.8/" className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]">Instagram</a>
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}
