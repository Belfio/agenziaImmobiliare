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
  ReferenceLine,
} from "recharts";

type LineDataType = {
  name: string;
  colour?: string;
  data: {
    category: string;
    value: number;
  }[];
}[];

type ReferenceLineType = {
  x?: string;
  y?: number;
  label?: string;
  colour?: string;
};
export function LineChartUI({
  className,
  series,
  yLabel,
  referenceLine,
}: {
  className: string;
  series: LineDataType;
  yLabel?: string;
  referenceLine?: ReferenceLineType;
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
          label={{
            value: yLabel || "KgCO2 / sq mt",
            angle: -90,
            position: "insideLeft",
          }}
          width={40}
        />
        <Tooltip
          cursor={{ stroke: "black", strokeWidth: 1 }}
          contentStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid #000",
          }}
        />
        <Legend verticalAlign="top" align="right" height={36} stroke="#000" />
        {referenceLine && (
          <ReferenceLine
            x={referenceLine.x}
            y={referenceLine.y}
            label={referenceLine.label}
            stroke={referenceLine.colour}
          />
        )}
        {series.map((s) => (
          <Line
            dataKey="value"
            data={s.data}
            name={s.name}
            key={s.name}
            fill="white"
            className="fill-primary"
            dot={{
              stroke: s.colour,
              strokeWidth: 2,
            }}
            activeDot={{
              stroke: s.colour,
              strokeWidth: 2,
            }}
            stroke={s.colour}
            strokeDasharray={s.name === "Trend" ? "5 5" : ""}
            isAnimationActive={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
