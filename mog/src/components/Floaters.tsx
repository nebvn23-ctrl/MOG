"use client";

import Image from "next/image";
import { GALLERY } from "@/config/mog";
import { useMog } from "@/lib/mog-state";
import { MoggedStamp } from "./MoggedStamp";

/** Poziții ancorate: primele de la stânga, ultimele de la dreapta.
 *  Astfel niciun card nu poate depăși containerul, la nicio lățime. */
const FLOATERS = [
  { idx: 6, style: { left: "1%", top: "10px" }, rot: -5 },
  { idx: 7, style: { left: "24%", top: "120px" }, rot: 4 },
  { idx: 8, style: { left: "46%", top: "0px" }, rot: -5 },
  { idx: 9, style: { right: "16%", top: "100px" }, rot: 4 },
  { idx: 10, style: { right: "1%", top: "30px" }, rot: -5 },
];

/** Fâșia cu poze care „plutesc" între hero și lore. Ascunsă pe mobil. */
export function Floaters() {
  const { stampedId, mogCard } = useMog();

  return (
    <section
      aria-hidden="true"
      className="relative mx-auto hidden h-[340px] max-w-[1100px] overflow-hidden px-6 pt-5 md:block"
    >
      {FLOATERS.map((f) => {
        const img = GALLERY[f.idx % GALLERY.length];
        return (
          <button
            key={img.id}
            type="button"
            onClick={() => mogCard(img.id)}
            tabIndex={-1}
            className="absolute h-[150px] w-[150px] cursor-pointer bg-mogtext p-2 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            style={{ ...f.style, transform: `rotate(${f.rot}deg)` }}
          >
            <span className="relative block h-full w-full">
              <Image
                src={img.src}
                alt=""
                fill
                sizes="150px"
                className="object-cover"
              />
              {stampedId === img.id && <MoggedStamp size="md" />}
            </span>
          </button>
        );
      })}
    </section>
  );
}
