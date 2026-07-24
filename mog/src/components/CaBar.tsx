"use client";

import { useState } from "react";
import { LINKS, isLive, shortenCA } from "@/config/mog";

/** Bara cu adresa contractului (copiabilă) + linkurile sociale. */
export function CaBar() {
  const [copied, setCopied] = useState(false);
  const hasCA = isLive(LINKS.contractAddress);
  const hasX = isLive(LINKS.x);
  const hasTg = isLive(LINKS.telegram);

  const copy = () => {
    if (!hasCA) return;
    navigator.clipboard
      .writeText(LINKS.contractAddress)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      })
      .catch(() => {});
  };

  return (
    <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3.5">
      <button
        type="button"
        onClick={copy}
        disabled={!hasCA}
        aria-label={hasCA ? "Copiază adresa contractului" : "Adresa contractului va fi anunțată"}
        className={`flex items-center gap-2.5 rounded-sm border px-4 py-2.5 font-mono text-[13px] tracking-wide transition-colors ${
          hasCA
            ? "cursor-pointer border-mogorange/50 bg-white/[0.03] text-mogtext hover:border-mogorange"
            : "cursor-not-allowed border-white/15 bg-white/[0.02] text-mogtext/60"
        }`}
      >
        <span className="text-mogcyan">CA:</span>
        <span>{shortenCA(LINKS.contractAddress)}</span>
        {hasCA && (
          <span className="text-[11px] text-mogorange">{copied ? "COPIED!" : "COPY"}</span>
        )}
      </button>

      {hasX ? (
        <a
          href={LINKS.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-sm border border-white/25 text-mogtext transition-colors hover:border-mogorange hover:text-mogorange"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
            <line x1="3" y1="3" x2="21" y2="21" />
            <line x1="21" y1="3" x2="3" y2="21" />
          </svg>
        </a>
      ) : (
        <span className="rounded-sm border border-dashed border-white/25 px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-wider text-mogtext/50">
          X — soon
        </span>
      )}

      {hasTg ? (
        <a
          href={LINKS.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-white/25 px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-wider text-mogtext transition-colors hover:border-mogorange hover:text-mogorange"
        >
          Telegram
        </a>
      ) : (
        <span className="rounded-sm border border-dashed border-white/25 px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-wider text-mogtext/50">
          TG — soon
        </span>
      )}
    </div>
  );
}
