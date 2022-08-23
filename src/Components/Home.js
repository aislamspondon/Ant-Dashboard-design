import { Card, Typography } from "antd";
import React from "react";

import BarChartView from "./Chart/BarChartView";
import LineChartView from "./Chart/LineChartView";
import PieChartView from "./Chart/PieChartView";

let { Title } = Typography;

export default function Home() {
  return (
    <>
      <Title>Dashboard</Title>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card
          title="Number of Total Users"
          bordered={false}
          style={{
            width: "70%",
            height: 350,
            borderStyle: "groove",
            position: "relative",
            textAlign: "center",
            margin: 5,
            borderRadius: 12,
          }}
        >
          <LineChartView />
        </Card>
        <Card
          title="Number of Platform users"
          bordered={false}
          style={{
            width: "45%",
            height: 350,
            borderStyle: "groove",
            position: "relative",
            textAlign: "center",
            margin: 5,
            borderRadius: 12,
          }}
        >
          <PieChartView />
        </Card>
      </div>
      <Card
        title="Number of Total Shop"
        bordered={false}
        style={{
          width: "75vw",
          height: "70vh",
          borderStyle: "groove",
          position: "relative",
          textAlign: "center",
          margin: 5,
          marginTop: 10,
          borderRadius: 12,
        }}
      >
        <BarChartView />
      </Card>
    </>
  );
}
