"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type StackBarDaatType = {
  name: string;
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
  G: number;
}[];

export function StackBarChartUI({
  className,
  data,
}: {
  className?: string;
  data: StackBarDaatType;
}) {
  return (
    <ResponsiveContainer height={350} className={className}>
      <BarChart
        width={300}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="A" stackId="a" fill="rgb(87, 124, 124)" />
        <Bar dataKey="B" stackId="a" fill="rgb(99, 141, 141)" />
        <Bar dataKey="C" stackId="a" fill="rgb(111, 158, 158)" />
        <Bar dataKey="D" stackId="a" fill="rgb(123, 175, 175)" />
        <Bar dataKey="E" stackId="a" fill="rgb(135, 192, 192)" />
        <Bar dataKey="F" stackId="a" fill="rgb(147, 209, 209)" />
        <Bar
          dataKey="G"
          stackId="a"
          fill="rgb(159, 226, 226)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
