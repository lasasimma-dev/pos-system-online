"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Plus } from "lucide-react"

type Product = {
  id: number
  name: string
  category: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Laptop Pro X1",
    category: "Electronics",
    price: 1299.99,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Audio",
    price: 149.99,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Smart Watch Series 5",
    category: "Electronics",
    price: 299.99,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "4K Ultra HD TV",
    category: "Electronics",
    price: 799.99,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 79.99,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Gaming Console",
    category: "Electronics",
    price: 499.99,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 7,
    name: "Digital Camera",
    category: "Electronics",
    price: 649.99,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 8,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 29.99,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 9,
    name: "Keyboard",
    category: "Accessories",
    price: 59.99,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 10,
    name: "External Hard Drive",
    category: "Accessories",
    price: 119.99,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 11,
    name: "Wireless Earbuds",
    category: "Audio",
    price: 89.99,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 12,
    name: "Tablet",
    category: "Electronics",
    price: 399.99,
    image: "/placeholder.svg?height=100&width=100",
  },
]

interface ProductGridProps {
  category?: string
}

export function ProductGrid({ category }: ProductGridProps) {
  const filteredProducts = category ? products.filter((product) => product.category === category) : products

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {filteredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-square w-full bg-muted flex items-center justify-center">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="object-cover"
                width={100}
                height={100}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-4">
            <div className="space-y-1">
              <h3 className="font-medium leading-none">{product.name}</h3>
              <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
            </div>
            <Button size="sm" className="mt-3 w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

