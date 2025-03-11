"use client"

import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CartItem as CartItemType } from "@/lib/data"

interface CartItemProps {
  item: CartItemType
  updateQuantity: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
}

export function CartItem({ item, updateQuantity, removeItem }: CartItemProps) {
  return (
    <div className="flex gap-4">
      <div className="relative h-16 w-16 overflow-hidden rounded-md">
        <Image src={item.product.image || "/placeholder.svg"} alt={item.product.name} fill className="object-cover" />
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <h4 className="font-medium line-clamp-1">{item.product.name}</h4>
            <p className="text-sm text-muted-foreground">${item.product.price.toFixed(2)}</p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeItem(item.product.id)}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-2 flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}

