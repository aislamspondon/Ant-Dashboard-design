import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    year: 2019,
    Total: 5000,
    Approved: 4500,
    Rejected: 500,
  },
  {
    year: 2020,
    Total: 15000,
    Approved: 13200,
    Rejected: 1300,
  },
  {
    year: 2021,
    Total: 19000,
    Approved: 17750,
    Rejected: 1250,
  },
  {
    year: 2022,
    Total: 23000,
    Approved: 21005,
    Rejected: 1995,
  },
];

export default function BarChartView() {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Total" fill="#8884d8" />
        <Bar dataKey="Approved" fill="#82ca9d" />
        <Bar dataKey="Rejected" fill="#ea1733" />
      </BarChart>
    </ResponsiveContainer>
  );
}
