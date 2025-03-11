"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, X } from "lucide-react"

interface CartItemProps {
  item: {
    id: number
    name: string
    price: number
    quantity: number
  }
  updateQuantity: (id: number, quantity: number) => void
  removeItem: (id: number) => void
}

export function CartItem({ item, updateQuantity, removeItem }: CartItemProps) {
  return (
    <Card>
      <CardContent className="p-3">
        <div className="flex justify-between">
          <div className="flex-1">
            <h4 className="font-medium">{item.name}</h4>
            <p className="text-sm text-muted-foreground">
              ${item.price.toFixed(2)} × {item.quantity}
            </p>
          </div>
          <div className="text-right font-medium">${(item.price * item.quantity).toFixed(2)}</div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => removeItem(item.id)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

