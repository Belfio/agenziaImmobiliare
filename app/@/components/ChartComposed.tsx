"use client";

import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  ComposedChart,
  Bar,
} from "recharts";

export type ComposedDataType = {
  data: {
    name: string;
    line?: number;
    line2?: number;
    bar?: number;
  }[];
  line: {
    name: string;
    colour: string;
    dashed?: string;
  };
  line2: {
    name: string;
    colour: string;
    dashed?: string;
  };
  bar: {
    name: string;
    colour: string;
  };
  isLine: boolean;
  isBar: boolean;
  isLine2: boolean;
  yLabel?: string;
  y2Label?: string;
};

type ReferenceLineType = {
  x?: string;
  y?: number;
  label?: string;
  colour?: string;
};
export function ChartComposedUI({
  className,
  series,
  referenceLine,
}: {
  className: string;
  series: ComposedDataType;
  referenceLine?: ReferenceLineType;
}) {
  return (
    <ResponsiveContainer width="100%" height={350} className={className}>
      <ComposedChart
        width={500}
        height={300}
        data={series.data}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          type="category"
          allowDuplicatedCategory={false}
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey="line2"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          label={{
            value: series.yLabel,
            angle: -90,
            position: "insideBottomLeft",
          }}
          width={40}
        />
        <YAxis
          dataKey="bar"
          stroke="#aaa"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          domain={[0, 200]}
          orientation="right"
          label={{
            value: series.y2Label,
            angle: 90,
            position: "insideBottomRight",
            // offset: 100,
            // content: <div className="bg-red w-8 h-8">}</div>,
          }}
          width={40}
          yAxisId="bar"
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
        {series.isBar && (
          <Bar
            dataKey="bar"
            barSize={20}
            fill={series.bar.colour}
            name={series.bar.name}
            yAxisId="bar"
          />
        )}
        {series.isLine && (
          <Line
            dataKey="line"
            data={series.data}
            name={series.line.name}
            key={series.line.name}
            fill="white"
            className="fill-primary"
            dot={{
              stroke: series.line.colour,
              strokeWidth: 2,
            }}
            activeDot={{
              stroke: series.line.colour,
              strokeWidth: 2,
            }}
            stroke={series.line.colour}
            strokeDasharray={series.line.dashed}
            isAnimationActive={false}
          />
        )}
        {!series.isLine2 && (
          <Line
            dataKey="line2"
            data={series.data}
            name={series.line2.name}
            key="line2"
            fill="white"
            className="fill-primary"
            dot={{
              stroke: series.line2.colour,
              strokeWidth: 2,
            }}
            activeDot={{
              stroke: series.line2.colour,
              strokeWidth: 2,
            }}
            stroke={series.line2.colour}
            strokeDasharray={series.line2.dashed}
            isAnimationActive={false}
          />
        )}
        <ReferenceLine
          x={series.data[series.data.length - 1].name}
          y={series.data[series.data.length - 1].line2}
          stroke="var(--blue)"
          label={{
            value: "Target",
            position: "top",
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
