"use client";

import { MogProvider } from "@/lib/mog-state";
import { Overlays } from "@/components/Overlays";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Floaters } from "@/components/Floaters";
import { Lore } from "@/components/Lore";
import { ArchiveCarousels } from "@/components/ArchiveCarousels";
import { LiveCounter } from "@/components/LiveCounter";
import { Gallery } from "@/components/Gallery";
import { VideoSection, Footer } from "@/components/VideoSection";

export default function Home() {
  return (
    <MogProvider>
      <Overlays />
      <Navigation />
      <main>
        <Hero />
        <Floaters />
        <Lore />
        <ArchiveCarousels />
        <LiveCounter />
        <Gallery />
        <VideoSection />
      </main>
      <Footer />
    </MogProvider>
  );
}
