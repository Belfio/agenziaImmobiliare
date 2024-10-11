import { ComposedDataType } from "../components/ChartComposed";

export const EPCrating = [
  { name: "A rating", value: 6 },
  { name: "B rating", value: 12 },
  { name: "C rating", value: 23 },
  { name: "D rating", value: 25 },
  { name: "E rating", value: 13 },
  { name: "F rating", value: 7 },
  { name: "G rating", value: 3 },
];

export const Emissions = [
  { name: "<30", value: 20 },
  { name: "30 - 50", value: 8 },
  { name: "50 - 70", value: 2 },
  { name: "70 - 90", value: 10 },
  { name: ">90", value: 60 },
];

export const DataEPCComposedChart: ComposedDataType = {
  data: [
    { name: "2024", line: 12, line2: 50, bar: 60 },
    { name: "2025", line: 15.2, line2: 50, bar: 50 },
    { name: "2026", line: 18.4, line2: 50, bar: 50 },
    { name: "2027", line: 21.6, line2: 50, bar: 50 },
    { name: "2028", line: 24.8, line2: 50, bar: 50 },
    { name: "2029", line: 28, line2: 50, bar: 50 },
    { name: "2030", line: 31.2, line2: 50, bar: 50 },
    { name: "2031", line: 34.4, line2: 50, bar: 50 },
    { name: "2032", line: 37.6, line2: 50, bar: 50 },
    { name: "2033", line: 40.8, line2: 50, bar: 50 },
    { name: "2034", line: 44, line2: 50, bar: 50 },
    { name: "2035", line: 47.2, line2: 50, bar: 50 },
  ],
  line: {
    name: "Trend",
    colour: "pink",
  },
  line2: {
    name: "Target",
    colour: "red",
    dashed: "5 5",
  },
  bar: {
    name: "Optimal target",
    colour: "#888",
  },
  isLine: true,
  isBar: true,
  isLine2: true,
  yLabel: "Share of properties",
  y2Label: "Yearly properties",
};

export const StackDataEmissionsVsEPC = [
  {
    name: "<30",
    A: 20,
    B: 40,
    C: 18,
    D: 5,
    E: 2,
    F: 4,
    G: 1,
  },
  {
    name: "30 - 50",
    A: 8,
    B: 30,
    C: 32,
    D: 15,
    E: 2,
    F: 2,
    G: 1,
  },
  {
    name: "50 - 70",
    A: 2,
    B: 11,
    C: 37,
    D: 18,
    E: 12,
    F: 6,
    G: 4,
  },
  {
    name: "70 - 90",
    A: 0,
    B: 9,
    C: 23,
    D: 37,
    E: 13,
    F: 4,
    G: 4,
  },
  {
    name: ">90",
    A: 2,
    B: 9,
    C: 42,
    D: 18,
    E: 10,
    F: 4,
    G: 5,
  },
];
