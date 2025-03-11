"use client"

import { useState } from "react"
import { TableCell, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Eye, MoreHorizontal, Truck, Package, XCircle, Printer, ClipboardList } from "lucide-react"

const orders = [
  {
    id: "ORD-7829",
    customer: "John Doe",
    email: "john.doe@example.com",
    date: "2023-05-10",
    items: 3,
    total: 249.99,
    status: "Pending",
  },
  {
    id: "ORD-7830",
    customer: "Alice Smith",
    email: "alice.smith@example.com",
    date: "2023-05-11",
    items: 2,
    total: 149.98,
    status: "Processing",
  },
  {
    id: "ORD-7831",
    customer: "Robert Johnson",
    email: "robert.j@example.com",
    date: "2023-05-12",
    items: 1,
    total: 399.99,
    status: "Shipped",
  },
  {
    id: "ORD-7832",
    customer: "Emily Brown",
    email: "emily.brown@example.com",
    date: "2023-05-12",
    items: 4,
    total: 529.96,
    status: "Delivered",
  },
  {
    id: "ORD-7833",
    customer: "Michael Wilson",
    email: "m.wilson@example.com",
    date: "2023-05-13",
    items: 2,
    total: 79.98,
    status: "Cancelled",
  },
]

export function OrdersList() {
  const [selectedOrder, setSelectedOrder] = useState<(typeof orders)[0] | null>(null)

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Pending":
        return "secondary"
      case "Processing":
        return "default"
      case "Shipped":
        return "default"
      case "Delivered":
        return "outline"
      case "Cancelled":
        return "destructive"
      default:
        return "secondary"
    }
  }

  return (
    <>
      {orders.map((order) => (
        <TableRow key={order.id}>
          <TableCell className="font-medium">{order.id}</TableCell>
          <TableCell>
            <div>
              <p>{order.customer}</p>
              <p className="text-sm text-muted-foreground">{order.email}</p>
            </div>
          </TableCell>
          <TableCell>{order.date}</TableCell>
          <TableCell>{order.items}</TableCell>
          <TableCell>${order.total.toFixed(2)}</TableCell>
          <TableCell>
            <Badge variant={getStatusBadgeVariant(order.status)}>{order.status}</Badge>
          </TableCell>
          <TableCell className="text-right">
            <Dialog>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DialogTrigger asChild>
                    <DropdownMenuItem onSelect={() => setSelectedOrder(order)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                  </DialogTrigger>
                  <DropdownMenuItem>
                    <Package className="mr-2 h-4 w-4" />
                    Process Order
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Truck className="mr-2 h-4 w-4" />
                    Mark as Shipped
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Printer className="mr-2 h-4 w-4" />
                    Print Invoice
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <XCircle className="mr-2 h-4 w-4" />
                    Cancel Order
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Order Details</DialogTitle>
                  <DialogDescription>
                    {selectedOrder?.id} - {selectedOrder?.date}
                  </DialogDescription>
                </DialogHeader>

                {selectedOrder && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1">Customer</h4>
                        <p className="text-sm">{selectedOrder.customer}</p>
                        <p className="text-sm text-muted-foreground">{selectedOrder.email}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Status</h4>
                        <Badge variant={getStatusBadgeVariant(selectedOrder.status)}>{selectedOrder.status}</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Order Items</h4>
                      <div className="rounded-md border">
                        <div className="grid grid-cols-4 p-3 text-sm font-medium border-b">
                          <div>Product</div>
                          <div>Price</div>
                          <div>Quantity</div>
                          <div className="text-right">Total</div>
                        </div>
                        <div className="p-3 text-sm">
                          <div className="grid grid-cols-4 py-1">
                            <div>Product 1</div>
                            <div>$99.99</div>
                            <div>1</div>
                            <div className="text-right">$99.99</div>
                          </div>
                          <div className="grid grid-cols-4 py-1">
                            <div>Product 2</div>
                            <div>$149.99</div>
                            <div>1</div>
                            <div className="text-right">$149.99</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between border-t pt-4">
                      <span className="font-medium">Total</span>
                      <span className="font-bold">${selectedOrder.total.toFixed(2)}</span>
                    </div>
                  </div>
                )}

                <DialogFooter className="flex justify-between">
                  <Button variant="outline">
                    <ClipboardList className="mr-2 h-4 w-4" />
                    Print Invoice
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Package className="mr-2 h-4 w-4" />
                      Process
                    </Button>
                    <Button>
                      <Truck className="mr-2 h-4 w-4" />
                      Ship
                    </Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

