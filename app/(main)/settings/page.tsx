"use client"

import type React from "react"

import { useState } from "react"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const { toast } = useToast()
  const [storeSettings, setStoreSettings] = useState({
    name: "My POS Store",
    address: "123 Main Street, City, Country",
    phone: "+1 (555) 123-4567",
    email: "contact@myposstore.com",
    taxRate: 10,
    currency: "USD",
    receiptFooter: "Thank you for your purchase!",
  })

  const [userSettings, setUserSettings] = useState({
    name: "Admin User",
    email: "admin@myposstore.com",
    darkMode: false,
    notifications: true,
    autoLogout: true,
    logoutTime: 30,
  })

  const handleStoreSettingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setStoreSettings((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleUserSettingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setUserSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setUserSettings((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <Button onClick={handleSaveSettings}>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="store" className="space-y-4">
        <TabsList>
          <TabsTrigger value="store">Store Settings</TabsTrigger>
          <TabsTrigger value="user">User Settings</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="store" className="space-y-4">
          <div className="grid gap-6">
            <div>
              <h3 className="text-lg font-medium">Store Information</h3>
              <p className="text-sm text-muted-foreground">
                Configure your store details that will appear on receipts and invoices.
              </p>
            </div>
            <Separator />
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="store-name">Store Name</Label>
                  <Input id="store-name" name="name" value={storeSettings.name} onChange={handleStoreSettingChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-email">Email</Label>
                  <Input
                    id="store-email"
                    name="email"
                    type="email"
                    value={storeSettings.email}
                    onChange={handleStoreSettingChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="store-address">Address</Label>
                <Textarea
                  id="store-address"
                  name="address"
                  value={storeSettings.address}
                  onChange={handleStoreSettingChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="store-phone">Phone</Label>
                  <Input
                    id="store-phone"
                    name="phone"
                    value={storeSettings.phone}
                    onChange={handleStoreSettingChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-currency">Currency</Label>
                  <Input
                    id="store-currency"
                    name="currency"
                    value={storeSettings.currency}
                    onChange={handleStoreSettingChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tax-rate">Tax Rate (%)</Label>
                  <Input
                    id="tax-rate"
                    name="taxRate"
                    type="number"
                    min="0"
                    max="100"
                    value={storeSettings.taxRate}
                    onChange={handleStoreSettingChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="receipt-footer">Receipt Footer</Label>
                <Textarea
                  id="receipt-footer"
                  name="receiptFooter"
                  value={storeSettings.receiptFooter}
                  onChange={handleStoreSettingChange}
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="user" className="space-y-4">
          <div className="grid gap-6">
            <div>
              <h3 className="text-lg font-medium">User Preferences</h3>
              <p className="text-sm text-muted-foreground">Customize your user experience and account settings.</p>
            </div>
            <Separator />
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="user-name">Name</Label>
                  <Input id="user-name" name="name" value={userSettings.name} onChange={handleUserSettingChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user-email">Email</Label>
                  <Input
                    id="user-email"
                    name="email"
                    type="email"
                    value={userSettings.email}
                    onChange={handleUserSettingChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications">Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications about sales and inventory.</p>
                  </div>
                  <Switch
                    id="notifications"
                    checked={userSettings.notifications}
                    onCheckedChange={(checked) => handleSwitchChange("notifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-logout">Auto Logout</Label>
                    <p className="text-sm text-muted-foreground">Automatically log out after period of inactivity.</p>
                  </div>
                  <Switch
                    id="auto-logout"
                    checked={userSettings.autoLogout}
                    onCheckedChange={(checked) => handleSwitchChange("autoLogout", checked)}
                  />
                </div>

                {userSettings.autoLogout && (
                  <div className="space-y-2">
                    <Label htmlFor="logout-time">Logout Time (minutes)</Label>
                    <Input
                      id="logout-time"
                      name="logoutTime"
                      type="number"
                      min="1"
                      max="120"
                      value={userSettings.logoutTime}
                      onChange={handleUserSettingChange}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <div className="grid gap-6">
            <div>
              <h3 className="text-lg font-medium">System Settings</h3>
              <p className="text-sm text-muted-foreground">Configure system-wide settings and integrations.</p>
            </div>
            <Separator />
            <div className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-sm font-medium">Database Backup</p>
                    <p className="text-sm text-muted-foreground">Last backup: Never</p>
                  </div>
                  <Button size="sm" className="ml-auto">
                    Backup Now
                  </Button>
                </div>
              </div>

              <div className="rounded-md bg-muted p-4">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-sm font-medium">Payment Integrations</p>
                    <p className="text-sm text-muted-foreground">Configure payment gateways and processors</p>
                  </div>
                  <Button size="sm" variant="outline" className="ml-auto">
                    Configure
                  </Button>
                </div>
              </div>

              <div className="rounded-md bg-muted p-4">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-sm font-medium">System Updates</p>
                    <p className="text-sm text-muted-foreground">Current version: 1.0.0</p>
                  </div>
                  <Button size="sm" variant="outline" className="ml-auto">
                    Check for Updates
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

