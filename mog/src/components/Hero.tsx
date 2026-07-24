"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HERO, MEDIA } from "@/config/mog";
import { CaBar } from "./CaBar";
import { useMog } from "@/lib/mog-state";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const { triggerMogMode } = useMog();
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);

  // Pornire robustă: unele browsere blochează autoplay până la o interacțiune,
  // iar dacă videoul chiar nu poate rula, afișăm o imagine în locul lui.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduced) return;

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    const onError = () => setVideoFailed(true);
    v.addEventListener("error", onError);

    tryPlay();
    const events: Array<keyof WindowEventMap> = ["click", "touchstart", "keydown", "scroll"];
    events.forEach((ev) => window.addEventListener(ev, tryPlay, { once: true, passive: true }));

    const t = window.setTimeout(() => {
      if (v.readyState === 0) setVideoFailed(true);
    }, 2500);

    return () => {
      v.removeEventListener("error", onError);
      events.forEach((ev) => window.removeEventListener(ev, tryPlay));
      window.clearTimeout(t);
    };
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    let raf: number | null = null;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setParallaxY(window.scrollY * 0.25));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const tickerLine = HERO.ticker.join("  ·  ");

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-16 text-center">
      <div className="absolute inset-0 overflow-hidden">
        {videoFailed ? (
          <Image
            src={MEDIA.counterBackdrop}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40 saturate-[1.2]"
          />
        ) : (
          <video
            ref={videoRef}
            src={MEDIA.heroVideo}
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="h-full w-full object-cover opacity-40 saturate-[1.2]"
            style={{ transform: `translateY(${parallaxY}px) scale(1.15)` }}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-mogbg/40 to-mogbg [background-position:0_90%]" />

      <div className="relative z-10">
        <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.3em] text-mogcyan">
          {HERO.eyebrow}
        </p>

        <h1
          onClick={triggerMogMode}
          className="relative m-0 cursor-pointer select-none font-display leading-[0.85] tracking-wide text-mogtext"
          style={{ fontSize: "clamp(70px, 16vw, 220px)" }}
        >
          {HERO.title}
          {!reduced && (
            <>
              <span
                aria-hidden="true"
                className="absolute inset-0 text-mogorange mix-blend-screen"
                style={{ animation: "glitchTop 3.2s infinite linear" }}
              >
                {HERO.title}
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 text-mogcyan mix-blend-screen"
                style={{ animation: "glitchBottom 3.6s infinite linear" }}
              >
                {HERO.title}
              </span>
            </>
          )}
        </h1>

        <p
          className="mt-1.5 font-display tracking-[0.15em] text-mogorange"
          style={{ fontSize: "clamp(22px, 4vw, 46px)" }}
        >
          {HERO.subtitle}
        </p>

        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-mogtext/85">
          {HERO.lead}
        </p>
      </div>

      <div className="relative z-10 mt-14 w-full max-w-[900px] overflow-hidden border-y border-white/15 py-3.5">
        <div
          className={`flex gap-14 whitespace-nowrap font-mono text-[15px] uppercase tracking-[0.12em] text-mogtext/70 ${
            reduced ? "" : "hero-marquee"
          }`}
          style={{ width: "max-content" }}
        >
          <span>{tickerLine}</span>
          <span aria-hidden="true">{tickerLine}</span>
        </div>
      </div>

      <p className="relative z-10 mt-5 font-mono text-xs tracking-[0.15em] text-mogmuted">
        {HERO.scrollHint}
      </p>

      <CaBar />
    </section>
  );
}
