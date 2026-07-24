import { FOOTER, MEDIA, VIDEO } from "@/config/mog";

export function VideoSection() {
  return (
    <section id="video" className="mx-auto max-w-[1000px] px-6 pb-40 pt-20 text-center">
      <p className="reveal-up mb-6 font-mono text-[13px] uppercase tracking-[0.3em] text-mogcyan">
        {VIDEO.eyebrow}
      </p>
      <h2
        className="reveal-up m-0 mb-10 font-display"
        style={{ fontSize: "clamp(34px, 5vw, 60px)" }}
      >
        {VIDEO.title}
      </h2>
      <video
        src={MEDIA.heroVideo}
        controls
        playsInline
        preload="metadata"
        className="aspect-video w-full rounded-sm bg-black object-cover"
      />
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-6 pb-10 pt-14 text-center">
      <p className="mb-2.5 font-display text-[22px] text-mogorange">{FOOTER.ticker}</p>
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-mogmuted">
        {FOOTER.tagline}
      </p>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-mogmuted/70">
        {FOOTER.disclaimer}
      </p>
    </footer>
  );
}
