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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 25,
        }}
      >
        <Card
          title="Total Amount"
          bordered={false}
          style={{
            width: "33%",
            height: 200,
            borderStyle: "groove",
            position: "relative",
            textAlign: "center",
            margin: 5,
            borderRadius: 12,
            backgroundImage: "linear-gradient(to right, #F0F2F5, #D3CFCF)",
            // background: "#D3CFCF",
          }}
        >
          <p style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>
            $ 15,000
          </p>
          <p style={{ color: "black", fontSize: 15 }}>Increase by 60%</p>
        </Card>
        <Card
          title="Pending Amount"
          bordered={false}
          style={{
            width: "33%",
            height: 200,
            borderStyle: "groove",
            position: "relative",
            textAlign: "center",
            margin: 5,
            borderRadius: 12,
            backgroundImage: "linear-gradient(to right, #D3CFCF, #92A3A0)",
            // background: "#92A3A0",
          }}
        >
          <p style={{ color: "#d34747", fontSize: 30, fontWeight: "bold" }}>
            $ 10,000
          </p>
        </Card>
        <Card
          title="This Month Amount"
          bordered={false}
          style={{
            width: "33%",
            height: 200,
            borderStyle: "groove",
            position: "relative",
            textAlign: "center",
            margin: 5,
            borderRadius: 12,
            backgroundImage:
              "linear-gradient(to right, #A6A3A7, #46D3C0,#46D3C0, #F0F2F5)",
          }}
        >
          <p style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>
            $ 45,000
          </p>
          <p style={{ color: "#fff", fontSize: 15 }}>Increase by 6%</p>
        </Card>
      </div>
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
