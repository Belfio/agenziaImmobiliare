"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type LineDataType = {
  name: string;
  data: {
    category: string;
    value: number;
  }[];
}[];

export function LineChartUI({
  className,
  series,
}: {
  className: string;
  series: LineDataType;
}) {
  return (
    <ResponsiveContainer width="100%" height={350} className={className}>
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="category"
          type="category"
          allowDuplicatedCategory={false}
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey="value"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          cursor={{ stroke: "black", strokeWidth: 1 }}
          contentStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid #000",
          }}
        />
        <Legend verticalAlign="top" align="right" height={36} stroke="#000" />
        {series.map((s) => (
          <Line
            dataKey="value"
            data={s.data}
            name={s.name}
            key={s.name}
            fill="currentColor"
            className="fill-primary"
            dot={{ stroke: "black", strokeWidth: 2 }}
            activeDot={{ stroke: "black", strokeWidth: 2 }}
            stroke="#000"
            strokeDasharray={s.name === "Trend" ? "5 5" : ""}
            isAnimationActive={s.name !== "Past data"}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
