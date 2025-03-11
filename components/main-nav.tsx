"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ShoppingCart, LayoutDashboard, Package, Settings, Users, Truck, Store } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <ShoppingCart className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">POS System</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/dashboard"
          className={cn(
            "transition-colors hover:text-primary flex items-center gap-1",
            pathname === "/dashboard" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <LayoutDashboard className="h-4 w-4" />
          <span className="hidden md:block">Dashboard</span>
        </Link>
        <Link
          href="/products"
          className={cn(
            "transition-colors hover:text-primary flex items-center gap-1",
            pathname === "/products" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Package className="h-4 w-4" />
          <span className="hidden md:block">Products</span>
        </Link>
        <Link
          href="/pos"
          className={cn(
            "transition-colors hover:text-primary flex items-center gap-1",
            pathname === "/pos" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden md:block">POS</span>
        </Link>
        <Link
          href="/customers"
          className={cn(
            "transition-colors hover:text-primary flex items-center gap-1",
            pathname === "/customers" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Users className="h-4 w-4" />
          <span className="hidden md:block">Customers</span>
        </Link>
        <Link
          href="/fulfillment"
          className={cn(
            "transition-colors hover:text-primary flex items-center gap-1",
            pathname === "/fulfillment" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Truck className="h-4 w-4" />
          <span className="hidden md:block">Fulfillment</span>
        </Link>
        <Link
          href="/store"
          className={cn(
            "transition-colors hover:text-primary flex items-center gap-1",
            pathname === "/store" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Store className="h-4 w-4" />
          <span className="hidden md:block">Storefront</span>
        </Link>
        <Link
          href="/settings"
          className={cn(
            "transition-colors hover:text-primary flex items-center gap-1",
            pathname === "/settings" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Settings className="h-4 w-4" />
          <span className="hidden md:block">Settings</span>
        </Link>
      </nav>
    </div>
  )
}

