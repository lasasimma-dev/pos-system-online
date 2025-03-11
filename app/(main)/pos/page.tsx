"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ShoppingCart, CreditCard, Printer, DollarSign } from "lucide-react"
import { ProductGrid } from "./product-grid"
import { CartItem } from "./cart-item"

export default function POSPage() {
  const [cart, setCart] = useState<
    {
      id: number
      name: string
      price: number
      quantity: number
    }[]
  >([
    { id: 1, name: "Laptop Pro X1", price: 1299.99, quantity: 1 },
    { id: 2, name: "Wireless Headphones", price: 149.99, quantity: 2 },
  ])

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + tax

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart(cart.filter((item) => item.id !== id))
    } else {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col md:flex-row">
      {/* Left side - Products */}
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Point of Sale</h2>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="w-full pl-8" />
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="electronics">Electronics</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
            <TabsTrigger value="accessories">Accessories</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <ProductGrid />
          </TabsContent>
          <TabsContent value="electronics">
            <ProductGrid category="Electronics" />
          </TabsContent>
          <TabsContent value="audio">
            <ProductGrid category="Audio" />
          </TabsContent>
          <TabsContent value="accessories">
            <ProductGrid category="Accessories" />
          </TabsContent>
        </Tabs>
      </div>

      {/* Right side - Cart */}
      <div className="w-full border-t md:w-[400px] md:border-l md:border-t-0">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <h3 className="font-medium">Shopping Cart</h3>
            </div>
            <Button variant="ghost" size="sm" onClick={clearCart}>
              Clear
            </Button>
          </div>

          <div className="flex-1 overflow-auto p-4">
            {cart.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Your cart is empty</h3>
                <p className="text-sm text-muted-foreground mt-2">Add products to the cart to create a sale</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
                ))}
              </div>
            )}
          </div>

          <div className="border-t p-4">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 text-base font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Button className="w-full gap-2">
                <CreditCard className="h-4 w-4" />
                Pay with Card
              </Button>
              <Button variant="outline" className="w-full gap-2">
                <DollarSign className="h-4 w-4" />
                Pay with Cash
              </Button>
              <Button variant="secondary" className="w-full gap-2">
                <Printer className="h-4 w-4" />
                Print Receipt
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

