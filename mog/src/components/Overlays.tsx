"use client";

import { useMog } from "@/lib/mog-state";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Overlays() {
  const { mogMode } = useMog();
  const reduced = useReducedMotion();

  return (
    <>
      {!reduced && <div className="scanline-overlay" aria-hidden="true" />}

      {mogMode && (
        <div
          className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-mogorange"
          style={{ animation: "flashInvert 0.8s ease-in-out" }}
          role="status"
          aria-label="MOG MODE"
        >
          <span
            className="font-display text-black"
            style={{ fontSize: "min(20vw, 220px)" }}
          >
            MOG MODE
          </span>
        </div>
      )}
    </>
  );
}
