"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type MogState = {
  /** Câte imagini au fost „mogged" prin click. */
  moggedCount: number;
  /** Id-ul cardului pe care tocmai a apărut ștampila (sau null). */
  stampedId: number | null;
  /** Marchează un card ca fiind „mogged"; ștampila dispare singură. */
  mogCard: (id: number) => void;
  /** MOG MODE: flash pe tot ecranul, declanșat din logo. */
  mogMode: boolean;
  triggerMogMode: () => void;
};

const Ctx = createContext<MogState | null>(null);

export function MogProvider({ children }: { children: React.ReactNode }) {
  const [moggedCount, setMoggedCount] = useState(0);
  const [stampedId, setStampedId] = useState<number | null>(null);
  const [mogMode, setMogMode] = useState(false);

  const mogCard = useCallback((id: number) => {
    setStampedId(id);
    setMoggedCount((c) => c + 1);
    window.setTimeout(() => {
      setStampedId((current) => (current === id ? null : current));
    }, 900);
  }, []);

  const triggerMogMode = useCallback(() => {
    setMogMode(true);
    window.setTimeout(() => setMogMode(false), 800);
  }, []);

  const value = useMemo(
    () => ({ moggedCount, stampedId, mogCard, mogMode, triggerMogMode }),
    [moggedCount, stampedId, mogCard, mogMode, triggerMogMode]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useMog() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useMog must be used inside <MogProvider>");
  return ctx;
}
