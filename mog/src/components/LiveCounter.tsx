"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { COUNTER, MEDIA } from "@/config/mog";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Contorul este pur decorativ — pornește de la o valoare fixă și crește
 * de la sine plus la fiecare click. Nu reprezintă date reale.
 */
export function LiveCounter() {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(COUNTER.start);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 7) + 1);
    }, 1400);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <section className="relative flex h-[100svh] items-center justify-center overflow-hidden">
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        aria-label="Adaugă unul la contorul decorativ"
        className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center"
      >
        <Image
          src={MEDIA.counterBackdrop}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.13_0.015_55)_0%,oklch(0.13_0.015_55/0.6)_50%,oklch(0.13_0.015_55)_100%)]" />

        <span className="relative z-10 mb-4 font-mono text-[13px] uppercase tracking-[0.3em] text-mogcyan">
          {COUNTER.eyebrow}
        </span>
        <span
          className={`relative z-10 font-display text-mogtext ${reduced ? "" : "[animation:countUp_0.6s_ease_alternate_infinite]"}`}
          style={{ fontSize: "clamp(50px, 12vw, 160px)" }}
        >
          {count.toLocaleString("en-US")}
        </span>
        <span
          className="relative z-10 mt-2.5 font-display tracking-[0.2em] text-mogorange"
          style={{ fontSize: "clamp(18px, 3vw, 30px)" }}
        >
          {COUNTER.label}
        </span>
        <span className="relative z-10 mt-4 font-mono text-xs text-mogmuted">{COUNTER.hint}</span>
      </button>
    </section>
  );
}
