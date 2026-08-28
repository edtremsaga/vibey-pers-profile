import type { Metadata } from "next";
import { SlowMovingBirdShell } from "../_components";

export const metadata: Metadata = {
  title: "Slow Moving Bird Videos | Vibey Craft",
  description: "Live videos from Slow Moving Bird.",
};

export default function SlowMovingBirdVideosPage() {
  return (
    <SlowMovingBirdShell activePage="videos">
      <section className="mx-auto mt-10 w-full max-w-md text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Videos
        </h1>
        <p className="mt-5 text-xl leading-relaxed text-slate-700">
          Videos coming soon.
        </p>
      </section>
    </SlowMovingBirdShell>
  );
}
