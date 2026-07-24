"use client";

import Image from "next/image";
import { ARCHIVE, GALLERY } from "@/config/mog";
import { useMog } from "@/lib/mog-state";
import { MoggedStamp } from "./MoggedStamp";

const ROTATIONS = ["-6deg", "4deg", "-3deg", "5deg", "-4deg", "6deg"];

function Row({
  items,
  direction,
  tone,
}: {
  items: typeof GALLERY;
  direction: "a" | "b";
  tone: "orange" | "cyan";
}) {
  const { stampedId, mogCard } = useMog();
  // dublăm lista ca bucla să pară continuă
  const loop = [...items, ...items];
  const border = tone === "cyan" ? "border-mogcyan/60" : "border-mogorange/60";

  return (
    <div className={`float-row float-row-${direction}`}>
      {loop.map((img, i) => (
        <button
          key={`${direction}-${img.id}-${i}`}
          type="button"
          onClick={() => mogCard(img.id)}
          aria-label={`MOG: ${img.tag}`}
          className={`float-item relative h-[130px] w-[130px] flex-none cursor-pointer overflow-hidden rounded-full border-2 ${border}`}
          style={{ ["--r" as string]: ROTATIONS[i % ROTATIONS.length] }}
        >
          <Image src={img.src} alt={img.alt} fill sizes="130px" className="object-cover" />
          {stampedId === img.id && <MoggedStamp size="sm" color={tone} />}
        </button>
      ))}
    </div>
  );
}

export function ArchiveCarousels() {
  const half = Math.ceil(GALLERY.length / 2);
  const rowA = GALLERY.slice(0, half);
  const rowB = GALLERY.slice(half);

  return (
    <section className="relative overflow-hidden py-10 pb-16">
      <p className="mb-7 text-center font-mono text-[13px] uppercase tracking-[0.3em] text-mogcyan">
        {ARCHIVE.eyebrow}
      </p>
      <div className="space-y-5 overflow-hidden">
        <Row items={rowA} direction="a" tone="orange" />
        <Row items={rowB} direction="b" tone="cyan" />
      </div>
    </section>
  );
}
