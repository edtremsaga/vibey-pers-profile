import type { Metadata } from "next";
import Image from "next/image";
import { SlowMovingBirdShell } from "../_components";

export const metadata: Metadata = {
  title: "Slow Moving Bird Booking & Contact",
  description:
    "Book Slow Moving Bird, a Seattle band performing 60-minute sets throughout the greater Seattle metro area. Videos, promotional materials, music, and booking contacts.",
};

export default function SlowMovingBirdContactPage() {
  return (
    <SlowMovingBirdShell activePage="contact">
      <section className="mx-auto mt-10 w-full max-w-xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-[#087f8c]">
          Booking &amp; Contact
        </h1>

        <Image
          src="/slowmovingbird/slow-moving-bird-promo-photo.png"
          alt="Five members of Slow Moving Bird together after a live performance."
          width={1814}
          height={1004}
          sizes="(max-width: 624px) calc(100vw - 48px), 576px"
          priority
          className="mt-8 h-auto w-full"
        />

        <div className="mx-auto mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-neutral-700">
          <p>
            Slow Moving Bird is a Seattle band playing original melodic rock
            songs with roots in Springsteen, Wilco, and Pearl Jam.
          </p>
          <p>
            The band released <em>Once, In a Daydream...</em> in 2020 and is
            finishing a new set of songs recorded at Seattle&apos;s venerable London
            Bridge Studio. You can find Slow Moving Bird&apos;s music on Apple Music,
            Spotify, and other streaming platforms.
          </p>
        </div>

        <section className="mt-10" aria-labelledby="promo-video">
          <h2
            id="promo-video"
            className="text-2xl font-semibold tracking-tight text-[#087f8c]"
          >
            Promotional Video
          </h2>
          <div className="mx-auto mt-5 aspect-video w-full max-w-lg overflow-hidden bg-black">
            <iframe
              src="https://www.youtube-nocookie.com/embed/0-PSzwepads"
              title="Slow Moving Bird promotional video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <a
            href="https://photos.google.com/share/AF1QipMUSCyjDpcWiJkC3JAnZU0vhKIx4Rv9i8WGP30iP1vWO5eX3kAVl-odGpIjBjKiAA?key=MndvWEFGTm04SEVjQzNOZncwYVJzc3p3U0E1c0Z3"
            className="mt-5 inline-block text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
          >
            View more live performance photos and videos
          </a>
          <Image
            src="/slowmovingbird/slow-moving-bird-live-vocalist.png"
            alt="Slow Moving Bird vocalist performing live onstage."
            width={538}
            height={738}
            sizes="(max-width: 348px) calc(100vw - 48px), 300px"
            className="mx-auto mt-8 h-auto w-full max-w-[300px]"
          />
        </section>

        <section
          className="mt-10 border-y border-neutral-200 py-8"
          aria-labelledby="booking"
        >
          <h2
            id="booking"
            className="text-2xl font-semibold tracking-tight text-[#087f8c]"
          >
            Book Slow Moving Bird
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            Available for 60-minute sets throughout the greater Seattle metro
            area. Venue shows, opening slots, co-bills, festivals, and select
            private events are welcome.
          </p>
          <p className="mt-5 text-base leading-relaxed text-neutral-700">
            For booking and promoter inquiries, contact:
          </p>
          <p className="mt-3 text-base text-neutral-700">
            <strong>Gabe Sheffer</strong>
            <br />
            <a
              href="mailto:gabe.sheffer@gmail.com"
              className="text-xl text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              gabe.sheffer@gmail.com
            </a>
          </p>
          <p className="mt-4 text-base text-neutral-700">
            <strong>Ed Tremblay</strong>
            <br />
            <a
              href="mailto:edtrem@outlook.com"
              className="text-xl text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              edtrem@outlook.com
            </a>
          </p>
          <p className="mt-5 text-base leading-relaxed text-neutral-600">
            Please include the venue, city, proposed date, set requirements, and
            any production details.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="promo-materials">
          <h2
            id="promo-materials"
            className="text-2xl font-semibold tracking-tight text-[#087f8c]"
          >
            Promotional Materials
          </h2>
          <ul className="mt-4 space-y-3 text-base">
            <li>
              <a
                href="/slowmovingbird/slow-moving-bird-promo-photo.png"
                download="Slow-Moving-Bird-band-photo.png"
                className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
              >
                Download band photo
              </a>
            </li>
            <li>
              <a
                href="/slowmovingbird/slow-moving-bird-promo-logo.png"
                download="Slow-Moving-Bird-logo.png"
                className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
              >
                Download band logo
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="music-social-contact">
          <h2
            id="music-social-contact"
            className="text-2xl font-semibold tracking-tight text-[#087f8c]"
          >
            Music &amp; Social
          </h2>
          <p className="mt-4 text-base">
            <a
              href="https://music.apple.com/us/album/once-in-a-daydream/1542117499"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Apple Music
            </a>
            <span className="mx-2 text-neutral-300">·</span>
            <a
              href="https://open.spotify.com/artist/1kcw9lACARZIdln9Dx2YDz"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Spotify
            </a>
            <span className="mx-2 text-neutral-300">·</span>
            <a
              href="https://www.instagram.com/slowmovingbirdband/"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Instagram
            </a>
          </p>
        </section>
      </section>
    </SlowMovingBirdShell>
  );
}
