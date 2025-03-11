export type Product = {
  id: string
  name: string
  price: number
  category: string
  stock: number
  barcode: string
  image: string
  description?: string
  featured?: boolean
}

export type CartItem = {
  product: Product
  quantity: number
}

export type Sale = {
  id: string
  items: CartItem[]
  total: number
  date: Date
  paymentMethod: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Coffee Mug",
    price: 12.99,
    category: "Kitchenware",
    stock: 50,
    barcode: "123456789",
    image: "/placeholder.svg?height=300&width=300",
    description: "A premium ceramic coffee mug with a sleek design. Perfect for your morning coffee or tea.",
    featured: true,
  },
  {
    id: "2",
    name: "Wireless Mouse",
    price: 24.99,
    category: "Electronics",
    stock: 30,
    barcode: "987654321",
    image: "/placeholder.svg?height=300&width=300",
    description: "Ergonomic wireless mouse with precision tracking and long battery life.",
    featured: true,
  },
  {
    id: "3",
    name: "Notebook",
    price: 4.99,
    category: "Stationery",
    stock: 100,
    barcode: "456789123",
    image: "/placeholder.svg?height=300&width=300",
    description: "High-quality lined notebook with 120 pages. Perfect for notes, journaling, or sketching.",
  },
  {
    id: "4",
    name: "Water Bottle",
    price: 15.99,
    category: "Kitchenware",
    stock: 45,
    barcode: "789123456",
    image: "/placeholder.svg?height=300&width=300",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
  },
  {
    id: "5",
    name: "Headphones",
    price: 59.99,
    category: "Electronics",
    stock: 20,
    barcode: "321654987",
    image: "/placeholder.svg?height=300&width=300",
    description: "Over-ear headphones with noise cancellation and premium sound quality.",
    featured: true,
  },
  {
    id: "6",
    name: "Desk Lamp",
    price: 29.99,
    category: "Home",
    stock: 15,
    barcode: "654987321",
    image: "/placeholder.svg?height=300&width=300",
    description: "Adjustable LED desk lamp with multiple brightness levels and color temperatures.",
  },
  {
    id: "7",
    name: "USB Drive",
    price: 19.99,
    category: "Electronics",
    stock: 40,
    barcode: "159753456",
    image: "/placeholder.svg?height=300&width=300",
    description: "High-speed 64GB USB 3.0 flash drive for quick and reliable data storage.",
  },
  {
    id: "8",
    name: "Backpack",
    price: 49.99,
    category: "Accessories",
    stock: 25,
    barcode: "753159456",
    image: "/placeholder.svg?height=300&width=300",
    description: "Durable backpack with multiple compartments, padded laptop sleeve, and water bottle pockets.",
    featured: true,
  },
  {
    id: "9",
    name: "Wireless Earbuds",
    price: 89.99,
    category: "Electronics",
    stock: 18,
    barcode: "852741963",
    image: "/placeholder.svg?height=300&width=300",
    description: "True wireless earbuds with touch controls, noise isolation, and long battery life.",
  },
  {
    id: "10",
    name: "Smart Watch",
    price: 129.99,
    category: "Electronics",
    stock: 12,
    barcode: "963852741",
    image: "/placeholder.svg?height=300&width=300",
    description: "Fitness tracker and smartwatch with heart rate monitoring, GPS, and smartphone notifications.",
  },
  {
    id: "11",
    name: "Portable Charger",
    price: 34.99,
    category: "Electronics",
    stock: 35,
    barcode: "741852963",
    image: "/placeholder.svg?height=300&width=300",
    description: "10000mAh power bank with fast charging capability for smartphones and tablets.",
  },
  {
    id: "12",
    name: "Bluetooth Speaker",
    price: 79.99,
    category: "Electronics",
    stock: 0,
    barcode: "369852147",
    image: "/placeholder.svg?height=300&width=300",
    description: "Portable Bluetooth speaker with 360° sound, waterproof design, and 12-hour battery life.",
  },
]

export const recentSales: Sale[] = [
  {
    id: "s1",
    items: [
      { product: products[0], quantity: 2 },
      { product: products[2], quantity: 1 },
    ],
    total: 30.97,
    date: new Date("2023-05-01"),
    paymentMethod: "Credit Card",
  },
  {
    id: "s2",
    items: [
      { product: products[1], quantity: 1 },
      { product: products[3], quantity: 1 },
    ],
    total: 40.98,
    date: new Date("2023-05-02"),
    paymentMethod: "Cash",
  },
  {
    id: "s3",
    items: [{ product: products[4], quantity: 1 }],
    total: 59.99,
    date: new Date("2023-05-03"),
    paymentMethod: "Credit Card",
  },
  {
    id: "s4",
    items: [
      { product: products[5], quantity: 1 },
      { product: products[6], quantity: 2 },
    ],
    total: 69.97,
    date: new Date("2023-05-04"),
    paymentMethod: "Cash",
  },
]

