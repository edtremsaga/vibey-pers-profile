import type { Metadata } from "next";
import Image from "next/image";
import { SlowMovingBirdShell } from "../_components";

export const metadata: Metadata = {
  title: "Slow Moving Bird Shows",
  description:
    "See Slow Moving Bird at Slim’s Last Chance in Seattle on October 28, 2026 at 9 PM. Ages 21 and over.",
};

export default function SlowMovingBirdShowsPage() {
  return (
    <SlowMovingBirdShell activePage="shows">
      <section className="mx-auto mt-10 w-full max-w-xl">
        <h1 className="text-center text-4xl font-semibold tracking-tight text-[#087f8c]">
          Shows
        </h1>
        <article className="mt-8" aria-labelledby="slims-show-title">
          <Image
            src="/slowmovingbird/slow-moving-bird-slims-october-28-2026.png"
            alt="Slow Moving Bird concert poster featuring a bird skull in cream and red on a distressed black background. Event details follow below."
            width={932}
            height={1180}
            sizes="(max-width: 608px) calc(100vw - 48px), 560px"
            priority
            className="h-auto w-full"
          />
          <div className="mt-6 text-center">
            <h2
              id="slims-show-title"
              className="text-2xl font-semibold tracking-tight text-[#087f8c]"
            >
              Slow Moving Bird at Slim’s Last Chance
            </h2>
            <dl className="mt-5 space-y-4 text-base leading-relaxed text-neutral-700">
              <div>
                <dt className="font-semibold text-neutral-900">Date and time</dt>
                <dd>
                  <time dateTime="2026-10-28T21:00:00-07:00">
                    Wednesday, October 28, 2026 · 9 PM
                  </time>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-900">Venue</dt>
                <dd>
                  Slim’s Last Chance
                  <br />
                  5606 1st Ave S, Seattle, WA
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-900">Ages</dt>
                <dd>21 and over</dd>
              </div>
            </dl>
          </div>
        </article>
      </section>
    </SlowMovingBirdShell>
  );
}
