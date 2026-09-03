import Image from "next/image";

type ActivePage = "home" | "videos" | "photos";

const navItems = [
  { label: "Home", href: "/slowmovingbird", page: "home" },
  { label: "Videos", href: "/slowmovingbird/videos", page: "videos" },
  { label: "Photos", href: "/slowmovingbird/photos", page: "photos" },
  { label: "Contact", href: "/slowmovingbird#contact", page: "contact" },
];

export function SlowMovingBirdHeader({ activePage }: { activePage: ActivePage }) {
  return (
    <header id="home" className="text-center">
      <Image
        src="/slowmovingbird/smb-logo-full.jpg"
        alt="Slow Moving Bird"
        width={1118}
        height={1111}
        priority
        className="mx-auto h-auto w-full max-w-[260px] sm:max-w-[320px]"
      />
      <nav
        aria-label="Slow Moving Bird"
        className="mt-6 text-sm text-slate-500"
      >
        {navItems.map((item, index) => (
          <span key={item.href}>
            <a
              href={item.href}
              className={
                item.page === activePage
                  ? "text-slate-950 underline underline-offset-4"
                  : "underline underline-offset-4 hover:text-slate-950"
              }
            >
              {item.label}
            </a>
            {index < navItems.length - 1 ? (
              <span className="mx-2 text-slate-300">·</span>
            ) : null}
          </span>
        ))}
      </nav>
    </header>
  );
}

export function SlowMovingBirdShell({
  activePage,
  children,
}: {
  activePage: ActivePage;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-slate-950">
      <div className="mx-auto max-w-2xl px-6 py-8 sm:py-10">
        <SlowMovingBirdHeader activePage={activePage} />
        {children}
      </div>
    </main>
  );
}
