import type { Metadata } from "next";
import { SlowMovingBirdShell } from "./_components";

export const metadata: Metadata = {
  title: "Slow Moving Bird",
  description:
    "Slow Moving Bird is a rock band exploring the trials, tribulations, and quiet victories of life in America.",
};


export default function SlowMovingBirdPage() {
  return (
    <SlowMovingBirdShell activePage="home">
      <section className="mx-auto mt-10 w-full max-w-xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-[#087f8c]">
          About the Band
        </h1>
        <div className="mx-auto mt-5 max-w-xl space-y-4 text-lg leading-relaxed text-neutral-700">
          <p>
            Slow Moving Bird is a Seattle band playing big, melodic rock songs
            with roots in Springsteen, Wilco, and Pearl Jam.
          </p>
          <p>
            The band released Once, In a Daydream... in 2020 and has recorded
            new songs at Seattle’s London Bridge Studio for a second album,
            coming soon. You can find their music on Apple Music, Spotify, and
            other streaming platforms.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-md text-left">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-[#087f8c]">
            Band Members
          </h2>
          <dl className="mt-5 space-y-3 text-base leading-relaxed text-neutral-700">
            <div>
              <dt className="font-semibold text-neutral-900">Gabe Sheffer</dt>
              <dd>Rhythm Guitar/Vocals/Songwriter</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-900">Josh Cohen</dt>
              <dd>Lead Guitar/Backing Vocals</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-900">Neel Blair</dt>
              <dd>Piano/Keys/Organ</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-900">Paul Berkelhamer</dt>
              <dd>Sax/Keys</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-900">
                Andrew Zimmerman
              </dt>
              <dd>Slide Guitar</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-900">Fritz Marial</dt>
              <dd>Bass Guitar (Recording)</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-900">Ed Tremblay</dt>
              <dd>Bass Guitar (Live Shows)</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-900">Brian Compton</dt>
              <dd>Drums/Percussion</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-md border-y border-neutral-200 py-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[#087f8c]">
          Shows
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-600">
          No upcoming shows at this time.
        </p>
      </section>
    </SlowMovingBirdShell>
  );
}
