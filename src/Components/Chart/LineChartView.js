import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    id: 1,
    year: 2019,
    total_user: 5000,
  },
  {
    id: 2,
    year: 2020,
    total_user: 15000,
  },
  {
    id: 3,
    year: 2021,
    total_user: 19000,
  },
  {
    id: 4,
    year: 2022,
    total_user: 23000,
  },
];

export default function LineChartView() {
  return (
    <ResponsiveContainer width="95%" height={240}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" interval={"preserveStartEnd"} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="total_user" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
