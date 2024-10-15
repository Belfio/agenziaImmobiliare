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
    { name: "2025", line: 37.9, line2: 50, bar: 1 },
    { name: "2026", line: 37.95, line2: 50, bar: 3 },
    { name: "2027", line: 38.09, line2: 50, bar: 9 },
    { name: "2028", line: 38.46, line2: 50, bar: 24 },
    { name: "2029", line: 39.36, line2: 50, bar: 57 },
    { name: "2030", line: 40.89, line2: 50, bar: 98 },
    { name: "2031", line: 42.92, line2: 50, bar: 130 },
    { name: "2032", line: 45.21, line2: 50, bar: 146 },
    { name: "2033", line: 47.59, line2: 50, bar: 152 },
    { name: "2034", line: 50.0, line2: 50, bar: 154 },
  ],
  line: {
    name: "% properties EPC C+",
    colour: "rgb(87, 124, 124)",
  },
  line2: {
    name: "Target",
    colour: "red",
    dashed: "5 5",
  },
  bar: {
    name: "Properties improved per year",
    colour: "rgb(87, 124, 124)",
  },
  isLine: true,
  isBar: true,
  isLine2: true,
  yLabel: "% properties EPC C+",
  y2Label: "Properties improved per year",
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
