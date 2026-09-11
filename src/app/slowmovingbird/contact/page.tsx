import type { Metadata } from "next";
import { SlowMovingBirdShell } from "../_components";

export const metadata: Metadata = {
  title: "Slow Moving Bird Contact | Vibey Craft",
  description: "Contact Slow Moving Bird.",
};

export default function SlowMovingBirdContactPage() {
  return (
    <SlowMovingBirdShell activePage="contact">
      <section
        className="mx-auto mt-10 w-full max-w-md text-center"
      >
        <h1 className="text-4xl font-semibold tracking-tight text-[#087f8c]">
          Contact
        </h1>
        <p className="mt-4 text-base leading-relaxed text-neutral-600">
          <a
            href="mailto:gabe@slowmovingbird.com"
            className="text-[#087f8c] underline underline-offset-4 hover:text-[#a32987]"
          >
            gabe@slowmovingbird.com
          </a>
        </p>
      </section>
    </SlowMovingBirdShell>
  );
}
