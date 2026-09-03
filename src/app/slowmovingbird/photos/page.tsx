import type { Metadata } from "next";
import Image from "next/image";
import { SlowMovingBirdShell } from "../_components";

export const metadata: Metadata = {
  title: "Slow Moving Bird Photos | Vibey Craft",
  description: "Photos from Slow Moving Bird.",
};

const photos = [
  {
    src: "/slowmovingbird/photos/slow-moving-bird-live-band.png",
    alt: "Slow Moving Bird performing live at SeaMonster Lounge",
    width: 1902,
    height: 1524,
  },
  {
    src: "/slowmovingbird/photos/slow-moving-bird-sax.jpeg",
    alt: "Slow Moving Bird saxophonist performing live",
    width: 4713,
    height: 5584,
  },
  {
    src: "/slowmovingbird/photos/slow-moving-bird-guitar-vocal.jpeg",
    alt: "Slow Moving Bird guitarist and vocalist performing live",
    width: 2909,
    height: 4355,
  },
];

export default function SlowMovingBirdPhotosPage() {
  return (
    <SlowMovingBirdShell activePage="photos">
      <section className="mx-auto mt-10 w-full max-w-xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Photos
        </h1>
        <div className="mt-8 space-y-8">
          {photos.map((photo) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 768px) 576px, calc(100vw - 48px)"
              className="h-auto w-full"
            />
          ))}
        </div>
      </section>
    </SlowMovingBirdShell>
  );
}
