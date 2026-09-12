import type { Metadata } from "next";
import Image from "next/image";
import { SlowMovingBirdShell } from "../_components";

export const metadata: Metadata = {
  title: "Slow Moving Bird Photos",
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
  {
    src: "/slowmovingbird/photos/slow-moving-bird-sax-trumpet.jpg",
    alt: "Slow Moving Bird musicians performing with saxophone and trumpet",
    width: 960,
    height: 720,
  },
];

const studioPhotos = [
  {
    src: "/slowmovingbird/photos/normandy-studio-2026/normandy-studio-2026-01.jpg",
    alt: "Slow Moving Bird recording at London Bridge Studio in summer 2026",
    width: 720,
    height: 960,
  },
  {
    src: "/slowmovingbird/photos/normandy-studio-2026/normandy-studio-2026-02.jpg",
    alt: "Slow Moving Bird recording at London Bridge Studio in summer 2026",
    width: 1536,
    height: 2048,
  },
  {
    src: "/slowmovingbird/photos/normandy-studio-2026/normandy-studio-2026-03.jpg",
    alt: "Slow Moving Bird recording at London Bridge Studio in summer 2026",
    width: 1536,
    height: 2048,
  },
  {
    src: "/slowmovingbird/photos/normandy-studio-2026/normandy-studio-2026-04.jpg",
    alt: "Slow Moving Bird recording at London Bridge Studio in summer 2026",
    width: 1536,
    height: 2048,
  },
  {
    src: "/slowmovingbird/photos/normandy-studio-2026/normandy-studio-2026-05.jpg",
    alt: "Slow Moving Bird recording at London Bridge Studio in summer 2026",
    width: 1536,
    height: 2048,
  },
  {
    src: "/slowmovingbird/photos/normandy-studio-2026/normandy-studio-2026-06.jpg",
    alt: "Slow Moving Bird recording at London Bridge Studio in summer 2026",
    width: 1536,
    height: 2048,
  },
  {
    src: "/slowmovingbird/photos/normandy-studio-2026/london-bridge-studio-2026-07.jpg",
    alt: "Slow Moving Bird guitarist recording at London Bridge Studio in summer 2026",
    width: 1440,
    height: 1440,
  },
  {
    src: "/slowmovingbird/photos/normandy-studio-2026/london-bridge-studio-2026-08.jpg",
    alt: "Slow Moving Bird recording at London Bridge Studio in summer 2026",
    width: 2048,
    height: 1882,
  },
  {
    src: "/slowmovingbird/photos/normandy-studio-2026/london-bridge-studio-2026-10.jpg",
    alt: "Slow Moving Bird at London Bridge Studio in summer 2026",
    width: 5712,
    height: 4284,
  },
];

export default function SlowMovingBirdPhotosPage() {
  return (
    <SlowMovingBirdShell activePage="photos">
      <section className="mx-auto mt-10 w-full max-w-xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-[#087f8c]">
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

        <section className="mt-16 border-t border-[#d9d9d9] pt-12">
          <h2 className="text-3xl font-semibold tracking-tight text-[#087f8c]">
            In the Studio
          </h2>
          <p className="mt-2 text-lg text-[#555]">
            London Bridge Studio Summer 2026
          </p>
          <div className="mt-8 space-y-8">
            {studioPhotos.map((photo) => (
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
      </section>
    </SlowMovingBirdShell>
  );
}
