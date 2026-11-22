import type { Metadata } from "next";
import Image from "next/image";
import { SlowMovingBirdShell } from "../_components";

export const metadata: Metadata = {
  title: "Slow Moving Bird Shows",
  description:
    "Upcoming and past live shows from Slow Moving Bird in Seattle.",
};

const pastShows = [
  {
    title: "Slow Moving Bird at Slim’s Last Chance",
    poster: "/slowmovingbird/slow-moving-bird-slims-october-28-2026.png?v=2",
    posterAlt:
      "Slow Moving Bird concert poster featuring a bird skull in cream and red on a distressed black background.",
    width: 634,
    height: 810,
    dateTime: "2026-10-28T21:00:00-07:00",
    date: "Wednesday, October 28, 2026 · 9 PM",
    venue: "Slim’s Last Chance",
    address: "5606 1st Ave S, Seattle, WA",
    details: "Ages 21 and over",
  },
  {
    title: "Slow Moving Bird at Orient Express Lounge",
    poster: "/slowmovingbird/slow-moving-bird-orient-express-july-10-2026.png",
    posterAlt:
      "Art deco Slow Moving Bird concert poster with a heron, a passenger train, and an illustration of the band.",
    width: 1356,
    height: 1720,
    dateTime: "2026-07-10T22:00:00-07:00",
    date: "Friday, July 10, 2026 · 10 PM",
    venue: "Orient Express Lounge",
    address: "2963 4th Ave S, Seattle, WA 98134",
  },
  {
    title: "Slow Moving Bird at SeaMonster Lounge",
    poster: "/slowmovingbird/slow-moving-bird-seamonster-may-6-2026.png",
    posterAlt:
      "Slow Moving Bird concert poster featuring two herons flying above the Seattle skyline and Mount Rainier.",
    width: 1356,
    height: 1720,
    dateTime: "2026-05-06T19:30:00-07:00",
    date: "Wednesday, May 6, 2026 · Doors 7 PM · Show 7:30 PM",
    venue: "SeaMonster Lounge",
    address: "2202 N 45th St, Seattle, WA",
  },
];

export default function SlowMovingBirdShowsPage() {
  return (
    <SlowMovingBirdShell activePage="shows">
      <section className="mx-auto mt-10 w-full max-w-xl">
        <h1 className="text-center text-4xl font-semibold tracking-tight text-[#087f8c]">
          Shows
        </h1>

        <section
          className="mt-8 border-y border-neutral-200 py-8 text-center"
          aria-labelledby="upcoming-shows"
        >
          <h2
            id="upcoming-shows"
            className="text-2xl font-semibold tracking-tight text-[#087f8c]"
          >
            Upcoming Shows
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            No upcoming shows are currently scheduled. Check back soon for new
            dates.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="past-shows">
          <h2
            id="past-shows"
            className="text-center text-3xl font-semibold tracking-tight text-[#087f8c]"
          >
            Past Shows
          </h2>
          <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {pastShows.map((show) => (
              <article key={show.poster} className="text-center">
                <Image
                  src={show.poster}
                  alt={show.posterAlt}
                  width={show.width}
                  height={show.height}
                  sizes="(min-width: 640px) 272px, calc(100vw - 48px)"
                  className="h-auto w-full"
                />
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#087f8c]">
                  {show.title}
                </h3>
                <dl className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700">
                  <div>
                    <dt className="font-semibold text-neutral-900">Date and time</dt>
                    <dd>
                      <time dateTime={show.dateTime}>{show.date}</time>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-900">Venue</dt>
                    <dd>
                      {show.venue}
                      <br />
                      {show.address}
                    </dd>
                  </div>
                  {show.details ? (
                    <div>
                      <dt className="font-semibold text-neutral-900">Details</dt>
                      <dd>{show.details}</dd>
                    </div>
                  ) : null}
                </dl>
              </article>
            ))}
          </div>
        </section>
      </section>
    </SlowMovingBirdShell>
  );
}
