import type React from "react"
import { CartProvider } from "./use-cart"

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>
}

