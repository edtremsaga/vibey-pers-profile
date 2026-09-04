import type { Metadata } from "next";
import { SlowMovingBirdShell } from "./_components";

export const metadata: Metadata = {
  title: "Slow Moving Bird | Vibey Craft",
  description:
    "Slow Moving Bird is a rock band exploring the trials, tribulations, and quiet victories of life in America.",
};

const songs = [
  "Who Killed Biggie Smalls",
  "Miss Communication",
  "49",
  "Penitentiary",
  "A Country That Makes No Sense",
  "The Pawns That Punish The King",
  "Level Set",
  "Zero Contact",
  "Walkin On Water",
  "Mookie Betts",
  "Here’s To You When I Woke Up",
];

export default function SlowMovingBirdPage() {
  return (
    <SlowMovingBirdShell activePage="home">
      <section className="mx-auto mt-10 w-full max-w-xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          About the Band
        </h1>
        <div className="mx-auto mt-5 max-w-xl space-y-4 text-lg leading-relaxed text-slate-700">
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
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-950">
            Band Members
          </h2>
          <dl className="mt-5 space-y-3 text-base leading-relaxed text-slate-700">
            <div>
              <dt className="font-semibold text-slate-950">Gabe Sheffer</dt>
              <dd>Rhythm Guitar/Vocals</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-950">Josh Cohen</dt>
              <dd>Lead Guitar/Backing Vocals</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-950">Neel Blair</dt>
              <dd>Piano/Keys/Organ</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-950">Paul Berkelhamer</dt>
              <dd>Sax/Keys</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-950">
                Andrew Zimmerman
              </dt>
              <dd>Slide Guitar</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-950">Fritz Marial</dt>
              <dd>Bass Guitar (Recording)</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-950">Ed Tremblay</dt>
              <dd>Bass Guitar (Live Shows)</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-950">Brian Compton</dt>
              <dd>Drums/Percussion</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-md border-y border-slate-200 py-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
          Shows
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          No upcoming shows at this time.
        </p>
      </section>

      <section className="mx-auto mt-8 w-full max-w-md">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-slate-950">
          Songs
        </h2>
        <ol className="list-decimal space-y-3 pl-6 text-base leading-relaxed text-slate-700">
          {songs.map((song) => (
            <li key={song} className="pl-1">
              {song}
            </li>
          ))}
        </ol>
      </section>

      <section
        id="contact"
        className="mx-auto mt-10 w-full max-w-md border-t border-slate-200 pt-6 text-center"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
          Contact
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          <a
            href="mailto:gabe@slowmovingbird.com"
            className="underline underline-offset-4 hover:text-slate-950"
          >
            gabe@slowmovingbird.com
          </a>
        </p>
      </section>
    </SlowMovingBirdShell>
  );
}
