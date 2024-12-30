import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 80, color: '#ff0000' },
  { name: 'B', value: 45, color: '#00ff00' },
  { name: 'C', value: 25, color: '#0000ff' },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 50;

// Define types for the data passed to the needle function
interface DataPoint {
  value: number;
}

interface NeedleProps {
  value: number;               // The value to be represented
  data: DataPoint[];          // Array of data points where each point has a value
  cx: number;                  // The x-coordinate for the center of the needle
  cy: number;                  // The y-coordinate for the center of the needle
  iR: number;                  // Inner radius
  oR: number;                  // Outer radius
  color: string;               // Color for the needle and circle
}

interface DataItem {
  name: string;
  value: number;
  color?: string;
}

const needle = ({
  value,
  data,
  cx,
  cy,
  iR,
  oR,
  color,
}: NeedleProps): JSX.Element[] => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      key="needle-path"
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="none"
      fill={color}
    />,
  ];
};

const gradients = (
  <defs>
    <linearGradient id="gradientA" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#1DC286" />
      <stop offset="100%" stopColor="#0E5C40" />
    </linearGradient>
    <linearGradient id="gradientB" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#7AC056" />
      <stop offset="100%" stopColor="#1DC286" />
    </linearGradient>
    <linearGradient id="gradientC" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#EBAA1B" />
      <stop offset="100%" stopColor="#8EBC49" />
    </linearGradient>
    <linearGradient id="gradientD" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#EBAA1B" />
      <stop offset="100%" stopColor="#F37B35" />
    </linearGradient>
    <linearGradient id="gradientE" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#F39035" />
      <stop offset="100%" stopColor="#F34035" />
    </linearGradient>
    <linearGradient id="gradientF" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#F34035" />
      <stop offset="100%" stopColor="#8D251F  " />
    </linearGradient>
  </defs>
);

export default function Example() {

  const [chartData, setChartData] = useState<DataItem[]>([]);
  const [gradientsData, setGradients] = useState<JSX.Element | null>(null);

  useEffect(() => {
    // Any logic to fetch or compute data can go here
    setChartData(data);  // or your actual data fetching logic
    setGradients(gradients)
  }, []);

  return (
    <PieChart width={400} height={500}>
      {gradientsData}
      
      <Pie
        // dataKey="value"
        // startAngle={180}
        // endAngle={0}
        // data={chartData}
        // cx={300 / 2}
        // cy={300 / 2}
        // innerRadius={iR}
        // outerRadius={oR}
        // stroke="none"

        dataKey="value"
        startAngle={0}
        endAngle={180}
        data={chartData}
        cx={300 / 2}
        cy={300 / 2}
        innerRadius={iR}
        outerRadius={oR}
        stroke="none"
      // label={renderCustomizedLabel}
      >
        {chartData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            // fill={`url(#gradient${String.fromCharCode(65 + index)})`}
            fill={entry.color}
          />
        ))}
      </Pie>
      
      <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>

      {/* {needle({ value, data, cx, cy, iR, oR, color: '#d0d000' })} */}
    </PieChart>
  );
}