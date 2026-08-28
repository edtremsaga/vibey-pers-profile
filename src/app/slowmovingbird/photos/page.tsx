import type { Metadata } from "next";
import { SlowMovingBirdShell } from "../_components";

export const metadata: Metadata = {
  title: "Slow Moving Bird Photos | Vibey Craft",
  description: "Photos from Slow Moving Bird.",
};

export default function SlowMovingBirdPhotosPage() {
  return (
    <SlowMovingBirdShell activePage="photos">
      <section className="mx-auto mt-10 w-full max-w-md text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Photos
        </h1>
        <p className="mt-5 text-xl leading-relaxed text-slate-700">
          Photos coming soon.
        </p>
      </section>
    </SlowMovingBirdShell>
  );
}
