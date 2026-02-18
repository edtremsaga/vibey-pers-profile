export default function Learnings() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[160px_1fr]">
          {/* Left rail */}
          <aside className="md:pt-1">
            <div className="border-l border-neutral-200 pl-4">
              <p className="text-base font-semibold tracking-wide text-neutral-700">
                VIBE CODING
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                Building small software products with AI tooling as my partner.
              </p>
              <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
                After decades in product and engineering leadership, I now build small AI-assisted products and help teams make clearer, lower-risk product decisions under real-world constraints.
              </p>
              <p className="mt-4 text-sm">
                <a
                  href="/"
                  className="text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
                >
                  Home
                </a>
              </p>
              <p className="mt-2 text-sm text-neutral-900 font-medium">
                Learnings
              </p>
            </div>
          </aside>

          {/* Content */}
          <div>
            <header className="mb-14">
              <h1 className="mb-4 text-4xl font-semibold tracking-tight">
                Learnings from Building Apps Using AI Tooling
              </h1>
            </header>

            <article className="space-y-10">
              <section>
                <h2 className="mb-4 text-lg font-medium text-neutral-900">
                  1. Experiment with AI dev environments to find what works best for you.
                </h2>
                <p className="text-base leading-relaxed text-neutral-700">
                  I tried Google AI Studio, Lovable, Replit, and Cursor. I ultimately decided that Cursor was the best AI dev environment for hands-on development, ChatGPT Pro worked best as my product management and systems-thinking tool, GitHub for source control, and Vercel for app hosting and analytics. Assigning clear roles to each tool made the overall workflow much more effective.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-lg font-medium text-neutral-900">
                  2. Treat every prompt as a contract, not a command.
                </h2>
                <p className="text-base leading-relaxed text-neutral-700">
                  For each prompt I provide to an AI dev tool, I now enforce a rule: the AI must explain back what it thinks I asked for, ask clarifying questions, and propose recommendations with pros and cons before writing code. Without these guardrails, AI tools will happily generate code that doesn&apos;t do what you intended—or worse, break functionality that was already working.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-lg font-medium text-neutral-900">
                  3. Do not rely on AI tools for safe code reverts.
                </h2>
                <p className="text-base leading-relaxed text-neutral-700">
                  Code reverts using AI tooling do not always work well. I had instances where the dev tool did not check in with me to understand what I wanted to accomplish, then wrote code that broke the app and could not reliably back the changes out—each revert sometimes made things worse. Having clean, known-good checkpoints in GitHub that I could revert to manually saved me multiple times.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-lg font-medium text-neutral-900">
                  4. Understand the risks of automatic deployments.
                </h2>
                <p className="text-base leading-relaxed text-neutral-700">
                  Once Vercel is wired to GitHub, every commit automatically triggers a build and deployment. This is powerful but risky if your app is already in production. It forces you to think about preview deployments, branch discipline, or pausing auto-deploys for riskier changes so you don&apos;t accidentally ship broken code to users.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-lg font-medium text-neutral-900">
                  5. Vibe coding doesn&apos;t eliminate testing or debugging.
                </h2>
                <p className="text-base leading-relaxed text-neutral-700">
                  It&apos;s called vibe coding, but nobody is calling it vibe testing or vibe debugging. Testing and debugging are still hard. Expect to spend significant hands-on time running your app, finding bugs, clearly describing them to the AI tool, and validating whether a proposed fix actually works.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-lg font-medium text-neutral-900">
                  6. Cross-device and cross-browser behavior still requires manual testing.
                </h2>
                <p className="text-base leading-relaxed text-neutral-700">
                  Getting an app to run correctly across devices and browsers is challenging. For example, my apps targeted Safari and Chrome on both Mac and iPhone, yet behavior differed across each environment. AI tooling doesn&apos;t remove the need for real-device testing—in fact, it makes it more important because you can move faster into broken states on different devices.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-lg font-medium text-neutral-900">
                  7. Separate product thinking from code development and execution using different AI tools.
                </h2>
                <p className="text-base leading-relaxed text-neutral-700">
                  I use ChatGPT Pro for product research, product planning, and PRD development. Once the product ideas are in a solid draft state, I upload them into Cursor to get refinements before writing code. Using two AI tools with different strengths gives me non-overlapping perspectives, which improves the quality of my product decisions.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-lg font-medium text-neutral-900">
                  8. Instrument heavily and use multiple AIs for diagnostics.
                </h2>
                <p className="text-base leading-relaxed text-neutral-700">
                  I instrument apps heavily during development. Diagnostic logs become invaluable for debugging, performance tuning, and optimization. I share logs with both Cursor and ChatGPT to get independent analysis, identify potential issues, and receive recommendations on improving performance. Taking this multi-AI approach helped me produce better app outcomes.
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
