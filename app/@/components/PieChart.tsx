import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from "recharts";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

type PieDataType = {
  name: string;
  value: number;
}[];
export function PieChartUI({
  className,
  data,
  minWidth = 500,
  width = 600,
  height = 360,
  radius = 210,
}: {
  className?: string;
  data: PieDataType;
  minWidth?: number;
  width?: number;
  height?: number;
  radius?: number;
}) {
  // create a new object with keys of the names of the data objects and values and the content of the key needs to be a colour in the shades from     #b0d3d6; to  #577c7c;
  const colours = Object.fromEntries(
    data.map((d, i) => [d.name, `hsl(var(--chart-${i + 1}))`])
  );
  return (
    <ResponsiveContainer
      width={width}
      height={height}
      className={className}
      minWidth={minWidth}
    >
      <PieChart>
        <Pie
          data={data}
          cx="40%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="value"
          outerRadius={radius}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colours[entry.name]} />
          ))}
        </Pie>
        <Legend layout="vertical" align="right" verticalAlign="middle" />
      </PieChart>
    </ResponsiveContainer>
  );
}
