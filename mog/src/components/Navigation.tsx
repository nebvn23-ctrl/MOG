"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, SITE } from "@/config/mog";
import { useMog } from "@/lib/mog-state";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Graficul din nav este pur decorativ: un „chart” fictiv, generat local.
 * Nu reprezintă un preț real și nu se conectează la nicio sursă de date.
 */
function useFakeChart(enabled: boolean) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [label, setLabel] = useState("--");
  const priceRef = useRef(100);
  const seriesRef = useRef<number[]>([100]);

  useEffect(() => {
    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const s = seriesRef.current;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      if (s.length < 2) return;

      const min = Math.min(...s);
      const max = Math.max(...s);
      const span = max - min || 1;

      ctx.beginPath();
      s.forEach((v, i) => {
        const x = (i / (s.length - 1)) * w;
        const y = h - ((v - min) / span) * (h - 6) - 3;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.strokeStyle = "oklch(0.78 0.19 195)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    };

    draw();
    if (!enabled) {
      setLabel("+0.00%");
      return;
    }

    const id = window.setInterval(() => {
      const jump = Math.random() < 0.15 ? Math.random() * 30 : Math.random() * 6 - 1;
      priceRef.current = Math.max(20, priceRef.current + jump);
      const s = seriesRef.current;
      s.push(priceRef.current);
      if (s.length > 40) s.shift();
      const change = ((priceRef.current - 100) / 100) * 100;
      setLabel(`${change >= 0 ? "+" : ""}${change.toFixed(1)}%`);
      draw();
    }, 700);

    return () => window.clearInterval(id);
  }, [enabled]);

  return { canvasRef, label };
}

export function Navigation() {
  const { triggerMogMode } = useMog();
  const reduced = useReducedMotion();
  const { canvasRef, label } = useFakeChart(!reduced);
  const clicks = useRef(0);

  const onLogoClick = () => {
    clicks.current += 1;
    if (clicks.current >= 5) {
      clicks.current = 0;
      triggerMogMode();
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-white/[0.08] bg-mogbg/75 px-5 py-4 backdrop-blur-md sm:px-10">
      <button
        type="button"
        onClick={onLogoClick}
        aria-label={`${SITE.ticker} — apasă de cinci ori pentru o surpriză`}
        className="select-none font-display text-2xl tracking-wide text-mogorange sm:text-[26px]"
      >
        {SITE.ticker}
      </button>

      <div className="hidden items-center gap-2.5 font-mono text-xs tracking-wider text-mogcyan sm:flex">
        <canvas ref={canvasRef} width={140} height={36} className="block" aria-hidden="true" />
        <span aria-hidden="true">{label}</span>
        <span className="sr-only">Grafic decorativ, fără date reale de preț.</span>
      </div>

      <div className="flex gap-5 font-mono text-xs uppercase tracking-wider text-mogtext/80 sm:gap-7 sm:text-[13px]">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-mogorange">
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
