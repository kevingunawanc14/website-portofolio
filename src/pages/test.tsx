import { TrendingUp } from "lucide-react"
import { TrendingDown } from "lucide-react"
import { HandCoins } from "lucide-react"


import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
    { browser: "safari", revenue: "20", fill: "var(--color-safari)" , money: "$10",  },
]

const chartConfig = {
    revenue: {
      label: "Revenue",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

function test() {
  return (
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={36}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="revenue" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-foreground-foreground text-4xl font-bold"
                        >
                           {chartData[0].money.toLocaleString()}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
  )
}

export default test