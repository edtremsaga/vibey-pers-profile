import type { Metadata } from "next";
import { SlowMovingBirdShell } from "../_components";

export const metadata: Metadata = {
  title: "Slow Moving Bird Videos | Vibey Craft",
  description: "Live videos from Slow Moving Bird.",
};

const videos = [
  {
    title: "A Country That Makes No Sense",
    embedUrl: "https://www.youtube.com/embed/yMr55lUSVok",
  },
  {
    title: "Here’s To You When I Woke Up",
    embedUrl: "https://www.youtube.com/embed/YD0AfMgDvtM",
  },
  {
    title: "The Pawns That Punish The King",
    embedUrl: "https://www.youtube.com/embed/tyeVwHICWf4",
  },
];

export default function SlowMovingBirdVideosPage() {
  return (
    <SlowMovingBirdShell activePage="videos">
      <section className="mx-auto mt-10 w-full max-w-xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Videos
        </h1>
        <div className="mt-8 space-y-12">
          {videos.map((video) => (
            <article key={video.embedUrl}>
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                {video.title}
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Live at SeaMonster Lounge — Seattle
              </p>
              <div className="mx-auto mt-4 aspect-[9/16] w-full max-w-[340px] overflow-hidden bg-slate-100">
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
