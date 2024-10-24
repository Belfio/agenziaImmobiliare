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
  TooltipProps,
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

const CustomTooltip = ({ active, payload, label, data }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          border: "1px solid #000",
          padding: "10px",
        }}
      >
        <p className="label">{`${label}`}</p>
        {payload.map((entry, index) => (
          <>
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name} : ${entry.value}`}
            </p>

            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`Properties improved : ${data[label - 2025].bar}`}
            </p>
          </>
        ))}
      </div>
    );
  }

  return null;
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
    <ResponsiveContainer width="100%" height={450} className={className}>
      <ComposedChart
        width={500}
        height={400}
        data={[...series.data]}
        key={Math.random()}
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
          dataKey="line"
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
            key={Math.random()}
            dataKey="bar"
            barSize={20}
            fill={series.bar.colour}
            name={series.bar.name}
            yAxisId="bar"
            isAnimationActive={true}
            activeBar={{
              fill: "rgb(192, 217, 220)",
            }}
          />
        )}
        {series.isLine && (
          <Line
            key={Math.random()}
            dataKey="line"
            data={series.data}
            name={series.line.name}
            // key={series.line.name}
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
            isAnimationActive={true}
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
          y={series.data[series.data.length - 1].line}
          stroke="rgb(150,150,150)"
          label={{
            value: "Target 50%",
            position: "top",
            fill: "rgb(120,120,120)",
          }}
        />
        {/* <Tooltip
          cursor={{ stroke: "black", strokeWidth: 1 }}
          contentStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid #000",
          }}
        /> */}
        <Tooltip content={<CustomTooltip data={series.data} />} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
