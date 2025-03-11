"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, type TooltipProps } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "01", sales: 1200 },
  { name: "02", sales: 900 },
  { name: "03", sales: 1600 },
  { name: "04", sales: 1700 },
  { name: "05", sales: 1400 },
  { name: "06", sales: 1800 },
  { name: "07", sales: 1300 },
  { name: "08", sales: 1500 },
  { name: "09", sales: 2000 },
  { name: "10", sales: 1800 },
  { name: "11", sales: 2200 },
  { name: "12", sales: 1900 },
  { name: "13", sales: 2100 },
  { name: "14", sales: 2300 },
  { name: "15", sales: 2400 },
  { name: "16", sales: 2100 },
  { name: "17", sales: 2500 },
  { name: "18", sales: 2300 },
  { name: "19", sales: 2400 },
  { name: "20", sales: 2600 },
  { name: "21", sales: 2800 },
  { name: "22", sales: 2700 },
  { name: "23", sales: 2900 },
  { name: "24", sales: 2800 },
  { name: "25", sales: 3000 },
  { name: "26", sales: 2700 },
  { name: "27", sales: 2800 },
  { name: "28", sales: 3200 },
  { name: "29", sales: 3400 },
  { name: "30", sales: 3300 },
]

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <Card className="bg-background border p-2 shadow-sm">
        <p className="text-sm font-medium">{`Day ${label}`}</p>
        <p className="text-sm text-primary">{`$${payload[0].value?.toFixed(2)}`}</p>
      </Card>
    )
  }

  return null
}

export function SalesChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="name" className="text-xs" />
          <YAxis className="text-xs" tickFormatter={(value) => `$${value}`} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

