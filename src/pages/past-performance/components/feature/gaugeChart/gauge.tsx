import React from 'react'
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./chart"

interface GaugeProps {
  title: string;
  key1: string;
  value1: number;
  key2: string;
  value2: number;
}

function Gauge({ title, key1, value1, key2, value2 }: GaugeProps) {

  const chartData = [{ month: "january", desktop: value1, mobile: value2, label: title }]

  const chartConfig = {
    desktop: {
      label: key1,
      color: "#0166D2",
    },
    mobile: {
      label: key2,
      color: "#6CDCCC",
    },
  } satisfies ChartConfig

  return (
    <div>

      <ChartContainer
        config={chartConfig}
        className=" w-full h-[250px] pt-[70px] "
      >
        <RadialBarChart
          data={chartData}
          endAngle={180}
          innerRadius={80}
          outerRadius={130}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideIndicator />}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 16}
                        className="fill-foreground text-[14px] poppins-medium"
                        style={{
                          fontSize: '14px',
                          fill: 'grey',
                        }}
                      >
                        {title}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 4}
                        className="fill-muted-foreground poppins-medium "
                        style={{
                          fontSize: '10px',
                          fill: '#0166D2',
                        }}
                      >
                        {key1}: {chartData[0].desktop.toFixed(1)}%
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 20}
                        className="fill-muted-foreground poppins-medium "
                        style={{
                          fontSize: '10px',
                          fill: '#6CDCCC',
                        }}
                      >
                        {key2}: {chartData[0].mobile.toFixed(1)}%
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </PolarRadiusAxis>
          <RadialBar
            dataKey="desktop"
            stackId="a"
            cornerRadius={5}
            fill="var(--color-desktop)"
            className="stroke-transparent stroke-2"
          />
          <RadialBar
            dataKey="mobile"
            fill="var(--color-mobile)"
            stackId="a"
            cornerRadius={5}
            className="stroke-transparent stroke-2"
          />
        </RadialBarChart>
      </ChartContainer>



    </div>
  )
}

export default Gauge