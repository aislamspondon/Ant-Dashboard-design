import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Active",
    value: 21000,
  },
  {
    name: "Inactive",
    value: 2000,
  },
];

export default function PieChartView() {
  const COLORS = ["#0088FE", "#FF1111"];
  return (
    <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
