"use client";

type Props = {
  /** Mărimea textului ștampilei. */
  size?: "sm" | "md" | "lg";
  color?: "orange" | "cyan";
};

const SIZES = {
  sm: "text-[13px] border-2 px-2 py-0.5",
  md: "text-xl border-[3px] px-2.5 py-0.5",
  lg: "text-[34px] border-[5px] px-4 py-1.5",
};

/** Overlay-ul „MOGGED" care apare peste o imagine după click. */
export function MoggedStamp({ size = "md", color = "orange" }: Props) {
  const tone = color === "cyan" ? "text-mogcyan border-mogcyan" : "text-mogorange border-mogorange";
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
      <div
        className={`font-display -rotate-[14deg] ${SIZES[size]} ${tone}`}
        style={{ animation: "stampIn 0.9s ease-out" }}
      >
        MOGGED
      </div>
    </div>
  );
}
