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
          Slow Moving Bird
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-slate-700">
          Slow Moving Bird is a rock band exploring the trials, tribulations, and
          quiet victories of life in America.
        </p>
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
