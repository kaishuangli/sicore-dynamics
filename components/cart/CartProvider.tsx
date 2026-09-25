"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartLine, CartState } from "@/lib/cart/types";
import { getThirdPartyProduct } from "@/lib/third-party-products";

const STORAGE_KEY = "sicore-third-party-cart-v1";

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  subtotalCents: number;
  addItem: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
  ready: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

function loadCart(): CartState {
  if (typeof window === "undefined") return { lines: [] };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { lines: [] };
    const parsed = JSON.parse(raw) as CartState;
    if (!parsed || !Array.isArray(parsed.lines)) return { lines: [] };
    return {
      lines: parsed.lines
        .filter((line) => typeof line.productId === "string" && line.quantity > 0)
        .map((line) => ({
          productId: line.productId,
          quantity: Math.min(99, Math.max(1, Math.floor(line.quantity))),
        })),
    };
  } catch {
    return { lines: [] };
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLines(loadCart().lines);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ lines } satisfies CartState));
  }, [lines, ready]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
    const subtotalCents = lines.reduce((sum, line) => {
      const product = getThirdPartyProduct(line.productId);
      if (!product) return sum;
      return sum + product.priceCents * line.quantity;
    }, 0);

    return {
      lines,
      itemCount,
      subtotalCents,
      ready,
      addItem: (productId, quantity = 1) => {
        if (!getThirdPartyProduct(productId)) return;
        setLines((current) => {
          const existing = current.find((line) => line.productId === productId);
          if (existing) {
            return current.map((line) =>
              line.productId === productId
                ? { ...line, quantity: Math.min(99, line.quantity + quantity) }
                : line,
            );
          }
          return [...current, { productId, quantity: Math.min(99, Math.max(1, quantity)) }];
        });
      },
      setQuantity: (productId, quantity) => {
        setLines((current) => {
          if (quantity <= 0) return current.filter((line) => line.productId !== productId);
          return current.map((line) =>
            line.productId === productId
              ? { ...line, quantity: Math.min(99, Math.max(1, Math.floor(quantity))) }
              : line,
          );
        });
      },
      removeItem: (productId) => {
        setLines((current) => current.filter((line) => line.productId !== productId));
      },
      clear: () => setLines([]),
    };
  }, [lines, ready]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
