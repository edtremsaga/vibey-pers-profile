import type { Metadata } from "next";
import { SlowMovingBirdShell } from "../_components";

export const metadata: Metadata = {
  title: "Slow Moving Bird Videos",
  description: "Live videos from Slow Moving Bird.",
};

const videos = [
  {
    title: "49",
    embedUrl: "https://www.youtube.com/embed/hSr3ahwbw6c",
    performance: "Live at the Orient Express, Seattle — July 15, 2026",
  },
  {
    title: "A Country That Makes No Sense",
    embedUrl: "https://www.youtube.com/embed/yMr55lUSVok",
    performance: "Live at SeaMonster Lounge — Seattle",
  },
  {
    title: "Here’s To You When I Woke Up",
    embedUrl: "https://www.youtube.com/embed/YD0AfMgDvtM",
    performance: "Live at SeaMonster Lounge — Seattle",
  },
  {
    title: "The Pawns That Punish The King",
    embedUrl: "https://www.youtube.com/embed/tyeVwHICWf4",
    performance: "Live at SeaMonster Lounge — Seattle",
  },
];

export default function SlowMovingBirdVideosPage() {
  return (
    <SlowMovingBirdShell activePage="videos">
      <section className="mx-auto mt-10 w-full max-w-xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-[#087f8c]">
          Videos
        </h1>
        <div className="mt-8 space-y-12">
          {videos.map((video) => (
            <article key={video.embedUrl}>
              <h2 className="text-xl font-semibold tracking-tight text-[#087f8c]">
                {video.title}
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                {video.performance}
              </p>
              <div className="mx-auto mt-4 aspect-[9/16] w-full max-w-[340px] overflow-hidden bg-neutral-100">
                <iframe
                  src={video.embedUrl}
                  title={`${video.title} by Slow Moving Bird`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </SlowMovingBirdShell>
  );
}
