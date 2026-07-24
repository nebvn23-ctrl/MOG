import { LORE } from "@/config/mog";

export function Lore() {
  return (
    <section id="lore" className="mx-auto max-w-[900px] px-6 pb-32 pt-14 text-center">
      <p className="reveal-up mb-6 font-mono text-[13px] uppercase tracking-[0.3em] text-mogcyan">
        {LORE.eyebrow}
      </p>

      <h2
        className="reveal-up m-0 mb-14 font-display leading-[1.15] tracking-wide"
        style={{ fontSize: "clamp(30px, 5vw, 58px)" }}
      >
        {LORE.headline[0]}
        <br />
        {LORE.headline[1]}
        <br />
        <span className="text-mogorange">{LORE.headline[2]}</span> —
        <br />
        {LORE.headline[3]}
      </h2>

      <p className="reveal-up mx-auto max-w-[680px] text-xl leading-relaxed text-mogtext/85">
        {LORE.body}
      </p>

      <p className="reveal-pop mt-14 inline-block rounded-sm border border-mogorange/50 px-7 py-3.5 font-mono text-[13px] uppercase tracking-[0.15em] text-mogorange">
        {LORE.badge}
      </p>
    </section>
  );
}
