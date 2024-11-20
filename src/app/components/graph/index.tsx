"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartData = [
  { month: "Janeiro", quantidade: 180 },
  { month: "Fevereiro", quantidade: 200 },
  { month: "Março", quantidade: 220 },
  { month: "Abril", quantidade: 210 },
  { month: "Maio", quantidade: 230 },
  { month: "Junho", quantidade: 240 },
  { month: "Julho", quantidade: 250 },
  { month: "Agosto", quantidade: 260 },
  { month: "Setembro", quantidade: 270 },
  { month: "Outubro", quantidade: 280 },
  { month: "Novembro", quantidade: 300 },
  { month: "Dezembro", quantidade: 320 },
]

const chartConfig = {
  quantidade: {
    label: "Quantidade",
    color: "#3078FF",
  },
} satisfies ChartConfig

export function Graph() {
  return (
    <div className="w-full max-w-[1980px] flex items-center justify-center p-4" id="graph">

      <Card className="bg-secondaryDefault text-white mb-16 mx-4">
        <CardHeader>
          <CardTitle>Aumento de FakeNews no Brasil</CardTitle>
          <CardDescription>Janeiro - Dezembro 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                left: -20,
              }}
            >
              <XAxis type="number" dataKey="quantidade" hide />
              <YAxis
                dataKey="month"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="quantidade" fill="var(--color-quantidade)" radius={5} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
