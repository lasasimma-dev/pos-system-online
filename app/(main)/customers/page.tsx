import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Edit, Trash2, Mail, Phone } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function CustomersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Management</CardTitle>
          <CardDescription>View and manage your customer database</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search customers..." className="w-full pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">Filter</Button>
              <Button variant="outline">Export</Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Last Purchase</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={customer.avatar} alt={customer.name} />
                          <AvatarFallback>{customer.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-sm text-muted-foreground">ID: {customer.id}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1 text-sm">
                          <Mail className="h-3 w-3" />
                          <span>{customer.email}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Phone className="h-3 w-3" />
                          <span>{customer.phone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          customer.status === "Active"
                            ? "default"
                            : customer.status === "Inactive"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
                    <TableCell>{customer.lastPurchase}</TableCell>
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
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const customers = [
  {
    id: "CUS-001",
    name: "John Doe",
    initials: "JD",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    status: "Active",
    totalSpent: 1249.99,
    lastPurchase: "2023-03-15",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "CUS-002",
    name: "Alice Smith",
    initials: "AS",
    email: "alice.smith@example.com",
    phone: "(555) 987-6543",
    status: "Active",
    totalSpent: 879.5,
    lastPurchase: "2023-03-12",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "CUS-003",
    name: "Robert Johnson",
    initials: "RJ",
    email: "robert.j@example.com",
    phone: "(555) 456-7890",
    status: "Inactive",
    totalSpent: 2399.0,
    lastPurchase: "2023-02-28",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "CUS-004",
    name: "Emily Brown",
    initials: "EB",
    email: "emily.brown@example.com",
    phone: "(555) 234-5678",
    status: "Active",
    totalSpent: 459.99,
    lastPurchase: "2023-03-10",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "CUS-005",
    name: "Michael Wilson",
    initials: "MW",
    email: "m.wilson@example.com",
    phone: "(555) 876-5432",
    status: "New",
    totalSpent: 129.99,
    lastPurchase: "2023-03-16",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

