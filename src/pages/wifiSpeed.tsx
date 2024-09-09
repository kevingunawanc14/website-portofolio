import { useState } from 'react';
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

import {
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
} from "@/components/ui/chart"

import { Button } from "@/components/ui/button"

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig


function WifiSpeed() {
    const [chartData, setChartData] = useState([{ desktop: 25, mobile: 0 }]);

    const testSpeed = () => {
        const intervalId = setInterval(() => {
            const newMobileValue = Math.floor(Math.random() * (50 - 25 + 1)) + 25;
            console.log(newMobileValue)
            setChartData(prevChartData =>
                prevChartData.map(data => ({ ...data, mobile: newMobileValue }))
            );
        }, 1000);

        setTimeout(() => {
            clearInterval(intervalId);
            console.log('Interval cleared');
        }, 10000);
    };

    const speeds = '0.00'
    return (
        <>
            <CardHeader id='wifi' className="items-center pb-0 ">
                <CardTitle className=''>Internet Speed Test</CardTitle>
                <div className="grid grid-rows-2">
                    <div className="grid grid-cols-2 text-center gap-3">
                        <div>
                            <p className="text-xl font-semibold">0.00</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold">0.00</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 text-center gap-3">
                        <div>
                            <p className="text-xs">Mbps download</p>
                        </div>
                        <div>
                            <p className="text-xs">Mbps upload</p>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full max-w-[250px] z-10"
                >
                    <RadialBarChart
                        data={chartData}
                        endAngle={180}
                        innerRadius={100}
                        outerRadius={130}
                    >
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) - 16}
                                                    className="text-2xl font-bold"
                                                >
                                                    {speeds}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 4}
                                                >
                                                    Megabits per second
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
            </CardContent>
            <div className="flex justify-center">
                <motion.div
                    whileTap={{ scale: 0.9 }} // Gesture animation when the button is tapped
                    whileHover={{ scale: 1.1 }} // Gesture animation when the button is hovered
                    className="mx-auto -mt-28 z-10"
                >
                    <Button onClick={() => testSpeed()}>    <Rocket />
                    </Button>
                </motion.div>
            </div>
        </>
    )
}

export default WifiSpeed