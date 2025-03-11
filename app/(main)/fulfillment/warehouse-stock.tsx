"use client"

import { TableCell, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, ArrowRightLeft, AlertTriangle, Plus, Minus } from "lucide-react"

const warehouseStock = [
  {
    id: "1",
    name: "Laptop Pro X1",
    sku: "LP-X1-001",
    category: "Electronics",
    inStock: 23,
    reserved: 5,
    available: 18,
    lowStock: false,
  },
  {
    id: "2",
    name: "Wireless Headphones",
    sku: "WH-002",
    category: "Audio",
    inStock: 45,
    reserved: 12,
    available: 33,
    lowStock: false,
  },
  {
    id: "3",
    name: "Smart Watch Series 5",
    sku: "SW-S5-003",
    category: "Wearables",
    inStock: 12,
    reserved: 8,
    available: 4,
    lowStock: true,
  },
  {
    id: "4",
    name: "4K Ultra HD TV",
    sku: "TV-4K-004",
    category: "Electronics",
    inStock: 8,
    reserved: 3,
    available: 5,
    lowStock: true,
  },
  {
    id: "5",
    name: "Bluetooth Speaker",
    sku: "BS-005",
    category: "Audio",
    inStock: 0,
    reserved: 0,
    available: 0,
    lowStock: true,
  },
  {
    id: "6",
    name: "Gaming Console",
    sku: "GC-006",
    category: "Gaming",
    inStock: 15,
    reserved: 7,
    available: 8,
    lowStock: false,
  },
  {
    id: "7",
    name: "Digital Camera",
    sku: "DC-007",
    category: "Photography",
    inStock: 3,
    reserved: 1,
    available: 2,
    lowStock: true,
  },
]

export function WarehouseStock() {
  return (
    <>
      {warehouseStock.map((item) => (
        <TableRow key={item.id}>
          <TableCell className="font-medium">{item.name}</TableCell>
          <TableCell>{item.sku}</TableCell>
          <TableCell>{item.category}</TableCell>
          <TableCell>{item.inStock}</TableCell>
          <TableCell>{item.reserved}</TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              {item.available}
              {item.lowStock && (
                <Badge variant={item.available === 0 ? "destructive" : "outline"} className="ml-2">
                  {item.available === 0 ? "Out of Stock" : "Low Stock"}
                </Badge>
              )}
            </div>
          </TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Stock
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArrowRightLeft className="mr-2 h-4 w-4" />
                  Transfer Stock
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Stock
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Minus className="mr-2 h-4 w-4" />
                  Remove Stock
                </DropdownMenuItem>
                {item.lowStock && (
                  <DropdownMenuItem>
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Order More
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

