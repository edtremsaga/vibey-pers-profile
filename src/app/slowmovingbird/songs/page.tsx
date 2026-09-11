import type { Metadata } from "next";
import { SlowMovingBirdShell } from "../_components";

export const metadata: Metadata = {
  title: "Slow Moving Bird Songs | Vibey Craft",
  description: "Songs by Slow Moving Bird.",
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

export default function SlowMovingBirdSongsPage() {
  return (
    <SlowMovingBirdShell activePage="songs">
      <section className="mx-auto mt-8 w-full max-w-md">
        <h1 className="mb-6 text-center text-4xl font-semibold tracking-tight text-[#087f8c]">
          Songs
        </h1>
        <ol className="list-decimal space-y-3 pl-6 text-base leading-relaxed text-neutral-700">
          {songs.map((song) => (
            <li key={song} className="pl-1">
              {song}
            </li>
          ))}
        </ol>
      </section>
    </SlowMovingBirdShell>
  );
}
