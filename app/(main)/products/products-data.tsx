"use client"

import { TableCell, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Laptop Pro X1",
    category: "Electronics",
    price: 1299.99,
    stock: 23,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Audio",
    price: 149.99,
    stock: 45,
    status: "In Stock",
  },
  {
    id: 3,
    name: "Smart Watch Series 5",
    category: "Wearables",
    price: 299.99,
    stock: 12,
    status: "In Stock",
  },
  {
    id: 4,
    name: "4K Ultra HD TV",
    category: "Electronics",
    price: 799.99,
    stock: 8,
    status: "Low Stock",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 79.99,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 6,
    name: "Gaming Console",
    category: "Gaming",
    price: 499.99,
    stock: 15,
    status: "In Stock",
  },
  {
    id: 7,
    name: "Digital Camera",
    category: "Photography",
    price: 649.99,
    stock: 3,
    status: "Low Stock",
  },
  {
    id: 8,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 29.99,
    stock: 50,
    status: "In Stock",
  },
]

export function ProductsData() {
  return (
    <>
      {products.map((product) => (
        <TableRow key={product.id}>
          <TableCell className="font-medium">{product.name}</TableCell>
          <TableCell>{product.category}</TableCell>
          <TableCell>${product.price.toFixed(2)}</TableCell>
          <TableCell>{product.stock}</TableCell>
          <TableCell>
            <Badge
              variant={
                product.status === "In Stock" ? "default" : product.status === "Low Stock" ? "outline" : "destructive"
              }
            >
              {product.status}
            </Badge>
          </TableCell>
          <TableCell className="text-right">
            <div className="flex justify-end gap-2">
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

