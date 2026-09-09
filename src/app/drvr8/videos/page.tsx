import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DRVR.8 Live Videos",
  description: "Live performance videos from DRVR.8, an R.E.M. tribute band.",
};

const featuredVideo = {
  title: "Full Set — The Central Saloon",
  location: "Seattle, WA",
  embedUrl: "https://www.youtube.com/embed/7euWw0VrBzo",
};

const videos = [
  {
    title: "Fall on Me",
    location: "The Skylark · Seattle, WA",
    embedUrl: "https://www.youtube.com/embed/0gUU8VVMUJQ",
  },
  {
    title: "It's the End of the World as We Know It",
    location: "The Skylark · Seattle, WA",
    embedUrl: "https://www.youtube.com/embed/IEdqrmrAX-E",
  },
  {
    title: "Gardening at Night",
    location: "The Skylark · Seattle, WA",
    embedUrl: "https://www.youtube.com/embed/_jyvCezyzSE",
  },
];

function VideoEmbed({
  title,
  location,
  embedUrl,
  featured = false,
  portrait = false,
}: {
  title: string;
  location: string;
  embedUrl: string;
  featured?: boolean;
  portrait?: boolean;
}) {
  return (
    <section className={featured ? "space-y-4" : "space-y-3"}>
      <div className="text-center">
        <h2
          className={
            featured
              ? "text-2xl font-semibold tracking-tight text-[#087f8c]"
              : "text-xl font-semibold tracking-tight text-[#087f8c]"
          }
        >
          {title}
        </h2>
        <p className="mt-1 text-base leading-relaxed text-neutral-500">
          {location}
        </p>
      </div>
      <div
        className={portrait
          ? "mx-auto aspect-[9/16] w-full max-w-[216px] overflow-hidden bg-neutral-100"
          : "aspect-video w-full overflow-hidden bg-neutral-100"}
      >
        <iframe
          src={embedUrl}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default function Drvr8VideosPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-2xl px-6 py-8 sm:py-10">
        <header className="mt-2 text-center sm:mt-4">
          <Image
            src="/drvr8/drvr8-logo.png"
            alt="DRVR.8 — A Tribute to R.E.M."
            width={326}
            height={308}
            priority
            className="mx-auto h-auto w-full max-w-[280px] sm:max-w-[326px]"
          />
          <nav
            aria-label="DRVR.8"
            className="mt-6 text-sm text-neutral-500"
          >
            <a
              href="/drvr8"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Home
            </a>
            <span className="mx-2 text-neutral-300">·</span>
            <a
              href="/drvr8/videos"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
              aria-current="page"
            >
              Videos
            </a>
            <span className="mx-2 text-neutral-300">·</span>
            <a
              href="/drvr8/photos"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Photos
            </a>
            <span className="mx-2 text-neutral-300">·</span>
            <a
              href="/drvr8/songs"
              className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
            >
              Songs
            </a>
          </nav>
          <h1 className="mt-10 text-4xl font-semibold tracking-tight text-[#087f8c]">
            DRVR.8 Live
          </h1>
        </header>

        <div className="mt-10 space-y-12">
          <VideoEmbed
            title={featuredVideo.title}
            location={featuredVideo.location}
            embedUrl={featuredVideo.embedUrl}
            featured
          />

          <div className="space-y-10">
            <VideoEmbed
              title="Pretty Persuasion"
              location="Slim’s Last Chance · Seattle, WA · September 4, 2026"
              embedUrl="https://www.youtube.com/embed/_a4suadxWHo"
              portrait
            />
            <VideoEmbed
              title="Gardening at Night"
              location="Slim’s Last Chance · Seattle, WA · September 4, 2026"
              embedUrl="https://www.youtube.com/embed/USuS5M94tTc"
              portrait
            />
            {videos.map((video) => (
              <VideoEmbed
                key={video.embedUrl}
                title={video.title}
                location={video.location}
                embedUrl={video.embedUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
