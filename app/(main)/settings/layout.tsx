import type React from "react"
import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "./sidebar-nav"

const sidebarNavItems = [
  {
    title: "General",
    href: "/settings",
  },
  {
    title: "Store",
    href: "/settings/store",
  },
  {
    title: "Payment",
    href: "/settings/payment",
  },
  {
    title: "Subscription",
    href: "/settings/subscription",
  },
  {
    title: "Notifications",
    href: "/settings/notifications",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="space-y-6 p-4 md:p-8 pt-6">
      <div className="space-y-0.5">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>
      <Separator />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}

