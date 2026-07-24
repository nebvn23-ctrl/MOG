"use client";

import Image from "next/image";
import { GALLERY, GALLERY_COPY } from "@/config/mog";
import { useMog } from "@/lib/mog-state";
import { MoggedStamp } from "./MoggedStamp";

export function Gallery() {
  const { stampedId, mogCard, moggedCount } = useMog();

  return (
    <section id="gallery" className="mx-auto max-w-[1400px] px-6 pb-32 pt-24">
      <div className="mb-11 flex flex-wrap items-baseline justify-between gap-4">
        <h2
          className="reveal-up m-0 font-display tracking-wide"
          style={{ fontSize: "clamp(38px, 6vw, 72px)" }}
        >
          {GALLERY_COPY.title}
        </h2>
        <p className="font-mono text-sm tracking-wide text-mogcyan" aria-live="polite">
          {moggedCount} {GALLERY_COPY.hint}
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
        {GALLERY.map((img) => (
          <button
            key={img.id}
            type="button"
            onClick={() => mogCard(img.id)}
            aria-label={`MOG: ${img.tag}`}
            className="reveal-pop group relative aspect-square cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-mogpanel"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 300px"
              className="object-cover transition-transform duration-[350ms] ease-[cubic-bezier(.2,.9,.3,1.4)] group-hover:scale-[1.08] group-hover:-rotate-2 group-hover:saturate-150"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-mogpanel/90 to-transparent px-3 py-2.5 text-left font-mono text-[11px] uppercase tracking-wide text-mogtext">
              {img.tag}
            </span>
            {stampedId === img.id && <MoggedStamp size="lg" />}
          </button>
        ))}
      </div>
    </section>
  );
}
